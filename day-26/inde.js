//Name of the file: totalmem.js
var os = require('os');

console.log('os.cpus()  '+os.cpus().length)
console.log('os.arch()  '+os.arch()) 
console.log('os.endianness() '+os.endianness())
console.log('os.freemem() '+os.freemem()/1024)
console.log('os.hostname() '+os.hostname())   
console.log('os.homedir() '+os.homedir())   
console.log('os.platform() '+os.platform())  
console.log('os.release() '+os.release())
console.log('os.tmpdir() '+os.tmpdir() )
console.log('os.totalmem() '+os.totalmem() )   
console.log('os.uptime() '+os.uptime())   
console.log('os.type() '+os.type()) 