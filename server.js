const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./config/db')
// const cors = require('cors')
const path = require('path');

app.use(express.static('public'))
// app.use(cors())

const bodyParser=require('body-parser')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const gamerDataRouter = require('./Routes/GamerData')
app.use('/data', gamerDataRouter)


app.listen(process.env.PORT, () => {
    console.log("Server is on at port no : ",process.env.PORT );
})