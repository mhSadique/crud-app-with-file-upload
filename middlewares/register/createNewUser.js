const { usersCollection } = require("../../mongoDb/mongoDb");
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
    const query = { username: req.body.username };
    const userFound = await usersCollection.findOne(query);
    if (!userFound) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hashedPassword
        };
        const result = await usersCollection.insertOne(newUser);
        if (result.insertedId) {
            res.json({ message: 'User created successfully!' });
        }
    } else {
        res.send({ error: 'username already exists!' })

    }
}

module.exports = createNewUser;


// const { usersCollection } = require("../mongoDb/mongoDb");

// const createNewUser = async (req, res) => {
//     const newUser = req.body;
//     console.log(newUser);
//     const result = await usersCollection.insertOne(newUser);
//     if (result.insertedId) {
//         res.json(result);
//     }
// }

// module.exports = createNewUser;