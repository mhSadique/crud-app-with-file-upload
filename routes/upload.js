const express = require('express');
const uploadFile = require('../middlewares/upload/uploadFile');
const uploadFilePost = require('../middlewares/upload/uploadFilePost');
const router = express.Router();

// create new user
router.get('/', uploadFile);

router.post('/', uploadFilePost)

module.exports = router;