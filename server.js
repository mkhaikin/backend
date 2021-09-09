const express = require('express')
var cors = require('cors')
require("dotenv").config()

const app = express()

var corsOptions = {
    origin: 'https://frosty-torvalds-f00827.netlify.app/',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))

//app.use(cors())
app.get('/posts', (req, res) =>{
    console.log("Get...")
    res.send("Get any information")
})

app.post('/posts', (req, res) => {
    console.log("I got a Post: " + req.body)
    res.send("Thanks for image...")
})

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`Listen on port ${port}...`)
})