let db = require('./login.data');
const ResponseCode = require('../../common/enums/LoginResponse');

async function doLogin(user){
    if(!user || !user.email || !user.password) return {result: ResponseCode.IncompleteDetails};
    else return await db.loginUser(user);
}
module.exports = {
    db,
    doLogin,
}