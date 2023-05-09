const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017/new_db';

const connectDB = (data) => {
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000
  })
    .then(client => {
        const db = client.db()
  // Get the collection
  const collection = db.collection('mycollection');

  // Find all records
  collection.find({}).toArray(function(err, docs) {
    if (err) {
      console.log('Error retrieving records:', err);
      return;
    }

    console.log('All records:');
    console.log(docs);

    client.close(); // Close the connection
  });
          
       
    })
    .catch(err => console.log(`Error in connecting with db: ${err}`));
}

module.exports = connectDB;
