const express = require("express");
const app = express();
const mongoConnection = require('./utils/database')

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

// Pass in the express app to the routes, so it can listen for api calls
require('./routes/userRoutes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is up on port 3000')
});

mongoConnection.mongoConnect();