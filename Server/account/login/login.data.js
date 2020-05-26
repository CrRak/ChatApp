const ResponseCode = require('../../common/enums/LoginResponse');
const client = require('../../common/dbclient').client;

async function loginUser(user){

   try{
        var result = await client.db(process.env.database).collection('userInfo').findOne({email: user.email, password: user.password});
        if(result == null) return {result: ResponseCode.InvalidCredentials};
        else return {result: ResponseCode.Success, user: result};
 
    } catch (e) {
        console.error(e);
        return {result: ResponseCode.InvalidCredentials};

    }

}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 

module.exports = {
    loginUser
}