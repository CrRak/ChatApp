const { MongoClient } = require('mongodb');
require('dotenv').config()
const uri = process.env.MONGODB_URI;

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