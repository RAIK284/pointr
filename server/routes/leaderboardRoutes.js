const leaderboardController = require("../controllers/leaderboardController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.get('/api/leaderboard', userController.readUser);

    app.use('/', router);
};