const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../config/cloudConfig");
const upload = multer({ storage });

const braceletController = require("../controllers/braceletController");

router.post(
  "/file",
  upload.single("image"),
  braceletController.createBracelet
);

router.get("/",
  braceletController.getBracelet
)
module.exports = router;
