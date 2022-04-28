const mongoConnection = require("../utils/database");

const readLeaderboard = async (req, res) => {
    let numRequested = -1;
    // Check is a top amount of users was specified
    if (req.query.top) {
        numRequested = req.query.top;
    }
    const data = await getLeaderboardData();
    // If there was a top amount of users requested only send back those, otherwise send back every user sorted
    if (numRequested !== -1) {
        const result = await getTopUsers(data, numRequested);
        res.send(result);
    } else {
        res.send(data);
    }
}

const getLeaderboardData = async () => {
    const db = mongoConnection.getDb();
    const userList = [];
    // Passing in an empty object for the search parameter in find() gives back every item in the collection
    const users = await db.collection('users').find({}).toArray();
    await users.forEach((user) => {
        if (user.isPrivate === false) {
            userList.push({
                "username": user.username,
                "allTimeFunds": user.allTimeFunds,
                "profileImg": user.profileImg
            });
        }
    })
    const sortedList = (await sortUserList(userList))
    const result = await sortedList;
    return result;
}

const sortUserList = async (userList) => {
    // Sorts the returned user objects by their allTimeFunds
    userList.sort((a,b) => (a.allTimeFunds < b.allTimeFunds) ? 1 : -1);
    return userList;
}

const getTopUsers = async (data, numRequested) => {
    // Uses the "top" query to make an array containing only the amount of users requested
    const result = [];
    for (let i = 0; i < numRequested; i++) {
        result.push(data[i]);
    }
    return result;
}

module.exports = {
    readLeaderboard
}