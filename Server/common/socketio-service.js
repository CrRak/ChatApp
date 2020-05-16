let io = undefined;
const db = require('./dbclient');

const onlineUsers = [];

function getSocketFromObject(obj){
    if(obj) return Object.values(obj)[0];
    else return undefined;
}

function getUserFromObject(obj){
    if(obj) return Object.keys(obj)[0];
    else return undefined;
}

function initializeServerSocket(socket){
    io = socket;
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
        })

        // Tackling incoming message from user
        socket.on('message', (data) => {

            // Find the user socket for the user message was sent to.
            const user_and_socket = onlineUsers.find((user_socket) => {
                return getUserFromObject(user_socket) == data.toUserId;
            });

            const user_socket = getSocketFromObject(user_and_socket);

            // Send the message on toUser socket if the user is online.
            if( user_socket ){
                user_socket.emit('message', data);
            }

            // TODO : Insert the message into database.
            
            console.log(`-- Got Message from user with data : ${data}`);
        })
    });
}



module.exports = {
    initializeServerSocket
}
