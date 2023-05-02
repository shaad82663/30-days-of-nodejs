const http = require('http');
const fs = require('fs');
const {Transform, pipeline} = require('stream')


const server = http.createServer((req, res) => {
    if (req.url !== '/') {
        return res.end();
    }   
    
    //////////////////////////////////Read file//////////////////////////////////
    // const readFileStream = fs.createReadStream('data.txt')
    // readFileStream.pipe(res)

    ////////////////////////////////////Copy file//////////////////////////////////

    // const readFileStream = fs.createReadStream('data-small.txt')
    // const writeFileStream = fs.createWriteStream('output.txt')

    // readFileStream.on('data', (chunk) => {
    //     console.log(chunk.toString())
    //     writeFileStream.write(chunk)
    // })
    // res.end()

    ////////////////////////////////////Transform file//////////////////////////////////

    // //Creating read and write streams
    // const readFileStream = fs.createReadStream('data-small.txt')
    // const createFileStream = fs.createWriteStream('out.txt')

    // //Writing transformer logic
    // const replaceWordProcessing = new Transform({
    //     transform(chunk, encoding, callback) {
    //         const replacedStr = chunk.toString().replaceAll(/this/gi, 'That')
    //         callback(null, replacedStr)
    //     }
    // })

    // //pipe and write in output file
    //  readFileStream
    //  .pipe(replaceWordProcessing)
    //  .pipe(createFileStream)
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));