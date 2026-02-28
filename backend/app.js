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
const priceRoute =require("./routes/priceRoute");
const app = express();

const allowedOrigins = ["http://localhost:5173", "https://jwellery-web.netlify.app"];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));

// 2. Handle Pre-flight for all routes
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/uploads", express.static("uploads"));
app.use("/",authRoute);
app.use("/price",priceRoute);
app.use("/cart",cartRoute);
app.use("/products", productRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

module.exports = app;
