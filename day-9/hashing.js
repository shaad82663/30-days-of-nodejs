const crypto = require('crypto')

const algos = ['md5', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'ripemd160']

for(const algo of algos){
    const hash = crypto.createHash(algo)
    const data = hash.update('data', 'utf-8')
    const gen_data = data.digest('hex')
    console.log(`Hash Generated by ${algo} : ${gen_data}`)
}

    


