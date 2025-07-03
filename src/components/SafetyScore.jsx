import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { ShieldCheck, AlertCircle, Globe2 } from "lucide-react";

function SafetyTrustScore({ onClose }) {
  const [selectedCity, setSelectedCity] = useState("Tokyo");
  const location = useLocation();
  const showBackButton = location.pathname === "/safety-score";

  const cityData = {
    Tokyo: {
      score: 92,
      reason: "Strong Police Presence, Low Incidents",
      flagged: 1,
      icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
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
      icon: <Globe2 className="h-6 w-6 text-yellow-500" />,
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
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
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
      icon: <ShieldCheck className="h-6 w-6 text-yellow-500" />,
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
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      news: [
        "Delhi Police launch new app for emergency services.",
        "Public awareness campaign on road safety launched.",
        "Travel advisory updated for certain districts.",
      ],
    },
  };

  const currentCity = cityData[selectedCity];

  const getColor = (score) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6 relative text-gray-800 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg max-w-5xl mx-auto">
      {/* Close button */}
      {onClose && (
        <button
          className="absolute top-3 right-4 text-3xl font-bold text-gray-600 hover:text-gray-800"
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

      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-2 flex justify-center items-center gap-2">
          <FontAwesomeIcon icon={faShieldAlt} /> Safety & Trust Score
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Insights into the safety and trustworthiness of popular destinations.
          Scores are based on crime rates, healthcare, stability, and feedback.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-64 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 shadow-sm"
        >
          {Object.keys(cityData).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 text-center">
          <div className="flex justify-center mb-2">{currentCity.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{selectedCity}</h3>
          <div className="relative w-24 h-24 mx-auto my-3">
            <div
              className={`absolute inset-0 rounded-full ${getColor(
                currentCity.score
              )} opacity-20`}
            />
            <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-blue-600">
              {currentCity.score}
            </div>
          </div>
          <p className="text-sm text-gray-600">{currentCity.reason}</p>
          {currentCity.flagged > 0 && (
            <p className="text-red-600 font-semibold mt-2">
              {currentCity.flagged} recent incident(s) flagged
            </p>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 col-span-1 md:col-span-2 text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Recent Safety News & Updates
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {currentCity.news.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Scores are updated regularly. Always research local conditions before traveling.
      </p>
    </div>
  );
}

export default SafetyTrustScore;
