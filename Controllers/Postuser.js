import Usermodel from "../Model/User.js"

const Postuser = async(req,res)=>{
    try{
const user = await new Usermodel(req.body)
user.save()
return res.status(200).json('User Posted Successfully')
    }catch(err){
   console.log(err)
   return res.status(500).json(err)
    }
}


export {Postuser}