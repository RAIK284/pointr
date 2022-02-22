const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// The database will be defined once a connection to between the cluster and mongodb is created
let _database;

const uri = 'mongodb+srv://pointr-admin:raikes2022@cluster0.kyao8.mongodb.net/Cluster0?retryWrites=true&w=majority';
const databaseName = 'pointr_db';

const mongoConnect = () => {
    MongoClient.connect(uri)
        .then((client) => {
            _database = client.db(databaseName);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_database) {
        return _database;
    }
    throw 'No database found!';
};

// const addUser = (db, user) => {
//     _database.collection('users').insertOne(user)
// }

// const getUser = (user) => {
//     return _database.collection('users').findOne({name: user});
// }

// TODO: Add delete and update
const updateUser = (db, user) => {
}

const deleteUser = (db, user) => {
}


module.exports = {
    mongoConnect,
    getDb
}