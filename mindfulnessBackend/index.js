const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Signup = require("./models/signupSchema");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or Expired Token" });
  }
};

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Signup({ name, email, password: hashedPassword, phoneNumber });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!", isSignUp: true });
  } catch (error) {
    res.status(500).json({ message: "Signup failed!", error });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found. Please sign up first!" });
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Incorrect password!", isLoggedIn: false });
    }

    const token = jwt.sign({ name: existingUser.name, email: existingUser.email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ message: "Login Successful", isLoggedIn: true, token });
  } catch (error) {
    res.status(500).json({ message: "Login Error", isLoggedIn: false, error });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
