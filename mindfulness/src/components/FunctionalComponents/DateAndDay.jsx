import React from "react";
import "../css/Date.css"; // Import external CSS file

const DateAndDay = () => {
  // Get current date details
  const today = new Date();
  const date = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const day = today.toLocaleString("default", { weekday: "long" });

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
          <p>Meditation Time</p>
          <span>20 min</span>
        </div>

        <div className="square-widget">
          <p>Sleep Time</p>
          <span>7 hrs</span>
        </div>
      </div>
    </div>
  );
};

export default DateAndDay;
