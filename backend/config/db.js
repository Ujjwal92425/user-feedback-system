const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected sucessfully");
  } 
  catch (err) {
    console.error("MongoDB failed to connect:", err.message);
  }
};

module.exports = connectDB;
