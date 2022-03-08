const { usersCollection } = require("../../mongoDb/mongoDb");

const getSingleUser = async (req, res) => {
    const user = req.query.username;
    const query = { username: user };
    const cursor = usersCollection.find(query);
    const userDetails = await cursor.toArray();
    if (userDetails.length) {
        res.json(userDetails);
    } else {
        res.send('no such user');
    }
}

module.exports = getSingleUser;