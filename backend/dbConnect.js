require("dotenv").config();
const mongoose=require("mongoose");

const MONGO_URI=process.env.MONGO_URI;
const Bracelet=require("./models/bracelets");
async function main(){
    try{
    await mongoose.connect(MONGO_URI);
      console.log("db connected successfull");



      const bracelets=new Bracelet({
    name:"pure gold bracelet",
    price:89000,
    weight:35,
    material:"gold",
    images:"\public\bracelets\braclate.avif",

});
await bracelets.save();
console.log("collection made successfully");
}catch (err){
    console.error("error message",err.message);
}
}

main();

