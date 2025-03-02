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
    try {
      const req = await axios.post("https://mindfulness-9lmh.onrender.com/login", { email, password });
      alert(req.data.message);
      if (req.data.isLoggedIn) navigate("/");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        New User? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
