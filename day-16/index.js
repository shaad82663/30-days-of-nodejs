const zlib = require('zlib')
const fs = require('fs')

////////////////////////////////////////////////////////ZIP A FILE///////////////////////////////////////////////////////
const zip =  zlib.createGzip()   

const rs = fs.createReadStream('data.txt')
const ws = fs.createWriteStream('zippedFile.txt.gz')

rs.pipe(zip).pipe(ws)
console.log('Zipped')

//////////////////////////////////////////////////////// UNZIP A FILE///////////////////////////////////////////////////////

const unzip = zlib.createUnzip()

const zrs = fs.createReadStream('zippedFile.txt.gz')
const zws = fs.createWriteStream('unzippedFile.txt')

zrs.pipe(unzip).pipe(zws)
console.log('Unzipped')