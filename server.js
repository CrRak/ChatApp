//Install express server
const express = require('express');
const path = require('path');
const app = express();
const registerRouter = require('./Server/account/register/router');
const loginRouter = require('./Server/account/login/router');
const dbclient = require('./Server/common/dbclient');
const http = require('http').createServer(app);
const socketio_service = require('./Server/common/socketio-service');
const socketio = require('socket.io')(http);

// Initialize Server socket for service
socketio_service.initializeServerSocket(socketio);

socketio.on('connect', (socket) => {
})

// Connect to MongoDB client
dbclient.connect();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ChatApp'));

// For post body
app.use(express.json());
app.use(express.urlencoded());

// Allow cross origin from localhost
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Routers 
app.use('/register', registerRouter);
app.use('/login', loginRouter);


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/ChatApp/index.html'));
});

// Start the app by listening on the default Heroku port
http.listen(process.env.PORT || 8080, () => {
    console.log("Server started.")
});