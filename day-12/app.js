// const insertData = require('./insert')
// const readDB = require('./read')

// const data = {name : 'Shaad', age : 20}

// // insertData(data)
// readDB({})

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017/new_db');


client.connect({
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((client) => {
    const db = client.db();
    console.log(`Darabse connected`)
    const detailsCollection = db.collection("details")
    const data = {name : 'Shaad', id : 12}
    detailsCollection.insertOne(data)
      .then(result => {
        console.log('Data inseted')
        // console.log(detailsCollection)
        // client.close()
      })
      .catch(err => {
          console.log(`Error in insertion: ${err}`)
        //   client.close()
      })
      db.collection("details").find({}).toArray(function(err, result) {
        if (err) {
          console.log(`Error in find operation: ${err}`);
          // Handle the error appropriately
          return;
        }
        console.log(result);
      });

  }
  ).catch(err => {
    console.log(err)
  })