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
             type:String,
             required:true,
        }
    }
);

const Bracelet=mongoose.model("Bracelet",braceletsSchema);

module.exports=Bracelet;