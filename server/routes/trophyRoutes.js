const trophyController = require("../controllers/trophyController");
const auth = require('../middleware/auth');

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.post('/api/trophy', auth, trophyController.createTrophy);

    app.use('/', router);
};