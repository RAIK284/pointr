const messageController = require("../controllers/messageController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.get('/api/message', messageController.readMessage);

    router.post('/api/message', messageController.createMessage);

    router.delete('/api/message', messageController.deleteMessage);

    app.use('/', router);
};