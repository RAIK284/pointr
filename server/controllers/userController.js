const mongoConnection = require("../utils/database");

const createUser = (user) => {
    const db = mongoConnection.getDb();
    db.collection('users').insertOne(user);
}

const readUser = (req, res) => {
    if (!req.query.username) {
        return res.send("You must add a query for a specific user");
    }
    const db = mongoConnection.getDb();
    db.collection('users').findOne({name: req.query.username})
        .then(user => res.send(user));
}

module.exports = {
    createUser,
    readUser
}