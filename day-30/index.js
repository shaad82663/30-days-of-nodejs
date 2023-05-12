const express = require('express');
const app = express();
const axios = require('axios')

require('dotenv').config({path : './config/.env'})

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
app.set('view engine', 'ejs');
var access_token = "";
console.log(process.env.CLIENT_ID)
console.log(process.env.CLIENT_SECRET)
app.get('/', function(req, res) {
  res.redirect('https://github.com/login/oauth/authorize?client_id=Iv1.43349fb418852ae5');
});

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));


//callback route
app.get('/github/callback', (req, res) => {
  const requestToken = req.query.code
  
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    access_token = response.data.access_token
    res.redirect('/success');
  })
})

app.get('/success', function(req, res) {

  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: 'token ' + access_token
    }
  }).then((response) => {
    const { name, url, id, bio } = response.data;
    const responseData = { name, url, id, bio };
    // console.log(responseData);
    res.send(responseData);
  })
});