var request = require('request');
var fs = require('fs');
require('dotenv').config({path : './config/.env'})
//enter your access token
var access_token = process.env.ACCESS_TOKEN
//Name of the file to be uploaded
var filename = 'myfile.txt';
//reading the contents 
var content = fs.readFileSync(filename);
options = {
            method: "POST",
            url: 'https://content.dropboxapi.com/2/files/upload',
            headers: {
              "Content-Type": "application/octet-stream",
              "Authorization": "Bearer " + access_token,
              "Dropbox-API-Arg": "{\"path\": \"/node-js/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
            },
            body:content
};

request(options,function(err, res,body){
     console.log("Err : " + err);
     console.log("res : " + res);
     console.log("body : " + body);    
 })