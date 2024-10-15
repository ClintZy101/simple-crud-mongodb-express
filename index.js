const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.get('/', (req, res)=> {
    res.send('Hello from Node API ser')
})

mongoose.connect("mongodb+srv://clint_tay:clinton2024@backend-simple.omh0a.mongodb.net/?retryWrites=true&w=majority&appName=backend-simple").then(()=> {
    console.log('connected to the database');
    app.listen(3000, ()=>{
        console.log('server is running at 3000')
    })
})
.catch(()=>{
    console.log('connection failed')
})