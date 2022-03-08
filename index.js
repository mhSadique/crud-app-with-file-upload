require('dotenv').config();
const cors = require('cors');
const express = require('express');
const upload = require('express-fileupload');
const { mongoClient } = require('./mongoDb/mongoDb');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const uploadRouter = require('./routes/upload');
const app = express();
// app.use(upload())
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


async function main() {
    try {
        await mongoClient.connect();
        app.use('/register', registerRouter);
        app.use('/login', loginRouter);
        app.use('/users', usersRouter);
        app.use('/products', productsRouter);
        app.use('/upload', uploadRouter);
    }
    catch (error) {
        console.log(error);
        console.log('Could not connect to database');
    }
}
main();

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});