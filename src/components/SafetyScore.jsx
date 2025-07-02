import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

function SafetyTrustScore({ onClose }) {
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
        "Crime rate drops 15% year-over-year according to police report.",
      ],
    },
    Bali: {
      score: 78,
      reason: "Tourist-friendly, Some petty theft",
      flagged: 4,
      news: [
        "Tourist reported wallet theft near beach clubs.",
        "New community safety initiative launched in Kuta.",
        "Local government increases lighting in popular tourist areas.",
      ],
    },
    Goa: {
      score: 70,
      reason: "Common tourist scams, Road safety concerns",
      flagged: 7,
      news: [
        "Advisory issued for travelers regarding scooter rentals.",
        "Police crackdown on illegal touts in North Goa.",
        "Initiative for women's safety launched in coastal areas.",
      ],
    },
    Paris: {
      score: 85,
      reason: "Pickpocketing, Public transport safety",
      flagged: 2,
      news: [
        "Increased police patrols around Eiffel Tower due to pickpocketing.",
        "New security measures implemented in major metro stations.",
        "Local authorities advise caution in crowded tourist spots.",
      ],
    },
    Delhi: {
      score: 65,
      reason: "Traffic safety, Some areas less safe at night",
      flagged: 8,
      news: [
        "Delhi Police launch new app for emergency services.",
        "Public awareness campaign on road safety launched.",
        "Travel advisory updated for certain districts.",
      ],
    },
  };

  const currentCity = cityData[selectedCity];

  return (
    <div className="p-6 relative text-gray-800">
      {/* Close button */}
      {onClose && (
        <button
          className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
      )}

      {showBackButton && (
        <button
          onClick={() => (window.location.href = "/")}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ← Back to Home
        </button>
      )}

      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <FontAwesomeIcon icon={faShieldAlt} /> Safety & Trust Score
        </h2>
        <select
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.target.value)}
  className="w-64 sm:w-52 px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800"
>

          {Object.keys(cityData).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <p className="text-gray-600 mb-8">
        This section provides insights into the safety and trustworthiness of
        various cities for digital nomads. Our scores are based on a
        comprehensive analysis of crime rates, political stability, healthcare
        access, and community feedback.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedCity}</h3>
          <p className="text-5xl font-bold text-blue-600 mb-3">
            {currentCity.score}/100
          </p>
          <p className="text-md text-gray-700">{currentCity.reason}</p>
          {currentCity.flagged > 0 && (
            <p className="text-red-600 font-semibold mt-2">
              {currentCity.flagged} recent incident(s) flagged
            </p>
          )}
        </div>

        {/* News */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
            Recent Safety News & Updates
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {currentCity.news.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-8 text-center">
        Scores are updated regularly. Always exercise caution and research local
        conditions.
      </p>
    </div>
  );
}

export default SafetyTrustScore;
