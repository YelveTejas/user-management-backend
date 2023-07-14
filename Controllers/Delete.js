import Usermodel from "../Model/User.js"


const Deleteuser=async(req,res)=>{
    try{
  const user = await Usermodel.findByIdAndDelete(req.params.id)
  if(!user){
    return res.status(404).json({msg:"User Did Not Found"})
  }
  return res.status(200).json({msg:'User Deleted Successfully'})
    }catch(err){
  console.log(err)
  return res.status(500).json({'error':err})
    }
}


export {Deleteuser}