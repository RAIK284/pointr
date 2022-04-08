const userController = require("../controllers/userController");

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.post('/api/signup', userController.signupUser);

    router.post('/api/login', userController.loginUser);

    router.get('/api/existingUser', userController.isExistingUser);

    router.get('/api/existingEmail', userController.isExistingEmail);

    router.get('/api/user', userController.readUser);

    router.post('/api/user', userController.createUser);

    router.patch('/api/user', userController.updateUser);

    router.delete('/api/user', userController.deleteUser);

    app.use('/', router);
};