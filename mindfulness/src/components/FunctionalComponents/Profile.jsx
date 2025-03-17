import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h1 className="prof">Profile</h1>
      <div className="profile-options">
        <Link to="/trackreport" className="profile-button">Track Report</Link>
        <button className="profile-button signout-button" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
