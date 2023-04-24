const ws = require('fs')

const {Console} = require('console')

const output = ws.createWriteStream('./stdout.log')
const error = ws.createWriteStream('./stderr.log')

const print = new Console(output, error)

const roll = 22
print.log("roll %d", roll)