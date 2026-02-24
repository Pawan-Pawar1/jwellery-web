const router = require("express").Router();
const {addCart,getCart}=require("../controllers/cartController");
const authMiddleware = require('../middleware/authMiddleware');
router.get("/",authMiddleware,getCart);
router.post("/add",authMiddleware,addCart);
module.exports=router;