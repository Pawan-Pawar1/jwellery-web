const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    //by default this names should we take no other names 
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'jwelley_shop',
    allowedFormat:["png","jpeg","jpg","avif","webp"],
    
  },
});

module.exports={
    cloudinary,
    storage,
}