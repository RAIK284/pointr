const userController = require("../controllers/userController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.get('/api/user', userController.readUser);

    router.post('/api/user', userController.createUser);

    router.patch('/api/user', userController.updateUser);

    router.delete('/api/user', userController.deleteUser);

    app.use('/', router);
};