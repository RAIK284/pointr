const mongoConnection = require("../utils/database");
const {ObjectId: objectID} = require("mongodb");

const createMessage = (req, res) => {
    const db = mongoConnection.getDb();
    db.collection('messages').insertOne(req.body);
    res.status(200).send('Created message');
}

const readMessage = async (req, res) => {
    const db = mongoConnection.getDb();
    // This would be an empty query. Returns every message in the db
    if (!req.query.sender && !req.query.receiver && !req.query.id) {
        const messageList = [];
        const messages = await db.collection('messages').find({}).toArray();
        await messages.forEach((message) => {
            messageList.push(message);
        });
        res.send(messageList);
    } else if (req.query.sender) {
        const messageList = [];
        const messages = await db.collection('messages').find({sender: req.query.sender}).toArray();
        await messages.forEach((message) => {
            messageList.push(message);
        });
        res.send(messageList);
    } else if (req.query.receiver) {
        const messageList = [];
        const messages = await db.collection('messages').find({receiver: req.query.receiver}).toArray();
        await messages.forEach((message) => {
            messageList.push(message);
        });
        res.send(messageList);
    } else if (req.query.id) {
        const objectID = require('mongodb').ObjectId;
            db.collection('messages').findOne({"_id": new objectID(req.query.id)})
                .then(item => res.send(item));
    } else {
        res.send("Invalid query")
    }
}

const deleteMessage = (req, res) => {
    const db = mongoConnection.getDb();
    const objectID = require('mongodb').ObjectId;
    db.collection('messages').deleteOne({"_id": new objectID(req.query.id)}).then(() => {
        res.status(200).send('Deleted message');
    });
}

module.exports = {
    createMessage,
    readMessage,
    deleteMessage
}