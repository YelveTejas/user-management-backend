import Usermodel from "../Model/User.js";

const Edituser = async (req, res) => {
 
  try {
    const user = await Usermodel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User Does Not Found" });
    }
    await Usermodel.findByIdAndUpdate(req.params.id, {$set: req.body});
    return res.status(200).json({ msg: "User updated Successfully" });
  } catch (err) {
    console.log(err,'error');
  }
};

export { Edituser };
