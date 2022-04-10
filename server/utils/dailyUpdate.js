const cron = require('node-cron');
const mongoConnection = require("../utils/database");
const userController = require('../controllers/userController.js')

const updateUsersJob = cron.schedule("0 0 0 * * *", async function resetMessagingPoints() {

    // This is going to be the value each user is reset to each day
    const updateUserJson = {
        "messagingPoints" : 100
    }

    updateUsersPoints(updateUserJson);
    console.log("Reset all users messaging points!");
});

const updateUsersPoints = async (data) => {
    const db = mongoConnection.getDb();
    await updateUserHelper(db, data.messagingPoints);
}

const updateUserHelper = async (db, points) => {
    console.log(points)
    // Get every user and update their messaging points
    db.collection('users').updateMany(
        {},
        {$set: {"messagingPoints": points}}
    )
}

module.exports = {updateUsersJob}