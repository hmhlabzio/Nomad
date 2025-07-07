import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { ShieldCheck, Globe2 } from "lucide-react";
import { Listbox } from "@headlessui/react";

function SafetyTrustScore({ onClose }) {
  const [selectedCity, setSelectedCity] = useState("Tokyo");

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
    Lisbon: {
      score: 88,
      reason: "Safe neighborhoods, Strong expat reviews",
      flagged: 2,
      icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
      news: [
        "Lisbon reports lowest petty crime rate in 5 years.",
        "Safety patrols increased in Alfama and Bairro Alto.",
        "Community helpline launched for solo travelers.",
      ],
    },
    Barcelona: {
      score: 80,
      reason: "Pickpocketing in tourist zones, good police response",
      flagged: 3,
      icon: <Globe2 className="h-6 w-6 text-yellow-500" />,
      news: [
        "Police increase surveillance in Las Ramblas.",
        "Digital reporting system launched for incidents.",
        "City introduces tourist awareness safety guides.",
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
    <div className="p-4 sm:p-6 relative text-gray-800 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg w-full max-w-5xl mx-auto">
      {/* Close Button */}
      {onClose && (
        <button
          className="absolute top-3 right-4 text-black bg-white w-12 h-12 flex items-center justify-center  text-lg"
          onClick={onClose}
        >
          &times;
        </button>
      )}

     

      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 flex justify-center items-center gap-2">
          <FontAwesomeIcon icon={faShieldAlt} /> Safety & Trust Score
        </h2>
        <p className="hidden sm:block text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
      `   Insights into the safety and trustworthiness of popular destinations.
          Scores are based on crime rates, healthcare, stability, and feedback.
        </p>`

      </div>

      {/* City Dropdown */}
      <div className="flex justify-center mb-2 px-2">
        <Listbox value={selectedCity} onChange={setSelectedCity}>
          <div className="relative w-full max-w-xs">
            <Listbox.Button className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-left text-gray-800 shadow-sm">
              {selectedCity}
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full max-h-60 overflow-auto rounded-md bg-white shadow-lg z-10 border border-gray-200">
              {Object.keys(cityData).map((city) => (
                <Listbox.Option
                  key={city}
                  value={city}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 text-sm ${
                      active ? "bg-blue-100" : "text-gray-800"
                    }`
                  }
                >
                  {city}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Block */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 text-center w-full md:w-1/3">
         {/* Icon + City Name (Row on all views) */}
          <div className="flex items-center justify-center gap-2 ">
            <div>{currentCity.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{selectedCity}</h3>
          </div>

          {/* Score Circle */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto my-3">
            <div className={`absolute inset-0 rounded-full ${getColor(currentCity.score)} opacity-20`} />
            <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-blue-600">
              {currentCity.score}
            </div>
          </div>
          <p className="hidden sm:block text-sm text-gray-600">{currentCity.reason}</p>
          {currentCity.flagged > 0 && (
            <p className="text-red-600 font-semibold mt-2">
              {currentCity.flagged} recent incident(s) flagged
            </p>
          )}
        </div>

        {/* Right Block */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 w-full md:w-2/3 text-left">
          <h3 className="text-lg font-semibold text-gray-800 ">
            Recent Safety News & Updates
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {currentCity.news.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-2 text-center">
        Scores are updated regularly. Always research local conditions before traveling.
      </p>
    </div>
  );
}

export default SafetyTrustScore;
