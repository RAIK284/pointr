const userController = require("../controllers/userController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.get('/user', userController.readUser);

    app.use('/', router);
};