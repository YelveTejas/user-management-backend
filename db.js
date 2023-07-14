import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const mongo = process.env.mongo

export const Connection = async()=>{
    try{
     await mongoose.connect(mongo)
     console.log('MongoDB')
    }catch(err){
    console.log(err)
    }
} 
