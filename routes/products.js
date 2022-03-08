const express = require('express');
const router = express.Router();
const createNewProduct = require('../middlewares/products/createNewProduct');
const getAllProducts = require('../middlewares/products/getAllProducts');
const verifyToken = require('../middlewares/token/verifyToken');

// create new user
router.post('/', verifyToken, createNewProduct);

// return all the products in the db
router.get('/', verifyToken, getAllProducts);

module.exports = router;