const ResponseCode = require('../../common/enums/LoginResponse');
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";

const client = new MongoClient(uri);


async function loginUser(user){

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

    // --------------------- User registeration logic -------------------------
    var resUser = {id: 1, name: "Prakhar Londhe", email: "plondhe@in.com"}
    return {result: ResponseCode.Success, user: resUser};
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 

module.exports = {
    loginUser
}