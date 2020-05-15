let db = require('./register.data');
const ResponseCode = require('../../common/enums/RegisterResponse');

function doRegister(user){
    if(!user || !user.name || !user.email || !user.password) return ResponseCode.IncompleteDetails;
    else return db.registerUser(user);
}
module.exports = {
    db,
    doRegister,
}