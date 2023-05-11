const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1/new_db'
async function connect() {
  try {
    const client = new MongoClient(uri)
    await client.connect()
    console.log('Database connected!')
    const db = client.db()
    const data = { name: 'shaad', age: '21', roll : 123 }
    //---------------------------------------------Insert a document---------------------------------------------
    await db.collection('details').insertOne(data)
    console.log('Record inserted successfully')
    //---------------------------------------------Fetch all documents---------------------------------------------
    const result = await db.collection('details').find({}).toArray()
    const result = await db.collection('details').findOne({})//Just one doc fetch.
    console.log('Record Read successfully')
    console.log(result)
    //---------------------------------------------Update documents---------------------------------------------
    const filter = { name: "shaad" }
    const update = { $set: { age: 99 } } // Example update operation: setting the "age" field to 30
    const updated = await db.collection('details').updateOne(filter, update)
    console.log('Updated one doc')
    console.log(updated)
    //---------------------------------------------Update Many documents---------------------------------------------
	var query = { age : {$gt : "22" } }
	//data stores the updated value
	var data = { $set : {age : "above 22" } }
	const updatedMany = await db.collection("details").updateMany(query , data)
  console.log('Updated many!')
    console.log(updatedMany)

    //---------------------------------------------Delete One document---------------------------------------------
	  var query = { age : "above 22" }
	  const deleted = await db.collection("details").deleteOne(query)
    console.log('deleted One Doc')
    //---------------------------------------------Delete Many document---------------------------------------------
    var query = { age : "above 22" }
	  await db.collection("details").deleteMany(query)
    console.log('deleted many docs')
    client.close()
  } catch (error) {
    console.log(error)
  }
}
connect()