let io = undefined;

const onlineUsers = [];


function initializeServerSocket(socket){
    io = socket;
    console.log('Socket.io Server Socket initialized successfully.');

    // Listen for socket connection event
    io.on('connection', (socket) => {
        console.log(`- User with socketid ${socket.id} has connected.`);
        onlineUsers.push(socket);
        socket.on('disconnect', () => {
            console.log(`- User with socketid ${socket.id} disconnected.`);
            const i = onlineUsers.indexOf(socket);
            onlineUsers.splice(i, 1);
        });

        // Tacking incoming message from user
        socket.on('message', (data) => {
            console.log(data);
        })
    });
}



module.exports = {
    initializeServerSocket
}
