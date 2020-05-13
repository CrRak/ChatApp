const ResponseCode = require('../../common/enums/LoginResponse');

function loginUser(user){
    // --------------------- User registeration logic -------------------------
    var resUser = {id: 1, name: "Prakhar Londhe", email: "plondhe@in.com"}
    return {result: ResponseCode.Success, user: resUser};
}

module.exports = {
    loginUser
}