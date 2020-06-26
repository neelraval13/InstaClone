const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => { 
    console.log("We have succesfully connected to MongoDB")
})

mongoose.connection.on('error', (err) => { 
    console.log("Error connecting to Database: ", err)
})


app.listen(PORT, () => { 
    console.log("Server is running on", PORT)
})