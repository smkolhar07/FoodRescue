const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to FoodRescue API 🍱"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`FoodRescue server running on port ${PORT} 🚀`);
});