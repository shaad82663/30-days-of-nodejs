const qs = require('querystring')
// console.log(qs)

const url1 = 'id=1&name=md&name=shaad'

var val_json = qs.parse(url1)
console.log(val_json)

const url2 = 'id%1&name%shaad'
var val_json = qs.parse(url2,'&','%')
console.log(val_json)

const url3 = 'id%10name%shaad'
var val_json = qs.parse(url3,'0','%')
console.log(val_json)


const obj = {
    id : 1,
    name : 'shaad'
}

var resUrl = qs.stringify(obj)
console.log(resUrl)

resUrl = qs.stringify(obj, '&', '%')
console.log(resUrl)

resUrl = qs.stringify(obj, '.')
console.log(resUrl)