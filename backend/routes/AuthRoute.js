const {SignUp,Login,getProfile,Logout}=require('../controllers/AuthController');
const router = require("express").Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post("/signup",SignUp);
router.post("/login", Login);
router.get("/profile",authMiddleware, getProfile);
router.post("/logout",Logout);
module.exports =router;