import React, { useState } from "react"; // Combined and corrected import
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function SafetyTrustScore() {
  const [selectedCity, setSelectedCity] = useState("Tokyo");
  const location = useLocation();
  const showBackButton = location.pathname === "/safety-score";

  const cityData = {
    Tokyo: {
      score: 92,
      reason: "Strong Police Presence, Low Incidents",
      flagged: 1,
      news: [
        "Tokyo ranked safest city in Asia for solo travelers.",
        "New AI-powered surveillance system installed in Shibuya district.",
        "Crime rate drops 15% year-over-year according to police report."
      ],
      healthcare: 85,
      nightlife: 90,
      wifi: 95
    },
    Bali: {
      score: 78,
      reason: "Tourist-friendly, Some petty theft",
      flagged: 4,
      news: [
        "Tourist reported wallet theft near beach clubs.",
        "New community safety initiative launched in Kuta.",
        "Local government increases lighting in popular tourist areas."
      ],
      healthcare: 70,
      nightlife: 85,
      wifi: 80
    },
    Goa: {
      score: 70,
      reason: "Common tourist scams, Road safety concerns",
      flagged: 7,
      news: [
        "Advisory issued for travelers regarding scooter rentals.",
        "Police crackdown on illegal touts in North Goa.",
        "Initiative for women's safety launched in coastal areas."
      ],
      healthcare: 65,
      nightlife: 90,
      wifi: 75
    },
    Paris: {
      score: 85,
      reason: "Pickpocketing, Public transport safety",
      flagged: 2,
      news: [
        "Increased police patrols around Eiffel Tower due to pickpocketing.",
        "New security measures implemented in major metro stations.",
        "Local authorities advise caution in crowded tourist spots."
      ],
      healthcare: 90,
      nightlife: 88,
      wifi: 85
    },
    Delhi: {
      score: 65,
      reason: "Traffic safety, Some areas less safe at night",
      flagged: 8,
      news: [
        "Delhi Police launch new app for emergency services.",
        "Public awareness campaign on road safety launched.",
        "Travel advisory updated for certain districts."
      ],
      healthcare: 75,
      nightlife: 70,
      wifi: 70
    },
  };

  const currentCity = cityData[selectedCity];

  // Utility to get color based on score
  const getScoreColor = (score) => {
    if (score > 90) return 'bg-green-500';
    if (score > 75) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  // Utility to get bar color based on percentage
  const getBarColor = (percentage) => {
    if (percentage > 85) return 'bg-green-500';
    if (percentage > 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="safety-container">
      <style>{`
        .safety-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 80%;
          margin: 2rem auto;
        }

        .safety-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .safety-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1a202c;
        }

        .city-select {
          padding: 0.4rem 0.75rem;
          border-radius: 0.4rem;
          font-size: 1rem;
          background: #f1f5f9;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }

        .score-display {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .score-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
        }

        .score-reason {
          font-size: 1.1rem;
          color: #4b5563;
        }

        .info-bars-grid {
          display: grid;
          grid-template-columns: 1fr; /* Default to single column */
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 600px) {
          .info-bars-grid {
            grid-template-columns: repeat(2, 1fr); /* Two columns on larger screens */
          }
        }

        .info-bar-item {
          background-color: #f9fafb;
          border-radius: 0.5rem;
          padding: 1rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .info-bar-label {
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
          color: #4b5563;
        }

        .bar-background {
          height: 24px;
          background-color: #e5e7eb;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 12px;
          transition: width 0.5s ease;
        }

        .bar-value {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
          text-shadow: 0 0 2px rgba(0,0,0,0.5);
        }

        .extra-info p {
          margin-top: 0.4rem;
          font-size: 0.95rem;
          color: #4b5563;
        }

        .flagged {
          color: #b91c1c;
          margin-bottom: 1rem;
        }

        .news-section {
          background-color: #f9fafb;
          padding: 0.8rem;
          border-radius: 0.5rem;
        }

        .news-section h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1a202c;
        }

        .news-section ul {
          list-style: disc;
          padding-left: 1.5rem;
        }

        .news-section li {
          font-size: 0.9rem;
          color: #4b5563;
          margin-bottom: 0.3rem;
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

      <div className="safety-header">
        <h2 className="safety-title">
          <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />Safety & Trust Score
        </h2>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="city-select"
        >
          {Object.keys(cityData).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="score-display">
        <div className={`score-circle ${getScoreColor(currentCity.score)}`}>
          {currentCity.score}
        </div>
        <p className="score-reason">{currentCity.reason}</p>
        {currentCity.flagged > 0 && (
          <p className="flagged text-red-600">
            <strong>{currentCity.flagged} recent incident(s) flagged</strong>
          </p>
        )}
      </div>

      <div className="info-bars-grid">
        <div className="info-bar-item">
          <div className="info-bar-label">Healthcare Score</div>
          <div className="bar-background">
            <div
              className={`bar-fill ${getBarColor(currentCity.healthcare)}`}
              style={{ width: `${currentCity.healthcare}%` }}
            ></div>
            <span className="bar-value">{currentCity.healthcare}%</span>
          </div>
        </div>

        <div className="info-bar-item">
          <div className="info-bar-label">Nightlife Safety</div>
          <div className="bar-background">
            <div
              className={`bar-fill ${getBarColor(currentCity.nightlife)}`}
              style={{ width: `${currentCity.nightlife}%` }}
            ></div>
            <span className="bar-value">{currentCity.nightlife}%</span>
          </div>
        </div>

        <div className="info-bar-item">
          <div className="info-bar-label">WiFi Security</div>
          <div className="bar-background">
            <div
              className={`bar-fill ${getBarColor(currentCity.wifi)}`}
              style={{ width: `${currentCity.wifi}%` }}
            ></div>
            <span className="bar-value">{currentCity.wifi}%</span>
          </div>
        </div>
      </div>

      <div className="news-section">
        <h3>Recent Safety News & Updates</h3>
        <ul>
          {currentCity.news.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SafetyTrustScore;