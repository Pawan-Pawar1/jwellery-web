const Price=require("../models/price");

module.exports.getPrice=async(req,res)=>{
    const price= await Price.findOne();
    res.json(price);
}

module.exports.updatePrice=async(req,res)=>{
    const {gold, silver}=req.body;
    const updated= await Price.findOneAndUpdate(
        {},
    { gold, silver, updatedAt: new Date() },
    { upsert: true, new: true }
    );
    res.json(updated);
}