import React, { useState, useEffect } from "react";
import "../css/TrackReport.css";

const TrackReport = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("trackerEntries")) || [];
    const formattedData = storedData.map(entry => ({
      ...entry,
      date: new Date(entry.date).toLocaleDateString("en-GB")
    }));
    setEntries(formattedData);
  }, []);

  return (
    <div className="tracker-container">
      <h1 className="tracker-heading">Daily Tracker Report</h1>

      {entries.length === 0 ? (
        <p className="no-data">No data available yet.</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} className="tracker-entry">
            <h2>{entry.date}</h2>
            <p><strong>Meditation:</strong> {entry.meditation} mins</p>
            <p><strong>Sleep:</strong> {entry.sleep} hrs</p>
            <p><strong>Mood:</strong> {entry.moodEmoji}</p>
            <p><strong>Journal:</strong> {entry.journal || "No journal entry"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TrackReport;
