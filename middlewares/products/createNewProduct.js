const { productsCollection } = require("../../mongoDb/mongoDb");

const createNewUser = async (req, res) => {
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        _createdBy: req.body._createdBy
    };
    const result = await productsCollection.insertOne(newProduct);
    if (result.insertedId) {
        res.json({ message: 'Product created successfully!' });
    }
}

module.exports = createNewUser;