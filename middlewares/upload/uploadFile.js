const { usersCollection } = require("../../mongoDb/mongoDb");
const path = require('path');


const uploadFile = async (req, res) => {
    const filePath = path.join(__dirname, "./upload.html");
    res.sendFile(filePath);
}

module.exports = uploadFile;