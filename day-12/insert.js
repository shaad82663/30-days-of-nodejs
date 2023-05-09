const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017/new_db';

const connectDB = (data) => {
MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(client => {
    const db = client.db();
    console.log(`Darabse connected on ${url}`)
    const detailsCollection = db.collection("details")
    detailsCollection.insertOne(data)
      .then(result => {
        console.log('Data inseted')
        // console.log(detailsCollection)
        client.close()
      })
      .catch(err => {
        client.close()
        console.log(`Error in insertion: ${err}`)
      })
  })
  .catch(err => console.log(err.stack));
}

module.exports =  connectDB