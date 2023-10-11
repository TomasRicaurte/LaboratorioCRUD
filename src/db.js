const { MongoClient } = require('mongodb')
require('dotenv').config()

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "test";

async function connectDB() {
    try {
        await client.connect ();
    } catch (error) {
        console.log(error)
    }
    return client.db(dbName)
};

module.exports = connectDB;
