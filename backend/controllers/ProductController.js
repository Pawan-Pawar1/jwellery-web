const Product = require("../models/product");
const cloudinary = require("../config/cloudConfig");
module.exports.createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const { name,category, price, weight, material,description } = req.body;

    const newProduct = new Product({
       name,
  category,
  price,
  weight,
  material,
  description,
  isTrending:req.body.isTrending === "on",
  isNew:req.body.isNew === "on",
  isBestSeller:req.body.isBestSeller === "on",
      images: {
        url: req.file.path,        // Cloudinary secure_url
        filename: req.file.filename // Cloudinary public_id
      }
    });

    await newProduct.save();

    res.status(201).json({
      message: "product created successfully",
      Product:newProduct
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.getProduct=async (req,res)=>{
    const product = await Product.find();
    
    res.send(product);
}
module.exports.getOneProduct=async (req,res)=>{
  const id=req.params.id;
  const product=await Product.findById(id);
  res.json(product);
}
module.exports.deleteProduct=async(req,res)=>{
  const {id}=req.params;
  const product= await Product.findById(id);
   if (!product) {
      return res.status(404).json({ message: "Item not found" });
    }

    if(product.images?.filename){
       await cloudinary.uploader.destroy(product.images.filename);
    }

     await Product.findByIdAndDelete(id);
       res.status(200).json({ message: "Deleted successfully" });

}