const jwt = require("jsonwebtoken");  
const User = require("../models/user");
module.exports = async (req, res, next) => {
  try {
    

    const token = req.cookies.token;

    if (!token) {
      console.log("❌ No token found");
      return res.status(401).json({ message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};