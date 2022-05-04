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

const getTrophyList = async () => {
    const db = mongoConnection.getDb();
    const itemList = {};
    // Passing in an empty object for the search parameter in find() gives back even item in the collection
    const items = await db.collection('storeItems').find({}).toArray();
    await items.forEach((item) => {
        itemList[item.name] = 0;
    });
    return await itemList;
}

const getMostPopularTrophy = (trophyList) => {
    const keys = Object.keys(trophyList);
    //Initialize trophy and key to first and compare each.
    let mostPopularValue = trophyList[keys[0]];
    let mostPopular = keys[0];
    //For each trophy, if one is more popular than the initial, set trophy and key.
    for (const key of keys) {
        const value = trophyList[key];
        if (value > mostPopularValue) {
            mostPopular = key;
            mostPopularValue = value;
        }
    }
    return mostPopular
}

const getTrophyCounts = async (trophyList) => {
    const db = mongoConnection.getDb();
    const users = await db.collection('users').find({}).toArray();
    for (const user of users) {
        for (const trophy of user.trophies) {
            trophyList[trophy.name] = trophyList[trophy.name] + 1;
        }
    }
    return trophyList;
}

const readMostPopularStoreItem = async (req, res) => {
    const trophyList = await getTrophyList();
    const trophyListCounts = getTrophyCounts(await trophyList);
    const mostPopularTrophy = await getMostPopularTrophy(await trophyListCounts);
    res.status(200).send({"name": mostPopularTrophy.toString()});
}

const addUserToStoreItemList = async (req, res) => {
    const db = mongoConnection.getDb();
    const storeItem = await db.collection('storeItems').findOne({name: req.query.name});
    const storeItemUserList = await storeItem.userList;
    await storeItemUserList.push(req.body.user)

    db.collection('storeItems').updateOne(
        {name: req.body.name},
        {$set: {userList: storeItemUserList}}
    )

    res.status(200).send('Updated store item');
}

const updateStoreItem = async (req, res) => {
    const db = mongoConnection.getDb();
    for (let key in req.body) {
        await updateStoreItemHelper(db, key, req);
    }
    res.status(200).send('Updated store item');
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
    readMostPopularStoreItem,
    addUserToStoreItemList,
    readStoreItem,
    updateStoreItem,
    deleteStoreItem
}