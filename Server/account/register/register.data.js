const ResponseCode = require('../../common/enums/RegisterResponse');
const client = require('../../common/dbclient').client;

async function registerUser(user){
    // --------------------- User registeration logic -------------------------
    try {
        const result = await client.db(process.env.database).collection("userInfo").insertOne(user);
        console.log(`New User created with the following id: ${result.insertedId}`);
        return {result: ResponseCode.Success, insertedId: result.insertedId};
 
    } catch (e) {
        console.error(e);
        return {result: ResponseCode.DuplicateEmail};
    }

}

module.exports = {
    registerUser
}