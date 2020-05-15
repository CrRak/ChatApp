let db = require('./register.data');
const ResponseCode = require('../../common/enums/RegisterResponse');

async function doRegister(user){
    if(!user || !user.name || !user.email || !user.password) return {result: ResponseCode.IncompleteDetails};
    else return await db.registerUser(user);
}
module.exports = {
    db,
    doRegister,
}