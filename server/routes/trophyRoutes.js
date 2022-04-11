const trophyController = require("../controllers/trophyController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.post('/api/trophy', trophyController.createTrophy);

    app.use('/', router);
};