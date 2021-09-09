const express = require('express')
var cors = require('cors')
require("dotenv").config()

const app = express()
/*
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))
*/
app.use(cors())
app.get('/posts', (req, res) =>{
    res.send("Get any information")
})

app.post('/posts', (req, res) => {
    res.send("Thanks for image")
})

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`Listen on port ${port}...`)
})