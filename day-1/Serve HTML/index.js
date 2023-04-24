const http = require('http')
const fs = require('fs')

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/html"})

    fs.readFile('index.html', (err, data) => {
        if(err) throw err
        console.log('Success')
        res.end(data)
    }) 
}).listen(port, host, () => {
    console.log(`Server listening over ${host}:${port}`)
})