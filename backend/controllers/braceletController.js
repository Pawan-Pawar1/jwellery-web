const Bracelet = require("../models/bracelets");

module.exports.createBracelet = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const { name, price, weight, material } = req.body;

    const newBracelet = new Bracelet({
      name,
      price,
      weight,
      material,
      images: {
        url: req.file.path,        // Cloudinary secure_url
        filename: req.file.filename // Cloudinary public_id
      }
    });

    await newBracelet.save();

    res.status(201).json({
      message: "Bracelet created successfully",
      bracelet: newBracelet
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.getBracelet=async (req,res)=>{
    const bracelets = await Bracelet.find();
    console.log(bracelets);
    res.send(bracelets);
}