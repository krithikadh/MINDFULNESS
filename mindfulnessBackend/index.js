const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Signup = require("./models/signupSchema");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;
dotenv.config();
const verifyTok = (req,res,next) =>{
  console.log("Middleware Check");
  const token = req.headers.authorization
  if(!token){
    res.json("Request Denied")
  }
  try{
    console.log(token)
    const payload = jwt.verify(token,process.env.SECRET_KEY)
    console.log(payload.firstname)
    firstname = payload.firstname
    next()
  }
  catch(err){
    res.send("Either token is expired/ Token is itself wrong")
  }
}
mdb
  .connect(process.env.MONGODB_URL) // if it doesn't connect with localhost replace it with 127.0.0.1 ip address
  .then(() => {
    console.log("MDB Connection Successful");
  })
  .catch((err) => {
    console.log("Check your connection String", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});
app.get("/static", verifyTok, (req, res) => {
  res.sendFile(
    "D:\\MINDFULNESS\\index.html"
  );
});

app.post("/signups", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
    });
    newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignUp: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Signup Unsuccessful", isSignUp: false });
  }
});

app.get("/getsignupdet", verifyTok, async (req, res) => {
  const signup = await Signup.find();
  console.log(signup);
  res.send("Signup details fetched");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });
    console.log(existingUser);
    if (existingUser) {
      const payload = {
        firstname: existingUser.firstName,
        email: existingUser.email,
      };
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);
      if (isValidPassword) {
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: "10m",
        });
        res
          .status(201)
          .json({
            message: "Login Successful",
            isLoggedIn: true,
            token: token,
          });
      } else {
        res
          .status(201)
          .json({ message: "Incorrect Password", isLoggedIn: false });
      }
    } else {
      res
        .status(201)
        .json({ message: "User not Found Signup First", isLoggedIn: false });
    }
  } catch (error) {
    console.log("Login Error");
    res.status(400).json({ message: "Login Error", isLoggedIn: false });
  }
});

app.listen(PORT, () => {
  console.log("Server Started Successfully");
});