const ResponseCode = require('../../common/enums/RegisterResponse');

function registerUser(user){
    // --------------------- User registeration logic -------------------------
    return ResponseCode.Success;
}

module.exports = {
    registerUser
}