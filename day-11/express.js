const express = require('express')
const app = express()

//Express route
app.get('/', (req, res)=> {
    res.send({
        success : true,
        message : 'Message from server'
    })
})

//Querying in express route
app.get('/signup', (req, res) => {
    const name = req.query.name
    const id = req.query.email   
    res.send({
        success : true,
        name,
        id
    })
})

app.listen(3000, () => {
    console.log('Server Started Listening Over Port 3000')
})