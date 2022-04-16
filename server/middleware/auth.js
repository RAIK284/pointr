const jwt = require('jsonwebtoken');
const mongoConnection = require("../utils/database");

const auth = async (req, res, next) => {
    const db = mongoConnection.getDb();
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'Z5YWzh5F2D');
        const user = await db.collection('users').findOne({username: decoded._id, 'tokens.token' : token});

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({error: "Unauthenticated user"})
    }
}

module.exports = auth;