import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const cityData = {
    Tokyo: { cost: 1500, hidden: 800 },
    Lisbon: { cost: 1300, hidden: 600 },
    London: { cost: 1600, hidden: 900 },
    Barcelona: { cost: 1400, hidden: 700 },
  };

function CostForecaster() {
  const [days, setDays] = useState(5);
  const [showFees, setShowFees] = useState(false);
  const [place, setPlace] = useState("Tokyo");
  const [dailyCost, setDailyCost] = useState(0);
  const [hiddenFees, setHiddenFees] = useState(0);

  const location = useLocation();
  const showBackButton = location.pathname === "/cost-calculator";

  const tips = [
    "💡 Tip: Booking for 7+ days gives 10% off",
    "🗕️ Cheapest month: October",
    "🛎️ Try weekdays for cheaper stays",
  ];

  

  useEffect(() => {
    const city = cityData[place];
    setDailyCost(city.cost);
    setHiddenFees(showFees ? city.hidden : 0);
  }, [place, showFees]);

  const baseCost = dailyCost * days;
  const totalCost = baseCost + hiddenFees;

  return (
    <div className="bg-gradient-to-r from-cyan-100 to-white text-gray-800 rounded-3xl p-6 w-[90%] max-w-3xl mx-auto mt-6  font-sans">
      {showBackButton && (
        <button
          onClick={() => (window.location.href = "/")}
          className="mb-3 bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700"
        >
          ← Back to Home
        </button>
      )}

      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          Cost Forecaster
        </h2>

        <div className="flex justify-between items-center">
          <label className="text-base font-medium text-slate-800">Place:</label>
          <select
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="ml-4 p-1 rounded-md border border-slate-300 bg-white text-sm"
          >
            {Object.keys(cityData).map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-base font-medium text-slate-800">Days: {days}</label>
          <input
            type="range"
            min="1"
            max="30"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
            className="ml-4 w-2/3 accent-blue-500"
          />
        </div>

        <div className="flex justify-between items-center">
          <label className="text-base font-medium text-slate-800">Show hidden fees:</label>
          <input
            type="checkbox"
            checked={showFees}
            onChange={(e) => setShowFees(e.target.checked)}
            className="ml-4 w-5 h-5 bg-white"
          />

        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm text-sm">
          <p className="flex justify-between mb-1">
            <span>Base Cost:</span> <span>₹{baseCost}</span>
          </p>
          {showFees && (
            <p className="flex justify-between mb-1">
              <span>Hidden Fee:</span> <span>₹{hiddenFees}</span>
            </p>
          )}
          <p className="flex justify-between font-bold text-base text-blue-600">
            <span>Total Cost:</span> <span>₹{totalCost}</span>
          </p>
        </div>

        <div className="mt-4 bg-emerald-50 border-l-4 border-emerald-500 p-3 rounded-lg text-sm">
          <h3 className="text-base font-bold text-emerald-800 mb-1">Cost Saving Tips</h3>
          <ul className="list-disc list-inside text-emerald-800 space-y-1">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CostForecaster;
