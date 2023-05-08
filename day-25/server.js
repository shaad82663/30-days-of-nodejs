const cluster = require('cluster')
const http = require('http')
const os = require('os')
const numOfCpus = os.cpus().length

if(cluster.isMaster) {
    console.log(`Master with process id : ${process.pid} is running...`)

    for(let i=0; i<numOfCpus; i++) {
        cluster.fork()
    }

    cluster.on("exit", (worker, code, singla) => {
        console.log(`Process is with ID : ${process.pid} is dies.`)
    })
}else {
    http.createServer((req, res) => {
        res.writeHead(200);
        let sum = 0
        for(let i=0; i < 1000000; i++) sum += i
        console.log(`Done by process : ${process.pid}`)
        res.write(String(sum))
        res.end('\nAn example of clusters');
      }).listen(3000);
      console.log(`Worker with Process ID : ${process.pid} started`);
}