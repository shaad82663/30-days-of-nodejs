const http = require('http')
const port = 3000
const host = '127.0.0.1'
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "application/json"})
    
    let json_res = {
        status : 200,
        message : 'success',
        code : 2600
    }
    console.log('Sending json...')
    res.end( JSON.stringify(json_res))
}).listen(port, host, (err) => {
    if(err) return console.log('Error' + err)
    console.log(`Server listening over ${host}:${port}`)
})