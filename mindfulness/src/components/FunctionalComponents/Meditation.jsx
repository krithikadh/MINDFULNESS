import React, { useState, useEffect } from "react";
import "../css/MeditationAndSleep.css";

const Meditation = () => {
  const [minutes, setMinutes] = useState(() => {
    return localStorage.getItem("meditationMinutes") || 0;
  });
  const goal = 15;
  const progress = Math.min((minutes / goal) * 100, 100);
  const goalAchieved = minutes >= goal;

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setMinutes(value);
    localStorage.setItem("meditationMinutes", value);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="container">
      <div className="meditation-container">
        <h1>MEDITATION TRACKER</h1>
        <div className="input-section">
          <label htmlFor="meditation-input">
            How many minutes did you meditate today?
          </label>
          <p className="desc">(minimum 15 mins/day)</p>
          <input
            id="meditation-input"
            type="number"
            min="0"
            value={minutes}
            onChange={handleInputChange}
            placeholder="Enter minutes"
          />
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        {goalAchieved && <p className="congrats-text">Good! Surely you have a relaxed mind now.</p>}
      </div>
    </div>
  );
};

export default Meditation;
