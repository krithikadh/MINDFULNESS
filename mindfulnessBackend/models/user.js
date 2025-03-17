const mongoose = require("mongoose");

const trackReportSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  meditation: { type: Number, required: true },
  sleep: { type: Number, required: true },
  moodEmoji: { type: String, required: true },
  journal: { type: String, default: "" },
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  trackReport: [trackReportSchema], // Array of track report entries
});

module.exports = mongoose.model("User", userSchema);
