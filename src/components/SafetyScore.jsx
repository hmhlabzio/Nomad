 import { useState } from "react";

function SafetyTrustScore() {
  const [selectedCity, setSelectedCity] = useState("Tokyo");

  const cityData = {
    Tokyo: {
      score: 92,
      reason: "Strong Police Presence, Low Incidents",
      flagged: 1,
      news: "Tokyo ranked safest city in Asia for solo travelers.",
    },
    Bali: {
      score: 78,
      reason: "Tourist-friendly, Some petty theft",
      flagged: 4,
      news: "Tourist reported wallet theft near beach clubs.",
    },
    Goa: {
      score: 70,
      reason: "Nightlife areas with higher noise & crowd",
      flagged: 3,
      news: "Local police increased patrolling after night incidents.",
    },
    Delhi: {
      score: 58,
      reason: "Traffic & pickpocketing zones in central areas",
      flagged: 5,
      news: "Delhi metro increases security in peak hours.",
    },
    Paris: {
      score: 82,
      reason: "Safe with pickpocket hotspots",
      flagged: 2,
      news: "Paris launches safety app for tourists.",
    },
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const { score, reason, flagged, news } = cityData[selectedCity];

  return (
    <div className="safety-box">
      <h2 className="title">Safety Trust Score</h2>

      <div className="dropdown">
        <label htmlFor="city-select" className="label">Select City:</label>
        <select id="city-select" value={selectedCity} onChange={handleCityChange}>
          {Object.keys(cityData).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="score-display">
        <div className="score-circle">
          <span>{score}</span>
        </div>
        <p className="reason">🛡️ {reason}</p>
      </div>

      <div className="extra-info">
        <p className="flagged">🚨 {flagged} people flagged this area today</p>
        <p className="news">📰 Recent News: {news}</p>
      </div>

      <style>{`
        .safety-box {
          background: white;
          color: #111827;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          width: 90%;
          margin: auto;
        }

        .title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .dropdown {
          display: flex;
          
          color:rgb(255, 255, 255);
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.2rem;
        }
         .label {
            font-size: 1rem;
            font-weight: 50;
            color: #111827; /* dark gray for visibility */
}

        select {
          padding: 0.4rem 0.75rem;
          font-size: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #ccc;
          background-color:rgb(0, 0, 1);
          color:rgb(255, 255, 255);
        }

        .score-display {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .score-circle {
          width: 80px;
          height: 80px;
          background-color: #16a34a;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.8rem;
          font-weight: bold;
          color: white;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .reason {
          font-size: 1rem;
          color: #374151;
        }

        .extra-info p {
          margin-top: 0.4rem;
          font-size: 0.95rem;
          color: #4b5563;
        }

        .flagged {
          color: #b91c1c;
        }

        .news {
          color: #1d4ed8;
        }
      `}</style>
    </div>
  );
}

export default SafetyTrustScore;
