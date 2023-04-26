//3.Promise

// Event-first callbacks error can be converted into promise usinng built-in util.promisfy()

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

readFile('my.txt')
    .then(res => console.log(res))
    .catch(err => console.log(err))

function square(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof n !== 'number'){
                reject(new TypeError(`n: exoected number but got ${typeof n}`))
            }
            const result = n * n
            resolve(result)
        }, 1000);
    }, 1000)    
}

square('8')
    .then(res => console.log(res))
    .catch(err => console.log(err.message))