const { usersCollection } = require("../../mongoDb/mongoDb");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const logInUser = async (req, res) => {
    const query = { username: req.body.username };
    const user = await usersCollection.findOne(query);
    if (!user) {
        res.send({ error: 'Invalid user!' })
    } else {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const u = { name: user.username };
            const accessToken = jwt.sign(u, process.env.ACCESS_TOKEN_SECRET);
            res.json({
                message: 'Logged in successfully',
                token: accessToken
            })
        }
    }
}

module.exports = logInUser;