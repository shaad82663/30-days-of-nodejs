const { spawn } = require('child_process')

const child = spawn('dir.exe')

child.stdout.on('data', (data) => {
    console.log(`Outout Data: ${data}`)
})

child.stderr.on('data', (data) => {
    console.log(`Standard Error : ${data}`)
})

child.on('error', (error) => console.log('Error : '+error))