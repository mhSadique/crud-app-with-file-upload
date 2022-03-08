const { productsCollection } = require("../../mongoDb/mongoDb");

const getAllProducts = async (req, res) => {
    const cursor = productsCollection.find({});
    const products = await cursor.toArray();
    res.json(products);
}

module.exports = getAllProducts;