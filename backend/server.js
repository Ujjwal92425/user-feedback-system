// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const feedbackRoutes = require("./routes/feedbackRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", feedbackRoutes);

// DB + Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.log("Mongo Error:", err));
