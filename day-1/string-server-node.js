const http = require('http')
const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/plain"})
    res.write('Sent string from server')
    res.end()
})

server.listen(port, host, (err) => {
    if(err) return console.log('Error' + err)
    console.log(`Server listening over ${host}:${port}`)
})