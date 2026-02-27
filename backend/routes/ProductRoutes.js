const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../config/cloudConfig");
const upload = multer({ storage });
const isAdmin=require("../middleware/isAdmin");
const authMiddleware=require("../middleware/authMiddleware");
const productController = require("../controllers/ProductController");


router.post(
  "/file",
  authMiddleware,
  isAdmin,
  upload.single("image"),
  productController.createProduct
);

router.get("/",
  productController.getProduct
)
router.get("/:id",
  productController.getOneProduct
)
router.put("/:id",
  authMiddleware,
  isAdmin,
  upload.single("image"),
  productController.updateProduct
)
router.delete("/:id",
  authMiddleware,
  isAdmin,
 productController.deleteProduct
)
module.exports = router;
