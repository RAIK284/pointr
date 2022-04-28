const mongoConnection = require("../utils/database");
const encrypt = require("../utils/encrypt")
const jwt = require('jsonwebtoken');
const {ObjectId: objectID} = require("mongodb");

const createToken = async (user) => {
    const db = mongoConnection.getDb();
    const token = jwt.sign({_id: user.username}, 'Z5YWzh5F2D', {expiresIn: '7 days'});
    console.log(user)
    db.collection('users').updateOne({username: user.username}, {$push: {"tokens" : {"token" : token}}});
    return token;
}

const signupUser = async (req, res) => {
    const db = mongoConnection.getDb();
    const user = req.body;
    user.password = await encrypt.createHash(user.password);
    db.collection('users').insertOne(user);
    const token = await createToken(user);
    res.status(200).send({user, token})
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
            const user = await db.collection('users').findOne({email: req.body.email});
            const token = await createToken(user)
            res.status(200).send({user, token})
        } else {
            res.status(401).send('Incorrect password')
        }
}

const logoutUser = async (req, res) => {
    const db = mongoConnection.getDb();
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        });
        await db.collection('users').updateOne(
            {username: req.user.username},
            {$set: {tokens: req.user.tokens}}
        )
        res.sendStatus(200)
    } catch (e) {
        res.status(500).send();
    }
}

const logoutAllUserSessions = async (req, res) => {
    const db = mongoConnection.getDb();
    try {
        await db.collection('users').updateOne(
            {username: req.user.username},
            {$set: {tokens: []}}
        )
        res.sendStatus(200)
    } catch (e) {
        res.status(500).send();
    }
}

const isExistingUser = async (req, res) => {
    const db = mongoConnection.getDb();
    const validUsername = await db.collection('users').find({username: req.query.username});
    const arrayUsername = await validUsername.toArray();
    if (arrayUsername.length > 0 ) {
        res.status(401).send("Existing user");
        return;
    } else {
        res.status(200).send("User does not exist")
    }
}

const isExistingEmail = async (req, res) => {
    const db = mongoConnection.getDb();
    const validEmail = await db.collection('users').find({email: req.query.email});
    const arrayEmail = await validEmail.toArray();
    if (arrayEmail.length > 0) {
        res.status(401).send("Email in use");
        return;
    } else {
        res.status(200).send("Email does not exist")
    }
}

const createUser = async (req, res) => {
    const db = mongoConnection.getDb();
    const user = req.body;
    db.collection('users').insertOne(user);
    res.status(200).send('Created user');
}

const getPublicUserData = async (req, res) => {
    const db = mongoConnection.getDb();
    const users = await db.collection('users').find({}).toArray();
    const userList = []
    let index = 0;
    for (const user of users) {
        index++;
        if (user.isPrivate === false) {
            userList.push({
                name: user.name,
                username: user.username,
                bio: user.bio,
                funds: user.funds,
                trophies: user.trophies,
                image: user.profileImg,
                isPrivate: "false"
            })
        } else {
            userList.push({
                name: user.name,
                username: user.username,
                bio: user.bio,
                funds: "private",
                trophies: "private",
                image: user.profileImg,
                isPrivate: "true"
            })
        }
    }
    res.status(200).send(userList);
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
    if (req.body.password !== undefined) {
        req.body.password = await encrypt.createHash(req.body.password);
    }
    console.log(req.body.password)
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
    loginUser,
    logoutUser,
    logoutAllUserSessions,
    getPublicUserData,
    isExistingUser,
    isExistingEmail
}