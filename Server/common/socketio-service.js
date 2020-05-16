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
        console.log(`- User with socketid ${socket.id} has connected. ${onlineUsers.length} Users online.`);

        socket.on('disconnect', () => {
            console.log(`- User with socketid ${socket.id} disconnected.`);
            const i = onlineUsers.findIndex((elem) => {
                return getSocketFromObject(elem) == socket;
            });
            onlineUsers.splice(i, 1);
        });

        // Adding user to online Users corresponding to the user ID.
        socket.on('init', (data) => {
            onlineUsers.push({[data.userId]: socket});
            console.log(onlineUsers)
        })

        // Tackling incoming message from user
        socket.on('message', async (data) => {

            // Find the user socket for the user message was sent to.
            const user_and_socket = onlineUsers.find((user_socket) => {
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
            console.log(`-- Got Message from user with data : ${data}`);
        })
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
            user2ID: data.toUserId
        }}, {upsert: true});
}

function formatMessageForDb(senderId, message){
    return {
        senderId: senderId,
        timestamp: new Date(),
        content: message
    };
}



module.exports = {
    initializeServerSocket,
    addChatMessageToDb
}
