const mongoConnection = require("../utils/database");
const encrypt = require("../utils/encrypt")
const {ObjectId: objectID} = require("mongodb");

const signupUser = async (req, res) => {
    const db = mongoConnection.getDb();
    const user = req.body;
    user.password = await encrypt.createHash(user.password);
    db.collection('users').insertOne(user);
    res.status(200).send('Created user');
}

const loginUser = async (req, res) => {
    const db = mongoConnection.getDb();
    const email = await req.body.email;
    const password = await req.body.password;
    const validEmail = await db.collection('users').find({email: req.body.email});
    const arrayEmail = await validEmail.toArray();
    if (arrayEmail.length === 0) {
        res.status(401).send("Invalid email");
        return;
    }
    const isCorrectPassword = await encrypt.checkHash(password, email);
    if (isCorrectPassword) {
        res.status(200).send('Email and password match!')
    } else {
        res.status(401).send('Incorrect info')
    }
}

const createUser = async (req, res) => {
    const db = mongoConnection.getDb();
    const user = req.body;
    db.collection('users').insertOne(user);
    res.status(200).send('Created user');
}

const readUser = (req, res) => {
    const db = mongoConnection.getDb();
    if (!req.query.username && !req.query.email && !req.query.id) {
        return res.send("You must add a query for a specific user");
    } else if (req.query.username) {
        db.collection('users').findOne({username: req.query.username})
            .then(user => res.status(200).send(user));
    } else if (req.query.email) {
        db.collection('users').findOne({email: req.query.email})
            .then(user => res.status(200).send(user));
    } else if (req.query.id) {
        const objectID = require('mongodb').ObjectId;
        db.collection('users').findOne({"_id": new objectID(req.query.id)})
            .then(user => res.status(200).send(user));
    }
}

const updateUser = async (req, res) => {
    const db = mongoConnection.getDb();
    for (let key in req.body) {
        await updateUserHelper(db, key, req);
    }
    res.status(200).send('Updated user');
}

const updateUserHelper = async (db, key, req) => {
    db.collection('users').updateOne(
        {username: req.query.username},
        {$set: {[key]: req.body[key]}}
    )
}

const deleteUser = (req, res) => {
    const db = mongoConnection.getDb();

    db.collection('users').deleteOne({username: req.body.username}).then(() => {
        res.status(200).send('Deleted user');
    });
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    signupUser,
    loginUser
}