const http = require('http')
const fs = require('fs')

//-----------------------------------------------Read file-----------------------------------------------
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/html"})
    fs.readFile('index.html', (err, data) => {
        if(err) throw err
        console.log('Read html file')
        res.end(data)
    })
}).listen(3000)

//-----------------------------------------------Write file-----------------------------------------------
//  (for all three, if file does not exist, the new file will be created)
//1. By Append  -> Append new content
fs.appendFile('writtenFile.txt', 'Appended content', (err) => {
    if(err) throw err
    console.log('Saved: fs.appendFile()')
})

//2. By Write  -> Write new file, if already exists -> replace it with new content
fs.writeFile('writtenFile.txt', 'newly written content2 ',  (err) => {
    if(err) throw err
    console.log('Saved: fs.writeFile()')
})

//3. By open  
fs.open('writtenFile.txt', 'w', (err, file) => {
    if(err) throw err
    console.log('Opened file')
})

//Update File
fs.appendFile('updatedFile.txt', `Updated on ${new Date}\n`, (err) => {
    if(err) throw err
    console.log('File updated fs.appendFile()')
})

fs.writeFile('updatedFile.txt', `Updated on ${new Date}\n`, (err) => {
    if(err) throw err
    console.log('File updated fs.writeFile()')
})

//-----------------------------------------------Delete file-----------------------------------------------
fs.unlink('deletedFile.txt', (err) => {
    if(err) throw err
    console.log('File Deleted')
})

//-----------------------------------------------Rename file-----------------------------------------------
fs.rename('newName.html', 'newName.txt', (err) => {
    if(err) throw err
    console.log('File renamed')
})