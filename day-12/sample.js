/*
PORT=4000
NODE_ENV=DEVELOPMENT
DB_LOCAL_URL=mongodb://0.0.0.0:27017/community-app

JWT_SECRET = KSL2JBKL2J3BKJ2B52KJBLKBSGLABALJBJKAD
JWT_EXPIRES_TIME = 2d

COOKIE_EXPIRES_TIME = 7w
*/


//module for connecting to mongoDB 

const mongoose = require('mongoose');

const connectDB =  async()=> {
   await mongoose.connect('mongodb://0.0.0.0:27017/community-app', {  
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(client => {
     console.log(`mongoDB Database is connected with db`);
     const db = await client.db()
     console.log('sad' +db)
    })
    .catch(err => console.log(err.stack));
}

// module.exports = connectDB;

connectDB()

const insertData = () => {

}