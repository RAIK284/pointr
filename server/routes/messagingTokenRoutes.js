const messagingTokenController = require("../controllers/messagingTokenController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.get('/api/token', messagingTokenController.readToken);

    router.post('/api/token', messagingTokenController.createToken);

    router.patch('/api/token', messagingTokenController.updateToken);

    router.delete('/api/token', messagingTokenController.deleteToken);

    app.use('/', router);
};