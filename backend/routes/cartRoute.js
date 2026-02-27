const router = require("express").Router();
const {addCart,getCart,removeCart}=require("../controllers/cartController");
const authMiddleware = require('../middleware/authMiddleware');
router.get("/",authMiddleware,getCart);
router.post("/add",authMiddleware,addCart);
router.delete("/delete/:id",authMiddleware,removeCart);
module.exports=router;