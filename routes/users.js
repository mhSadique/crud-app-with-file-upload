const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/token/verifyToken');
const getAllUsers = require('../middlewares/users/getAllUsers');
const getSingleUser = require('../middlewares/users/getSingleUser');

// return all users
router.get('/', verifyToken, getAllUsers);

// return a single user
router.get('/single', verifyToken, getSingleUser);

module.exports = router;