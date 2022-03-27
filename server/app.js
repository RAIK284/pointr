const express = require("express");
const app = express();
const mongoConnection = require('./utils/database')

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

// Pass in the express app to the routes, so it can listen for api calls
require('./routes/userRoutes')(app);
require('./routes/leaderboardRoutes')(app);
require('./routes/messagingTokenRoutes')(app);
require('./routes/storeItemRoutes')(app);
require('./routes/messageRoutes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is up on port 3000')
});

mongoConnection.mongoConnect();