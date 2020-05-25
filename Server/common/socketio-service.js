let io = undefined;
const dbclient = require('./dbclient').client;

// Stores all users in {userId: socket} format
const onlineUsers = [];

// Gets the socket connection object
function getSocketFromObject(obj){
    if(obj) return Object.values(obj)[0];
    else return undefined;
}

// Gets the userId from onlineUsers matching certain condition
function getUserFromObject(obj){
    if(obj) return Object.keys(obj)[0];
    else return undefined;
}

function initializeServerSocket(server_socket){
    io = server_socket;
    console.log('Socket.io Server Socket initialized successfully.');

    // Listen for socket connection event
    io.on('connection', (socket) => {
        socket.on('disconnect', () => {
            console.log(`- User with socketid ${socket.id} disconnected.`);
            const i = onlineUsers.findIndex((elem) => {
                return getSocketFromObject(elem) == socket;
            });

            if( i != -1 ){
              io.emit('userDisconnectedFromServer', getUserFromObject(onlineUsers[i]));
            }

            onlineUsers.splice(i, 1);
        });

        // Adding user to online Users corresponding to the user ID.
        socket.on('init', async (data) => {
            const i = onlineUsers.findIndex((elem) => {
              return getSocketFromObject(elem) == socket;
            });

            if(i == -1){
                onlineUsers.push({[data.userId]: socket});
                io.emit('userConnectedOnServer', data.userId);
            }
            else{
                // console.log(onlineUsers);
                onlineUsers[i][data.userId] = socket;
                console.log(`- Socket updated for userId ${data.userId}`)
            }
            console.log(`- User with socketid ${socket.id} has connected. ${onlineUsers.length} Users online.`);
            try{
                var userChats = await getConversationsForUser(data.userId);

                // Set active if user online
                for(let i = 0; i < userChats.length; i++){
                  const k = onlineUsers.findIndex((user) =>{
                      const onlineUserId = getUserFromObject(user);
                    return (userChats[i].user1ID ==  onlineUserId && data.userId != onlineUserId) 
                            || (userChats[i].user2ID == onlineUserId && data.userId  != onlineUserId);
                  })

                  if(k!=-1){
                    userChats[i].active = true;
                  }else{
                      userChats[i].active = false;
                  }
                }
            }catch (e){
                console.log(`---- Error occured in fetching conversations from database in socketio-service : ${e}`)
            }

            // Emit conversation list for the particular user
            console.log(`-- Got ${userChats.length} conversations for user id ${data.userId}`);
            socket.emit('chatList', userChats);
        })

        // Tackling incoming message from user
        socket.on('message', async (data) => {

            // Find the user socket for the user message was sent to.
            const user_and_socket = onlineUsers.find((user_socket) => {
              console.log(`## ${Object.keys(user_socket)}`);
                return getUserFromObject(user_socket) == data.toUserId;
            });

            const user_socket = getSocketFromObject(user_and_socket);

            // Send the message on toUser socket if the user is online.
            if( user_socket ){
                user_socket.emit('message', data);
            }
            try{
                // Inserts the message into database.
                await addChatMessageToDb(data);
            } catch(e){
                console.log(`---- Error occured in updating database in socketio-service : ${e}`)
            }
            console.log(`-- Got Message from user ${data.fromUserId} to user ${data.toUserId} with content : ${data.message}`);
        });


        // Tackling search for users
        socket.on('search', async (data) => {

          console.log(data);
            try{
                // Gets users from database.
                const results = await getUsersForSearchParameter(data);
                socket.emit('searchResults', results);
                console.log(`-- Got ${results.length} Search results from the database.`);
            } catch(e){
                console.log(`---- Error occured in querying database in socketio-service : ${e}`)
            }

        });


        // Tackling Image change from user
        socket.on('uploadedImage', async (data) =>{
          try{
            await updateImageUrlAsBase64(data);
            socket.emit('imageListener', data.image);
            console.log('-- Updated userImage for all instances of userId ' + data.userId);
          }catch(e){
            console.log('---- Error occured while updating image in database ' + e);
          }
        });

    });
}

async function addChatMessageToDb(data){
    var newMessage = formatMessageForDb(data.fromUserId, data.message);

    // Inserts the new message into database for the conversation
    // Creates a new document if the conversation doesn't exist.
    await dbclient.db('test')
        .collection('chatInfo')
        .updateOne({
            $or: [
                { $and: [{ user1ID: data.fromUserId }, { user2ID: data.toUserId }] },
                { $and: [{ user2ID: data.fromUserId }, { user1ID: data.toUserId }] }
            ]
        }, {$push: {messages: newMessage}, $setOnInsert: {
            user1ID: data.fromUserId,
            user1Name: data.fromUserName,
            user1Image: data.fromUserImage,
            user2ID: data.toUserId,
            user2Name: data.toUserName,
            user2Image: data.toUserImage,
        }}, {upsert: true});
}

function formatMessageForDb(senderId, message){
    return {
        senderId: senderId,
        timestamp: new Date(),
        content: message
    };
}

async function getConversationsForUser(userId){
    return await dbclient.db('test')
            .collection('chatInfo')
            .find({
                $or: [{ user1ID: userId }, { user2ID: userId }]
            }).toArray();
}

async function getUsersForSearchParameter(filter){
    return await dbclient.db('test')
            .collection('userInfo')
            .find({
                name : {$regex: filter, $options: "i"}
            }).toArray();
}

async function updateImageUrlAsBase64(data){
        await dbclient.db('test')
            .collection('userInfo')
            .updateOne({
                _id : data.userId
            }, {
                $set : {image: data.image}
            });

        await dbclient.db('test')
        .collection('chatInfo')
        .updateOne({
            user1ID : data.userId
        }, {
            $set : {user1Image: data.image}
        });

        await dbclient.db('test')
        .collection('chatInfo')
        .updateOne({
            user2ID  : data.userId
        }, {
            $set : {user2Image: data.image}
        });
}



module.exports = {
    initializeServerSocket,
}
