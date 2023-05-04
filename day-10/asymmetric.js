var crypto = require('crypto');
var fs = require('fs');

pubK = privK = fs.readFileSync('pub.key').toString();


var buf = Buffer.from('This is secret code', 'utf8');

//Encrypting the text
secretData = crypto.publicEncrypt(pubK, buf);

//printing the encrypted text
console.log(secretData.toString('utf8'));
//reading the Private key
privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera'
}

//decrypting the text using public key
origData = crypto.privateDecrypt(privK, secretData)
//Printing the original content
console.log(origData.toString());