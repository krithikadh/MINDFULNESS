import React from "react";
import { Link } from "react-router-dom";
import "../css/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="prof">Profile</h1>
      <div className="profile-options">
        <Link to="/login" className="profile-button">Login</Link>
        <Link to="/signup" className="profile-button">Signup</Link>
        <Link to="/trackreport" className="profile-button">Track Report</Link>
      </div>
    </div>
  );
};

export default Profile;