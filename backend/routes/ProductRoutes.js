const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../config/cloudConfig");
const upload = multer({ storage });

const productController = require("../controllers/ProductController");

router.post(
  "/file",
  upload.single("image"),
  productController.createProduct
);

router.get("/",
  productController.getProduct
)
router.get("/:id",
  productController.getOneProduct
)
router.delete("/:id",
 productController.deleteProduct
)
module.exports = router;
