const mongoose = require('mongoose');

// Define the schema
const GamerDetailsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    favoriteGame: {
        type: String,
        required: true,
        trim: true,
    },
    platform: {
        type: String,
        required: true,
        enum: ['PC', 'Console', 'Mobile'],
    },
    skillLevel: {
        type: String,
        required: true,
        enum: ['Beginner', 'Intermediate', 'Pro'],
    },
    bio: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

// Create the model
const GamerDetails = mongoose.model("GamerDetails", GamerDetailsSchema);

module.exports = GamerDetails;
