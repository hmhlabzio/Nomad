import React, { useState } from "react"; // Combined and corrected import
import { useLocation } from 'react-router-dom';

function MoodHeatmap() {
  const [filter, setFilter] = useState("Weekly");
  const location = useLocation();
  const showBackButton = location.pathname === "/mood-heatmap";

  const moodData = {
    Weekly: [
      { city: "Tokyo", emoji: "💚", percentage: 92 },
      { city: "Bali", emoji: "😊", percentage: 88 },
      { city: "Goa", emoji: "😎", percentage: 80 },
      { city: "Paris", emoji: "😁", percentage: 89 },
      { city: "London", emoji: "😎", percentage: 90 },
      { city: "Barcelona", emoji: "😍", percentage: 95 },
      { city: "Gokarna", emoji: "😄", percentage: 85 },
      { city: "Delhi", emoji: "😎", percentage: 80 },
    ],
    Monthly: [
      { city: "Tokyo", emoji: "😐", percentage: 70 },
      { city: "Bali", emoji: "😍", percentage: 91 },
      { city: "Goa", emoji: "😄", percentage: 86 },
      { city: "Paris", emoji: "😁", percentage: 89 },
      { city: "London", emoji: "😎", percentage: 90 },
      { city: "Barcelona", emoji: "😍", percentage: 95 },
    ],
  };

  const currentData = moodData[filter];

  // Utility function to get color based on percentage
  const getColor = (percentage) => {
    if (percentage > 90) return 'bg-green-500';
    if (percentage > 80) return 'bg-lime-500';
    if (percentage > 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="mood-heatmap-container">
      <style>{`
        .mood-heatmap-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 80%;
          margin: 2rem auto; /* Added margin for spacing */
        }

        .mood-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .mood-heatmap-title {
          font-size: 2rem;
          font-weight: bold;
        }

        .mood-heatmap-select {
          padding: 0.4rem 0.75rem;
          border-radius: 0.4rem;
          font-size: 1rem;
          background: #f1f5f9;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }

        .mood-scroll-wrapper {
          overflow-x: auto;
          white-space: nowrap;
          padding-bottom: 0.5rem;
        }

        .mood-row {
          display: inline-flex;
          gap: 1rem;
        }

        .mood-card {
          flex-shrink: 0;
          background-color: #f9fafb;
          color: #0f172a;
          border-radius: 1rem;
          padding: 1rem;
          width: 180px;
          text-align: center;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        }

        .mood-city {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .mood-emoji {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .mood-percentage {
          font-size: 1rem;
          color: #475569;
        }
      `}</style>

      {showBackButton && (
        <button
          onClick={() => (window.location.href = '/')}
          className="mb-4 text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
        >
          ← Back to Home
        </button>
      )}

      <div className="mood-header">
        <h2 className="mood-heatmap-title">Nomad Mood Heatmap</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mood-heatmap-select"
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div className="mood-scroll-wrapper">
        <div className="mood-row">
          {currentData.map((data, index) => (
            <div key={index} className={`mood-card ${getColor(data.percentage)}`}>
              <div className="mood-city">{data.city}</div>
              <div className="mood-emoji">{data.emoji}</div>
              <div className="mood-percentage">{data.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodHeatmap;