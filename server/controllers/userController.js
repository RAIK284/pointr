const mongoConnection = require("../utils/database");


const readUser = (req, res) => {
    console.log("here")
    if (!req.query.username) {
        return res.send("You must add a query for a specific user");
    }
    mongoConnection.getUser(req.query.username)
        .then(user => {
        res.send(user)
    });
}

module.exports = {
    readUser
}