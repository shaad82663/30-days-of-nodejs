const http = require('http')
const fs = require('fs')

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "application/pdf"})

    fs.readFile('file.pdf', (err, data) => {
      if(err) throw err

      console.log('Serving pdf')
      res.end(data)
    })

}).listen(port, host, (err) => {
    if(err) return console.log('Error' + err)
    console.log(`Server listening over ${host}:${port}`)
})