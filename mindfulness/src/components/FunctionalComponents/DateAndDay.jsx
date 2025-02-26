import React from "react";
import "../css/DateAndDay.css";
import { Link } from "react-router-dom";

const DateAndDay = () => {
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
          <Link to="/meditation" className="widget-link">
            <p>Meditation Time</p>
            <span>-</span>
          </Link>
        </div>

        <div className="square-widget">
          <Link to="/sleep" className="widget-link">
            <p>Sleep Time</p>
            <span>-</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DateAndDay;
