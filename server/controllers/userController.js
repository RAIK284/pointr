const mongoConnection = require("../utils/database");
const encrypt = require("../utils/encrypt")

const signupUser = async (req, res) => {
    const db = mongoConnection.getDb();
    const user = req.body;
    user.password = await encrypt.createHash(user.password);
    db.collection('users').insertOne(user);
    res.status(200).send('Created user');
}

const loginUser = async (req, res) => {
    const email = await req.body.email;
    const password = await req.body.password;
    const isCorrectPassword = await encrypt.checkHash(password, email);
    if (isCorrectPassword) {
        res.status(200).send('Email and password match!')
    } else {
        res.status(401).send('Incorrect password')
    }
}

const createUser = async (req, res) => {
    const db = mongoConnection.getDb();
    const user = req.body;
    db.collection('users').insertOne(user);
    res.status(200).send('Created user');
}

const readUser = (req, res) => {
    if (!req.query.username) {
        return res.send("You must add a query for a specific user");
    }
    const db = mongoConnection.getDb();
    db.collection('users').findOne({username: req.query.username})
        .then(user => res.send(user));
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