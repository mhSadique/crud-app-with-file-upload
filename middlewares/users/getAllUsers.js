const { usersCollection } = require("../../mongoDb/mongoDb");

const getAllUsers = async (req, res) => {
    const cursor = usersCollection.find({});
    const users = await cursor.toArray();
    res.json(users);
}

module.exports = getAllUsers;