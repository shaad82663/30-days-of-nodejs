var express = require('express');
var path = require('path'); 
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var crypto = require('crypto');

const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1/new_db'

var app = express();
//enter the name of the database in the end 
var new_db = "mongodb://localhost:27017/database_name";

app.get('/',function(req,res){
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/index.html');
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

app.post('/sign_up' ,function(req,res){
	var name = req.body.name;
	var email= req.body.email;
	var pass = req.body.password;
	var phone = req.body.phone;
	var password = getHash( pass , phone ); 				

	
	var data = {
		"name":name,
		"email":email,
		"password": password, 
		"phone" : phone
	}
	
    connect(data)
	
	console.log("DATA is " + JSON.stringify(data) );
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/success.html'); 
});

													
var getHash = ( pass , phone ) => {				
	var hmac = crypto.createHmac('sha512', phone);		
	//passing the data to be hashed
	data = hmac.update(pass);
	//Creating the hmac in the required format
	gen_hmac= data.digest('hex');
	//Printing the output on the console
	console.log("hmac : " + gen_hmac);
	return gen_hmac;
}

async function connect(data) {
    try {
      const client = new MongoClient(uri)
      await client.connect()
      console.log('Database connected!')
      const db = client.db()
      await db.collection('details').insertOne(data)
      console.log('Record inserted successfully')
    } catch (error) {
      console.log(error)
    }
  }