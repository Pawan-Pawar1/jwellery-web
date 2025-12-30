const mongoose =require("mongoose");

const braceletsSchema=new mongoose.Schema(
    {
        name:{
              type:String,
              required:true,
        },
        price:{
          type:Number,
          required:true,  
        },
        weight:{
            type:Number,
            required:true,
        },
        material:{
            type:String,
            required:true,
            enum:["gold","silver"],
        },
        images:{
             url:String,
             filename:String,
        }
    }
);

const Bracelet=mongoose.model("Bracelet",braceletsSchema);

module.exports=Bracelet;