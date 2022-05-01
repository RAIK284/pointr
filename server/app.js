const express = require("express");
const app = express();
const mongoConnection = require('./utils/database')
const dailyUpdate = require('./utils/dailyUpdate')
const weeklyUpdate = require('./utils/weekyNotification')
const cors = require('cors');

// Use all the proper cors headers
app.use(cors());

// Allow our app to take in json data
app.use(express.json());

// Startup the daily job. This job resets users points every day at midnight
dailyUpdate.updateUsersJob;
weeklyUpdate.sendNotificationsJob;

// Pass in the express app to the routes, so it can listen for api calls
require('./routes/userRoutes')(app);
require('./routes/leaderboardRoutes')(app);
require('./routes/messagingTokenRoutes')(app);
require('./routes/storeItemRoutes')(app);
require('./routes/messageRoutes')(app);
require('./routes/trophyRoutes')(app);


// Listen to our environment port, or port 8080 if the environment port has not been set
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
});

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Setup mongodb connection
mongoConnection.mongoConnect();