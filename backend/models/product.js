const mongoose =require("mongoose");

const productSchema=new mongoose.Schema(
    {
        name:{
              type:String,
              required:true,
        }, 
         category: {
      type: String,
      enum: ["ring", "bracelet", "necklace", "earring"],
      required: true,
    },
    isTrending:{
        type:Boolean,
        default:false,
    },
    isNew:{
        type:Boolean,
        default:false,
    },
    isBestSeller:{
        type:Boolean,
        default:false,
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
        description:{
            type:String,
            required:true
        },

        images:{
             url:String,
             filename:String,
        }
    }
);

const Product=mongoose.model("Product",productSchema);

module.exports=Product;