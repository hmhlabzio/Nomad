// START OF FILE: src/components/MoodHeatmap.jsx

import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoodHeatmap() { // onClose is still passed, but button inside is removed as App.jsx handles it
  const [filter, setFilter] = useState("Weekly");
  const location = useLocation();
  const showBackButton = location.pathname === "/mood-heatmap";

  const moodData = {
    Weekly: [
      { city: "Tokyo", emoji: "💚", percentage: 92, change: "+2%", type: "up", source: "1,240+ nomad surveys", tagline: "Best for remote work" },
      { city: "Lisbon", emoji: "🌞", percentage: 88, change: "+1%", type: "up", source: "980+ ratings", tagline: "Sunny and safe" },
      { city: "London", emoji: "😎", percentage: 90, change: "+3%", type: "up", source: "850+ votes", tagline: "Top networking hub" },
      { city: "Barcelona", emoji: "😍", percentage: 95, change: "+1%", type: "up", source: "1,500+ reports", tagline: "Highest satisfaction rate" }
    ],
    Monthly: [
      { city: "Tokyo", emoji: "😐", percentage: 70, change: "-5%", type: "down", source: "2,100+ surveys", tagline: "Busy but efficient" },
      { city: "Lisbon", emoji: "🌞", percentage: 85, change: "+2%", type: "up", source: "1,100+ reviews", tagline: "Balanced lifestyle" },
      { city: "London", emoji: "😎", percentage: 90, change: "+2%", type: "up", source: "1,000+ votes", tagline: "Hub of innovation" },
      { city: "Barcelona", emoji: "😍", percentage: 95, change: "+1%", type: "up", source: "1,500+ reports", tagline: "High satisfaction city" }
    ]
  };

  return (
  <div className="mt-10 p-4 sm:p-6 relative text-gray-800 w-full h-full overflow-y-auto ">
      {/* Top Controls: Back button on the left, View select on the right (slightly left) */}
      <div className="sticky top-0 bg-white z-20 flex justify-between items-center py-2">
        {showBackButton ? (
          <button
            onClick={() => (window.location.href = "/")}
            className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mt-2 mb-2"
          >
            ← Back to Home
          </button>
        ) : (
          <div></div> // Empty div to maintain flex spacing if back button isn't shown
        )}

        {/* View Select - Moved slightly to the left from the absolute right edge */}
        <div className="flex items-center gap-2 mr-10 sm:mr-16 md:mr-20">
          <span className="text-sm text-gray-600">View:</span>
          <select
            className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        {/* The close button for the modal is handled by the parent App.jsx component's wrapper. */}
        {/* Do NOT add an onClose button here if this component is always used within a modal wrapper */}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Nomad Mood Heatmap</h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Real-time sentiment analysis of digital nomad communities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {moodData[filter].map((city, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 sm:p-5 shadow border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{city.city}</h3>
              <span className="text-xl sm:text-2xl">{city.emoji}</span>
            </div>
            <p className="text-xl font-bold text-indigo-600 mb-1">{city.percentage}% Positive</p>
            <div
              className={`flex items-center text-xs mb-2 ${
                city.type === "up"
                  ? "text-green-500"
                  : city.type === "down"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {city.type === "up" && (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {city.type === "down" && (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {city.change}
            </div>
            <p className="text-xs text-gray-500 mb-1">Based on {city.source}</p>
            <p className="text-sm font-medium text-gray-700">{city.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodHeatmap;

// END OF FILE: src/components/MoodHeatmap.jsx