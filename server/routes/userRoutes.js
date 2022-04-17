const userController = require("../controllers/userController");
const auth = require('../middleware/auth');

module.exports = (app) => {
    const express = require("express");
    const router = express.Router();

    router.post('/api/signup', userController.signupUser);

    router.post('/api/login', userController.loginUser);

    router.post('/api/logout', auth, userController.logoutUser);

    router.post('/api/logoutAllSessions', auth, userController.logoutAllUserSessions);

    router.get('/api/existingUser', userController.isExistingUser);

    router.get('/api/existingEmail', userController.isExistingEmail);

    router.get('/api/usersInfo', userController.getPublicUserData);

    router.get('/api/user', userController.readUser);

    // This endpoint returns data on the currently signed in user, based off information from an authentication token
    router.get('/api/user/self', auth, async (req, res) => {
        res.send(req.user);
    });

    router.post('/api/user', userController.createUser);

    router.patch('/api/user', userController.updateUser);

    router.delete('/api/user', userController.deleteUser);

    app.use('/', router);
};