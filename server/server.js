import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app=express();
const PORT=8000;

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port :${PORT}`)
})