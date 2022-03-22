const mongoConnection = require("../utils/database");

const createUser = (req, res) => {
    const db = mongoConnection.getDb();
    db.collection('users').insertOne(req.body);
    res.sendStatus(200);
}

const readUser = (req, res) => {
    if (!req.query.username) {
        return res.send("You must add a query for a specific user");
    }
    const db = mongoConnection.getDb();
    db.collection('users').findOne({username: req.query.username})
        .then(user => res.send(user));
}

const updateUser = (req, res) => {
    const db = mongoConnection.getDb();

    for (key in req.body) {
        db.collection('users').updateOne(
            {username: req.query.username},
            {$set: {[key]: req.body[key]}}
        )
    }
}

const deleteUser = (req, res) => {
    const db = mongoConnection.getDb();

    db.collection('users').deleteOne({username: req.body.username})
}

// const updateUser = (req, res) => {
//     const db = mongoConnection.getDb();
//     const username = req.body.sender
//     console.log(req.body.sender)
//     db.collection('users').findOneAndUpdate({username: req.body.receiver}, { $addToSet: { messagesReceived: req.body } })
//
//     console.log(req.body)
// }

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}