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

      <div className="mood-scroll-wrapper">
        <div className="mood-row">
          {moods.map((mood) => (
            <div key={mood.city} className="mood-card">
              <h3 className="mood-city">{mood.city}</h3>
              <div className="mood-emoji">{mood.emoji}</div>
              <p className="mood-percentage">{mood.percentage}% felt positive</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .mood-heatmap-container {
          margin-top: 4rem;
          padding: 1.5rem 1rem;
          color: #0f172a;
          background: white;
          border-radius: 1rem;
          width: 100%;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .mood-heatmap-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
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
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .mood-emoji {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .mood-percentage {
          font-size: 0.95rem;
          color: #475569;
        }

        .mood-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .mood-scroll-wrapper {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default MoodHeatmap;
