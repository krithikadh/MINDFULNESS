import React, { useState, useEffect } from "react";
import "../css/DateAndDay.css";
import { Link } from "react-router-dom";

const DateAndDay = () => {
  const today = new Date();
  const date = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const day = today.toLocaleString("default", { weekday: "long" });

  const [meditationMinutes, setMeditationMinutes] = useState(
    localStorage.getItem("meditationMinutes") || 0
  );
  const [sleepHours, setSleepHours] = useState(localStorage.getItem("sleepHours") || 0);
  const [moodEmoji, setMoodEmoji] = useState(() => {
    const storedMood = JSON.parse(localStorage.getItem("selectedMood"));
    return storedMood ? storedMood.emoji : "-"; 
  });

  useEffect(() => {
    const updateData = () => {
      setMeditationMinutes(localStorage.getItem("meditationMinutes") || 0);
      setSleepHours(localStorage.getItem("sleepHours") || 0);
      const storedMood = JSON.parse(localStorage.getItem("selectedMood"));
      setMoodEmoji(storedMood ? storedMood.emoji : "-");
    };
    window.addEventListener("storage", updateData);
    return () => {
      window.removeEventListener("storage", updateData);
    };
  }, []);

  return (
    <div className="container">
      <div className="date-circle">
        <p className="date">{date}</p>
        <p className="month">{month}</p>
        <p className="year">{year}</p>
        <p className="day">{day}</p>
      </div>
      <div className="widgets">
        <div className="square-widget">
          <Link to="/meditation" className="widget-link">
            <p>Meditation Time</p>
            <span>{meditationMinutes} mins</span>
          </Link>
        </div>
        <div className="square-widget">
          <Link to="/sleep" className="widget-link">
            <p>Sleep Time</p>
            <span>{sleepHours} hrs</span>
          </Link>
        </div>
        <div className="square-widget">
          <Link to="/mood" className="widget-link">
            <p>Mood</p>
            <span>{moodEmoji}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DateAndDay;
