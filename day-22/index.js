////////////////////////////////////////DECODER////////////////////////////////////////////////////////
const sd = require('string_decoder').StringDecoder

const decoder = new sd('utf-8')

const buff = Buffer('This is buffer')


//buffer w/o decoding
console.log(buff)


//buffer after decoding
console.log(decoder.write(buff))