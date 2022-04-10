const express = require("express");
const app = express();
const mongoConnection = require('./utils/database')
const dailyUpdate = require('./utils/dailyUpdate')
const cors = require("cors");

// Use all the proper cors headers
app.use(cors());

// Allow our app to take in json data
app.use(express.json())

// Sample post request
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

// Startup the daily job. This job resets users points every day at midnight
dailyUpdate.updateUsersJob;

// Pass in the express app to the routes, so it can listen for api calls
require('./routes/userRoutes')(app);
require('./routes/leaderboardRoutes')(app);
require('./routes/messagingTokenRoutes')(app);
require('./routes/storeItemRoutes')(app);
require('./routes/messageRoutes')(app);

// Listen to our environment port, or port 8080 if the environment port has not been set
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
});

// Setup mongodb connection
mongoConnection.mongoConnect();