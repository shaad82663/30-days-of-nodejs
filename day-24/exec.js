const { exec } = require('child_process')

exec('dir /s /b', (err, stdout, stderr) => {
     if(err){
        console.log(err)
        return
     }
     if(stderr){
        console.log(stderr)
        return
     }
     console.log(`Output : ${stdout}`)
})