const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phoneNumber: String,
});

const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;
