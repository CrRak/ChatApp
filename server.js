//Install express server
const express = require('express');
const path = require('path');
const app = express();
const registerRouter = require('./Server/account/register/router');
const loginRouter = require('./Server/account/login/router');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ChatApp'));

// For post body
app.use(express.json());
app.use(express.urlencoded());

// Routers 
app.use('/register', registerRouter);
app.use('/login', loginRouter);


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/ChatApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);