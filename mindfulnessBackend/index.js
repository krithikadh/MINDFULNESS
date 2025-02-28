const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});

app.get("/static", (req, res) => {
  res.sendFile("D:\\MINDFULNESS\\index.html");
});

const PORT = 3001;

app.listen(PORT, () => console.log("Server Started Successfully"));
