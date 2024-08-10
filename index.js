const express= require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB=require('./config/db')
const router=require('./routes')


const app=express()
app.use(cors({
    origin: process.env.Frontend_Url,
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use('/api', router)

const port= 8080 || process.env.PORT



connectDB()
app.listen(port, ()=>{
    console.log("server is running")
})