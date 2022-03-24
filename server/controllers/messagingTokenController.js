const mongoConnection = require("../utils/database");

const createToken = (req, res) => {
    const db = mongoConnection.getDb();
    db.collection('messagingTokens').insertOne(req.body);
    res.status(200).send('Created token');
}

const readToken = (req, res) => {
    if (!req.query.name) {
        return res.send("You must add a query for a specific token");
    }
    const db = mongoConnection.getDb();
    db.collection('messagingTokens').findOne({name: req.query.name})
        .then(token => res.send(token));
}

const updateToken = async (req, res) => {
    const db = mongoConnection.getDb();
    for (let key in req.body) {
        await updateTokenHelper(db, key, req);
    }
    res.status(200).send('Updated user');
}

const updateTokenHelper = async (db, key, req) => {
    db.collection('messagingTokens').updateOne(
        {name: req.query.name},
        {$set: {[key]: req.body[key]}}
    )
}

const deleteToken = (req, res) => {
    const db = mongoConnection.getDb();

    db.collection('messagingTokens').deleteOne({name: req.body.name}).then(() => {
        res.status(200).send('Deleted token');
    });
}

module.exports = {
    createToken,
    readToken,
    updateToken,
    deleteToken
}