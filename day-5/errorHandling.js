const fs = require('fs')
const err = new Error('This is error')

console.log(err.message)


function nSCallback(error, data) {
  if (error) {
    console.error('Error : ', error);
    return;
  }
  console.log(data);
}
fs.readFile('my.txt', nSCallback);
// fs.readFile('file_does_not_exists', nSCallback);	