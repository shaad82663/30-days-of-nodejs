const mysql = require('mysql')
var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '122333Shaad#'
})

con.connect( err => {
    if (err) throw err
    console.log('Connected!')
})

module.exports = (queryString, values = []) => {
    con.query(queryString, values ,(err, result) => {
        if(err) throw err
        console.log(`Query : ${queryString} executed successfully!`)
        console.log('Result :')
        console.log(result)
    })
}
