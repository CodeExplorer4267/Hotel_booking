import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer';

const app=express();
app.use(cors());
app.use(bodyParser.json());

const PORT=8000;

app.get('/',(req,res)=>{
    res.send("Hello world")
})

//send mail
app.post('/sendmail',(req,res)=>{

})

app.listen(PORT,()=>{
    console.log(`Server is running on port :${PORT}`)
})