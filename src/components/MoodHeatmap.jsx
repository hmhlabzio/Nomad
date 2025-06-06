 


import { useState } from "react";

function MoodHeatmap() {
  const [filter, setFilter] = useState("Weekly");

  const moodData = {
    Weekly: [
      { city: "Tokyo", emoji: "💚", percentage: 92 },
      { city: "Bali", emoji: "😊", percentage: 88 },
      { city: "Goa", emoji: "😎", percentage: 80 },
    ],
    Monthly: [
      { city: "Tokyo", emoji: "😐", percentage: 70 },
      { city: "Bali", emoji: "😍", percentage: 91 },
      { city: "Goa", emoji: "😄", percentage: 86 },
    ],
  };

  const moods = moodData[filter];

  return (
    <div className="mood-heatmap-container">
      <div className="mood-heatmap-header">
        <h2 className="mood-heatmap-title">Mood Heatmap</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mood-heatmap-select"
        >
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="mood-heatmap-grid">
        {moods.map((mood) => (
          <div key={mood.city} className="mood-heatmap-card">
            <h3 className="mood-heatmap-card-title">{mood.city}</h3>
            <div className="mood-heatmap-emoji">{mood.emoji}</div>
            <p className="mood-heatmap-percentage">{mood.percentage}% felt positive</p>
          </div>
        ))}
      </div>

      {/* CSS inside the same file */}
      <style>{`
        .mood-heatmap-container {
          margin-top: 4rem;
          padding: 0 1rem;
           margin-left: auto;
          margin-right: auto;
          color: white;
          height:100%;
           width: 80%;
        }

        .mood-heatmap-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
         }

        .mood-heatmap-title {
                   font-size: 2.5rem;

          font-weight: 600;
        }

        .mood-heatmap-select {
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }

        .mood-heatmap-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .mood-heatmap-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .mood-heatmap-card {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .mood-heatmap-card-title {
          font-size: 1.125rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .mood-heatmap-emoji {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .mood-heatmap-percentage {
          font-size: 0.875rem;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}

export default MoodHeatmap;

