const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();

module.exports.connect = async () => {
    const uri = await mongod.getConnectionString();

    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    };

    console.log("Connected to DB!");

    await mongoose.connect(uri, mongooseOpts);
    
};