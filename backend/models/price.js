const mongoose =require("mongoose");

const priceSchema=new mongoose.Schema({
    gold: { type: Number, required: true },
  silver: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now }
})

module.exports=mongoose.model("Price",priceSchema);