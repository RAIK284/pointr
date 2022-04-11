const mongoConnection = require("../utils/database");

const createTrophy = (req, res) => {
    const db = mongoConnection.getDb();
    db.collection('users').updateOne({username: req.query.username}, {$push: {"trophies" : req.body}});
    res.status(200).send('Created trophy');
}

module.exports = {
    createTrophy
}