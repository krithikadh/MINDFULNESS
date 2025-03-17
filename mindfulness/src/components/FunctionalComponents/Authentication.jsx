import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("authToken"); // Replace with actual authentication check

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signup"); // Redirect to signup if not logged in
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null; // Render children only if logged in
};

export default RequireAuth;