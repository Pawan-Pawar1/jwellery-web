require("dotenv").config();
const express= require("express");
const mongoose=require("mongoose");
const cors = require("cors");

const app=express();

const URL=process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
          origin:[
            "http://localhost:5173/",
          ],
          methods:["GET", "POST", "PUT", "DELETE"],
          credentials:true,
}))

async function main(){
    await mongoose.connect(URL);

}
main().then(()=>{
    console.log("db connected");
}).catch(()=>{
    console.log("db not connected");
})
app.listen(3000,  ()=>{
    console.log("server started");
    
    
})
