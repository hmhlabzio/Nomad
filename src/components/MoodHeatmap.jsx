import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoodHeatmap({ onClose }) {
  const [filter, setFilter] = useState("Weekly");
  const location = useLocation();
  const showBackButton = location.pathname === "/mood-heatmap";

  const moodData = {
    Weekly: [
      { city: "Tokyo", emoji: "💚", percentage: 92, change: "+2%", type: "up", source: "1,240+ nomad surveys", tagline: "Best for remote work" },
      { city: "Bali", emoji: "😊", percentage: 88, change: "-1%", type: "down", source: "980+ reviews", tagline: "Top for work-life balance" },
      { city: "Goa", emoji: "😎", percentage: 80, change: "+5%", type: "up", source: "750+ reports", tagline: "Fastest growing community" },
      { city: "Paris", emoji: "😁", percentage: 89, change: "No change", type: "neutral", source: "1,100+ ratings", tagline: "Best cultural experience" },
      { city: "London", emoji: "😎", percentage: 90, change: "+3%", type: "up", source: "850+ votes", tagline: "Top networking hub" },
      { city: "Barcelona", emoji: "😍", percentage: 95, change: "+1%", type: "up", source: "1,500+ reports", tagline: "Highest satisfaction rate" },
      { city: "Gokarna", emoji: "😄", percentage: 85, change: "+2%", type: "up", source: "600+ check-ins", tagline: "Peaceful coastal retreat" },
      { city: "Delhi", emoji: "😎", percentage: 80, change: "+1%", type: "up", source: "900+ user reports", tagline: "Tech & culture blend" },
    ],
    Monthly: [
      { city: "Tokyo", emoji: "😐", percentage: 70, change: "-5%", type: "down", source: "2,100+ surveys", tagline: "Busy but efficient" },
      { city: "Bali", emoji: "😍", percentage: 91, change: "+4%", type: "up", source: "1,500+ reviews", tagline: "Perfect for balance" },
      { city: "Goa", emoji: "😄", percentage: 86, change: "+3%", type: "up", source: "1,100+ reports", tagline: "Chilled beach life" },
      { city: "Paris", emoji: "😁", percentage: 89, change: "No change", type: "neutral", source: "1,100+ ratings", tagline: "Cultural & vibrant" },
      { city: "London", emoji: "😎", percentage: 90, change: "+2%", type: "up", source: "1,000+ votes", tagline: "Hub of innovation" },
      { city: "Barcelona", emoji: "😍", percentage: 95, change: "+1%", type: "up", source: "1,500+ reports", tagline: "High satisfaction city" },
      { city: "Gokarna", emoji: "😄", percentage: 85, change: "+2%", type: "up", source: "750+ entries", tagline: "Hidden gem" },
      { city: "Delhi", emoji: "😎", percentage: 80, change: "+2%", type: "up", source: "1,200+ logs", tagline: "Dynamic urban space" },
    ],
  };

  return (
    <div className="p-6 relative text-gray-800">
      {/* Close + View aligned right */}
      <div className="absolute top-4 right-4 flex items-center space-x-3 z-10">
        {/* View Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">View:</span>
          <select
            className="border border-gray-300 rounded-md px-3 py-1 bg-white text-gray-700"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        {/* Close Button */}
        {onClose && (
          <button
            className="text-2xl font-bold text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            &times;
          </button>
        )}
      </div>

      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={() => (window.location.href = "/")}
          className="mb-4 text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
        >
          ← Back to Home
        </button>
      )}

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Nomad Mood Heatmap</h2>
      <p className="text-gray-600 mb-8">Real-time sentiment analysis of digital nomad communities.</p>

      {/* City Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {moodData[filter].map((city, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{city.city}</h3>
              <span className="text-2xl">{city.emoji}</span>
            </div>
            <p className="text-2xl font-bold text-indigo-600 mb-2">{city.percentage}% Positive</p>
            <div
              className={`flex items-center text-sm mb-2 ${
                city.type === "up"
                  ? "text-green-500"
                  : city.type === "down"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {city.type === "up" && (
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {city.type === "down" && (
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {city.change}
            </div>
            <p className="text-sm text-gray-500 mb-3">Based on {city.source}</p>
            <p className="text-md font-medium text-gray-700">{city.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodHeatmap;
