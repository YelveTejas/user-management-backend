import mongoose from "mongoose";
const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        
    },
    number:{
        type:String,
        required:true
    }
})

const Usermodel = mongoose.model('users',Userschema)

export default Usermodel