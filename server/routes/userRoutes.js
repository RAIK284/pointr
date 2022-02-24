const userController = require("../controllers/userController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.get('/api/user', userController.readUser);

    router.post('/api/user', userController.updateUser);

    app.use('/', router);
};