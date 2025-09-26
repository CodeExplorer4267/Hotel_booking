import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer';
import { connectDB } from './db/db.js';

const app=express();
app.use(cors());
app.use(bodyParser.json());

const PORT=5000;

//connect to database
connectDB()

app.get('/',(req,res)=>{
    res.send("Hello world")
})

//send mail
app.post('/sendmail',async(req,res)=>{
    const {name,email,contact}=req.body
   try {
    let transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: "rupambhadra478@gmail.com",  // your email
            pass: "qdcx rxws rica xakx",
        }
    })
    await transporter.sendMail({
      from: '"My App" <rupambhadra478@gmail.com>',
      to: email,
      subject: "Welcome to Our Newsletter 🎉",
      text: `Welcome ${name}, thanks for subscribing!`,
      html: `<h2>Welcome ${name}!</h2><p>Thank you for subscribing with contact: ${contact}</p>`,
    });

    res.status(200).json({ message: "Email sent successfully!" });
   } catch (error) {
     console.log(error);
     res.status(500).json({success:false,message:"Email not send"})
   }
})

app.listen(PORT,()=>{
    console.log(`Server is running on port :${PORT}`)
})