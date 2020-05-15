const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";

const client = new MongoClient(uri);

module.exports = {
    connect : async function(){
        try {
            // Connect to the MongoDB cluster
            await client.connect();
        }catch (e){
            console.error(e);
        }
    },
    client
};