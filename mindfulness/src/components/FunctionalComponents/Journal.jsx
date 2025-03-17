import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../css/Journal.css";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  // Check if user is logged in (assuming token exists in localStorage)
  const isLoggedIn = !!localStorage.getItem("authToken");

  const handlePost = () => {
    if (!isLoggedIn) {
      navigate("/signup"); // Redirect to signup if not logged in
      return;
    }

    if (entry.trim() !== "") {
      setEntries([entry, ...entries]);
      setEntry("");
    }
  };

  return (
    <div className="journal-container">
      <h1 className="journal">Reflect on your day's activities</h1>

      <textarea
        className="journal-input"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="You can make multiple entries"
      ></textarea>

      <button className="post-button" onClick={handlePost}>
        Save
      </button>

      <div className="journal-entries">
        {entries.map((entry, index) => (
          <div key={index} className="journal-entry">
            <p>{entry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
