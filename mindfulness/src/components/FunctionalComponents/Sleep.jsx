import React, { useState, useEffect } from "react";
import "../css/MeditationAndSleep.css";

const Sleep = () => {
  const [sleepTime, setSleepTime] = useState(() => {
    return localStorage.getItem("sleepHours") || 0;
  });
  const goal = 7;
  const progress = Math.min((sleepTime / goal) * 100, 100);
  const goalAchieved = sleepTime >= goal;

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setSleepTime(value);
    localStorage.setItem("sleepHours", value);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="container">
      <div className="meditation-container">
        <h1>SLEEP TRACKER</h1>
        <div className="input-section">
          <label htmlFor="sleep-input">
            How many hours did you sleep today?
          </label>
          <p className="desc">(minimum 7 hrs/day)</p>
          <input
            id="sleep-input"
            type="number"
            min="0"
            value={sleepTime}
            onChange={handleInputChange}
            placeholder="Enter hours"
          />
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        {goalAchieved && <p className="congrats-text">You had a healthy amount of sleep. Great!</p>}
      </div>
    </div>
  );
};

export default Sleep;
