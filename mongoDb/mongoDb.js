require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const uri = process.env.MONGODB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;
const usersCollectionName = process.env.USERS_COLLECTION_NAME;
const productsCollectionName = process.env.PRODUCTS_COLLECTION_NAME;

const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoClient.db(dbName);
const usersCollection = database.collection(usersCollectionName);
const productsCollection = database.collection(productsCollectionName);

module.exports = { mongoClient, usersCollection, productsCollection, ObjectId };
