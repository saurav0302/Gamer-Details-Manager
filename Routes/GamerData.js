const express = require('express');
const router = express.Router();
const GamerDetails = require('../Models/Gamer');

router.post('/', async (req, res) => {
    try {
        const { username, email, favoriteGame, platform, skillLevel, bio } = req.body;

        // Create a new gamer entry
        const data = new GamerDetails({
            username : username,
            email : email, 
            favoriteGame: favoriteGame, 
            platform: platform, 
            skillLevel: skillLevel, 
            bio: bio
        });

        // Save the gamer data
        const savedGamer = await data.save();
        return res.redirect('./../welcome.html');
        // Send success response
        // return res.status(201).json({
        //     message: "Gamer data saved successfully!",
        //     data: savedGamer
        // });
    } catch (error) {
        console.error(error);
        // return res.status(500).json({ 
        //     message: "An error occurred while saving gamer data.", 
        //     error: error.message 
        // });
        return res.redirect('./../error.html');
    }
});

module.exports = router;
