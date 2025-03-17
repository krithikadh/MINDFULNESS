import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    var req = await axios.post("https://mindfulness-9lmh.onrender.com/login", {
      email,
      password,
    });
    var isLoginSuccessful = req.data.isLoggedIn;
    if (isLoginSuccessful) {
      alert(req.data.message);
      navigate("/dateandday");
    } else {
      alert(req.data.message);
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPass(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>New User? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default Login;
