const crypto = require('crypto')
const algo = 'aes-256-ctr'
const password = '122Shaad#'

function encrypt(text) {
    const cipher = crypto.createCipher(algo,password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
}

function decrypt(text){
    const dcipher = crypto.createDecipher(algo, password)
    var decrypted = dcipher.update(text, 'hex', 'utf8')
    decrypted += dcipher.final('utf8')
    return decrypted
}


const enc = encrypt('Hello')
console.log(enc)
const dec = decrypt(enc)
console.log(dec)