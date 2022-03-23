const leaderboardController = require("../controllers/leaderboardController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.get('/api/leaderboard', leaderboardController.readLeaderboard);

    app.use('/', router);
};