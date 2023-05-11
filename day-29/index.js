//Name of the file : dropbox-file-upload.js
//Including the required moduless
var request = require('request');
var fs = require('fs');

//enter your access token
var access_token = "sl.BeIhFsyEMAzTa5ymZ0FE8rvvBj5BHfofZyeo0haRW21erZdb_zTP0m2uVEz_QQ-7uo4cCrWH06MO8DK9h63VIp6pIItUNIKVP8UzmE2ZBFUgS-yv1ykavBPBHn2rjrYvrkA8JksV"
//Name of the file to be uploaded
var filename = 'myfile.txt';
//reading the contents 
var content = fs.readFileSync(filename);
//write your folder name in place of YOUR_PATH_TO_FOLDER
// For example if the folder name is njera then we can write it in the following way :
// "Dropbox-API-Arg": "{\"path\": \"/njera/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}"
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