import Usermodel from "../Model/User.js"


const Singleuser=async(req,res)=>{
    try{
  const user = await Usermodel.findById(req.params.id)
  return res.send(user)
    }catch(err){
        console.log(err)
        return res.status(500).json({ msg: err });
    }
}

export {Singleuser}