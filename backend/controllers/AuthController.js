const User=require('../models/user');
const createSecretToken=require('../util/SecretToken');
const bcrypt=require("bcrypt");

module.exports.SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    let role = "user";
    if (email === process.env.OWNER_EMAIL) {
      role = "admin";
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true, // true in production (HTTPS)
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Signup failed" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true, // true in production
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Login failed" });
  }
};
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
    res.cookie("token", "", { 
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
      expires: new Date(0) 
    });
    // Sending success response
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    // Handling errors
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};