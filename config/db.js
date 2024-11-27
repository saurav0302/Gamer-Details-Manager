const mongoose = require('mongoose')
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_LOCAL_URL;

mongoose.connect(MONGODB_URI)

const db = mongoose.connection;


// Default event listeners for database connection
db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

db.on('disconnected', () => {
    console.log("Disconnected from MongoDB server");
});

db.on('error', (err) => {
    console.log("Encountered an error: " + err);
});

// Export module
module.exports = db;
