import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
              .then(()=>console.log("Database Connected Successfully."))
              .catch((err)=>{
                 console.log(err)
              })

    } catch (error) {
        console.log(`Error:${error.message}`)
    }
}