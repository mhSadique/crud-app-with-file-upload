const { usersCollection } = require("../../mongoDb/mongoDb");


const uploadFilePost = async (req, res) => {
    if (req.files) {
        console.log(req.files);
    } else {
        console.log('no');
    }
    res.send('good')
}

module.exports = uploadFilePost;