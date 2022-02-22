const express = require("express");
const app = express();
const mongoConnection = require('./utils/database')

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

//
// app.get('/user', async function (req, res) {
//     if (!req.query.username) {
//         return res.send("You must add a query for a specific user");
//     }
//     const user = await mongoConnection.getUser(req.query.username);
//     res.send(user)
// });

require('./routes/userRoutes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is up on port 3000')
});

mongoConnection.mongoConnect();