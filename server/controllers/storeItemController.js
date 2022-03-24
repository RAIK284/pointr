const mongoConnection = require("../utils/database");

const createStoreItem = (req, res) => {
    const db = mongoConnection.getDb();
    db.collection('storeItems').insertOne(req.body);
    res.status(200).send('Created store item');
}

const readStoreItem = async (req, res) => {
    const db = mongoConnection.getDb();
    if (!req.query.name) {
        const itemList = [];
        // Passing in an empty object for the search parameter in find() gives back even item in the collection
        const items = await db.collection('storeItems').find({}).toArray();
        await items.forEach((item) => {
            itemList.push(item);
        });
        res.send(itemList);
    } else {
        db.collection('storeItems').findOne({name: req.query.name})
            .then(item => res.send(item));
    }
}

const updateStoreItem = async (req, res) => {
    const db = mongoConnection.getDb();
    for (let key in req.body) {
        await updateStoreItemHelper(db, key, req);
    }
    res.status(200).send('Updated user');
}

const updateStoreItemHelper = async (db, key, req) => {
    db.collection('storeItems').updateOne(
        {name: req.query.name},
        {$set: {[key]: req.body[key]}}
    )
}

const deleteStoreItem = (req, res) => {
    const db = mongoConnection.getDb();

    db.collection('storeItems').deleteOne({name: req.body.name}).then(() => {
        res.status(200).send('Deleted user');
    });
}

module.exports = {
    createStoreItem,
    readStoreItem,
    updateStoreItem,
    deleteStoreItem
}