import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phoneNumber, setPN] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    const req = await axios.post(
      "https://mindfulness-9lmh.onrender.com/signups",
      {
        name :name,
        email:email,
        password:password,
        phoneNumber:phoneNumber,
      }
    );
    const message = req.data.message;
    const isSignup = req.data.isSignUp;
    if (isSignup) {
      alert(message);
      navigate("/");
    } else {
      alert(message);
    }
  };

  return (
    <div className="auth-container">
      <h1>Signup</h1>
      <form className="auth-form" onSubmit={handleSignup}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <label>Phone Number:</label>
        <input
          type="number"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPN(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
