const User=require('../models/user');
const createSecretToken=require('../util/SecretToken');
const bcrypt=require("bcrypt");

module.exports.SignUp=async(req,res,next)=>{
 try{
    const {name, email,password,createdAt}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.json({message:"user already exists"});
    }
    const user= await User.create({name, email, password,createdAt});
    const token=createSecretToken(user._id);
    res.cookie("token", token,{
      httpOnly: true,
  sameSite: "lax",
  path: "/",
    });
    res.status(201).json({message:"user signed in successfully"});
    next();
 }catch(err){
    console.log(err);
 }
}

module.exports.Login = async (req, res, next) => {
  try {
    
    const {email,password } = req.body;
    console.log(email);
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       httpOnly: true,
  sameSite: "lax",
  path: "/",
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}
module.exports.getProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user, // already filtered in middleware
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load profile",
    });
  }
};
module.exports.Logout = async (req, res) => {
  try {
    // Clearing JWT cookie
    res.cookie("jwt", "", { maxAge: 0 });
    // Sending success response
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    // Handling errors
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};