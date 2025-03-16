import React, { useState, useEffect } from "react";
import "../css/Mood.css";

const moods = [
  { name: "Happy", emoji: "😊" },
  { name: "Sad", emoji: "😢" },
  { name: "Excited", emoji: "🤩" },
  { name: "Angry", emoji: "😡" },
  { name: "Tired", emoji: "😴" },
  { name: "Relaxed", emoji: "😌" },
  { name: "Anxious", emoji: "😰" },
  { name: "Confident", emoji: "😎" },
  { name: "Surprised", emoji: "😮" },
];

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedMood")) || null;
  });

  const handleMoodChange = (event) => {
    const moodName = event.target.value;
    const mood = moods.find((m) => m.name === moodName);
    setSelectedMood(mood);
    localStorage.setItem("selectedMood", JSON.stringify(mood));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="mood-container">
      <h1 className="heading">How are you feeling today?</h1>

      <select className="mood-dropdown" onChange={handleMoodChange} defaultValue="">
        <option value="" disabled>Select a Mood</option>
        {moods.map((mood) => (
          <option key={mood.name} value={mood.name}>
            {mood.emoji} {mood.name}
          </option>
        ))}
      </select>
      {selectedMood && (
        <div className="mood-display">
          <span className="mood-emoji">{selectedMood.emoji}</span>
          <p className="mood-text">
            You are feeling <strong>{selectedMood.name}</strong> today.
          </p>
        </div>
      )}
    </div>
  );
};

export default Mood;
