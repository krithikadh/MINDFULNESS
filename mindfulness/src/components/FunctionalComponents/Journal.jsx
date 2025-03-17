import React, { useState, useEffect } from "react";
import "../css/Journal.css";
import { Link } from "react-router-dom";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("trackerEntries")) || [];
    setEntries(storedData);
  }, []);

  const handlePost = () => {
    if (entry.trim() !== "") {
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      const meditation = localStorage.getItem("meditationMinutes") || "0";
      const sleep = localStorage.getItem("sleepHours") || "0";
      const mood = JSON.parse(localStorage.getItem("selectedMood")) || { emoji: "-", name: "Neutral" };

      const newEntry = {
        date: today,
        meditation,
        sleep,
        moodEmoji: mood.emoji,
        journal: entry
      };

      const updatedEntries = [newEntry, ...entries];
      localStorage.setItem("trackerEntries", JSON.stringify(updatedEntries));
      setEntries(updatedEntries);

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
        placeholder="Write your journal entry..."
      ></textarea>

      <button className="post-button" onClick={handlePost}>
        <Link to="/trackreport">
        Save
        </Link>
      </button>
    </div>
  );
};

export default Journal;