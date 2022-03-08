const express = require('express');
const router = express.Router();
const createNewUser = require('../middlewares/register/createNewUser');

// create new user
router.post('/', createNewUser);

module.exports = router;