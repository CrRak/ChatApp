let db = require('./login.data');
const ResponseCode = require('../../common/enums/LoginResponse');

function doLogin(user, res){
    if(!user || !user.email || !user.password) return ResponseCode.IncompleteDetails;
    else return db.loginUser(user);
}
module.exports = {
    db,
    doLogin,
}