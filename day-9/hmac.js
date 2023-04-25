const crypto = require('crypto')

const secret = "SDJFBLSLGBAJSKLBJAKSLJBF"
const hmac = crypto.createHmac('sha256',  secret)
const data = hmac.update('This is secret msg', 'utf-8')
const gen_data = data.digest('hex')

console.log(gen_data)