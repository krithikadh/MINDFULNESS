const express = require("express");
const User = require("../models/user");
const router = express.Router();

// Save Track Report Data for User
router.post("/save-trackreport", async (req, res) => {
  const { email, meditation, sleep, moodEmoji, journal } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Append new entry to the user's track report
    const newEntry = {
      date: new Date(),
      meditation,
      sleep,
      moodEmoji,
      journal,
    };

    user.trackReport.push(newEntry);
    await user.save();

    res.json({ message: "Track Report saved successfully!", user });
  } catch (err) {
    res.status(500).json({ message: "Error saving track report", error: err });
  }
});

module.exports = router;


// Get User's Track Reports
router.get("/get-trackreport/:email", async (req, res) => {
    const { email } = req.params;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      res.json({ trackReport: user.trackReport });
    } catch (err) {
      res.status(500).json({ message: "Error fetching track reports", error: err });
    }
  });
  
  // Delete a Track Report Entry
  router.post("/delete-trackreport", async (req, res) => {
    const { email, index } = req.body;
  
    try {
      let user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      user.trackReport.splice(index, 1); // Remove entry
      await user.save();
  
      res.json({ message: "Entry deleted successfully!" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting entry", error: err });
    }
  });
  