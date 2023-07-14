import Usermodel from "../Model/User.js"

const Getusers=async(req,res)=>{
 try{
const users = await Usermodel.find({})
if(users.length>0){
    res.status(200).json(users)
}
 }catch(err){
    console.log(err)
    res.status(500).json({msg:err})
 }
}

export {Getusers}