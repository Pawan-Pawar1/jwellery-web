if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute=require("./routes/AuthRoute");
const productRoutes = require("./routes/ProductRoutes");
const cartRoute =require("./routes/cartRoute");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use("/uploads", express.static("uploads"));
app.use("/",authRoute);
app.use("/cart",cartRoute);
app.use("/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

module.exports = app;
