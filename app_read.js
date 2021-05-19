const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url , { useUnifiedTopology: true });


const collectionFindCB = function (err , prs) {
  assert.equal(err , null);
  console.log("Found the following records.");
  console.log(prs);
  client.close();
};

const findDocuments = function ( db ) {

  const collection = db.collection('fruits');

  collection.find({}).toArray( collectionFindCB );
};


const connectCB = function (err) {
  assert.equal(null,err);
  console.log("Connected successfully to the server.");

  const db = client.db(dbName);

  findDocuments(db );

};

client.connect( connectCB );



// the useUnifiedTopology option in the client constructor will make this
// warning go away \/

// (node:2911) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring
// engine is deprecated, and will be removed in a future version. To use the new
// Server Discover and Monitoring engine, pass option
// { useUnifiedTopology: true } to the MongoClient constructor.

// Tried to put this option into the connect method but was unable. In the constructor
// worked as per the warning, and how course instructor did it.
