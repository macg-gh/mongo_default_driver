const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url , { useUnifiedTopology: true });

const logResult=function(result){
  console.log("Inserted documents, the results are:");
  console.log(result);
};

const assertOnResult=function(err, result){
  assert.equal(err , null);
  assert.equal(3 , result.result.n);
  assert.equal(3 , result.ops.length);
};

const insertManyCB=function(err, result){
  assertOnResult(err, result);
  logResult(result);
  client.close();
};

const insertDocuments = function ( db   ) {

  const collection = db.collection('fruits');

  collection.insertMany( [
    {
      name: 'Apple' ,
      score: 8,
      review: "Great fruit"
    },
    {
      name: 'Orange' ,
      score: 6,
      review: "Kinda sour"
    },
    {
      name: 'Banana' ,
      score: 9,
      review: "Great stuff!"
    }
  ] , insertManyCB );

};

const workOnConnect=function(err) {
  assert.equal(null,err);
  console.log("Connected successfully to the server.");

  const db = client.db(dbName);

  insertDocuments(db );

}

client.connect(workOnConnect);

// the useUnifiedTopology option in the client constructor will make this
// warning go away \/

// (node:2911) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring
// engine is deprecated, and will be removed in a future version. To use the new
// Server Discover and Monitoring engine, pass option
// { useUnifiedTopology: true } to the MongoClient constructor.

// Tried to put this option into the connect method but was unable. In the constructor
// worked as per the warning, and how course instructor did it.
