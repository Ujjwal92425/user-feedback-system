const Feedback = require("../models/Feedback");

// New  feedback form
const createFeedback = async (req, res) => {
  try {
    const { name, email, feedback, category } = req.body;
    const newFeedback = new Feedback({ name, email, feedback, category });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback saved" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// All feedback 
const getAllFeedback = async (req, res) => {
  try {
    const allFeedback = await Feedback.find().sort({ createdAt: -1 });
    res.json(allFeedback);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch feedback" });
  }
};
module.exports = { createFeedback, getAllFeedback };

