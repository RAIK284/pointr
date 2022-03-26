const mongoConnection = require("../utils/database");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createHash = (plainText) => {
    return bcrypt.hash(plainText, saltRounds)
        .then(hash => {
            return hash;
        });
}

const checkHash = async (password, email) => {
    const db = mongoConnection.getDb();
    const user = await db.collection('users').findOne({email})
    const hash = user.password;
    return bcrypt.compare(password, hash)
        .then(result => {return result})
}

module.exports = {
    createHash,
    checkHash
}