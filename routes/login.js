const express = require('express');
const router = express.Router();
const logInUser = require('../middlewares/login/logInUser');

// create new user
router.post('/', logInUser);

module.exports = router;