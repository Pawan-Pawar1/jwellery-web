const express = require("express");
const router = express.Router();
const isAdmin=require("../middleware/isAdmin");
const authMiddleware=require("../middleware/authMiddleware");
const {getPrice,updatePrice}=require("../controllers/priceController");

router.get("/",getPrice);
router.put("/addprice",authMiddleware,isAdmin,updatePrice);
module.exports=router;