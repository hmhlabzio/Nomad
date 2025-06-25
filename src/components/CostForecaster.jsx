import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

function CostForecaster() {
  const [days, setDays] = useState(5);
  const [showFees, setShowFees] = useState(false);
  const [place, setPlace] = useState("Bali");
  const location = useLocation();
  const showBackButton = location.pathname === "/cost-calculator";

  const baseRates = {
    Bali: 1200,
    Tokyo: 1500,
    Goa: 900,
    Paris: 1800,
    Delhi: 1000,
  };

  const hiddenFee = showFees ? 600 : 0;
  const baseCost = days * baseRates[place];
  const totalCost = baseCost + hiddenFee;

  const tips = [
    "💡 Tip: Booking for 7+ days gives 10% off",
    "📅 Cheapest month: October",
    "🛏️ Try weekdays for cheaper stays",
  ];

  return (
    <div className="cost-container">
      <style>{`
        .cost-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          width: 80%;
          margin: 2rem auto;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          height: 500px;
          overflow: hidden;
        }

        .title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1a202c;
        }

        .scroll-area {
          overflow-y: auto;
          height: calc(100% - 2.5rem);
          padding-right: 0.5rem;
        }

        .dropdown-section {
          margin-bottom: 1rem;
        }

        .label {
          font-size: 1rem;
          font-weight: 500;
          color: #111827;
        }

        .select {
          font-size: 1rem;
          margin-left: 0.5rem;
          padding: 0.4rem;
          border-radius: 0.5rem;
          background-color: #ffffff;
          color: #000000;
          border: 1px solid #cbd5e1;
        }

        .slider-box,
        .toggle-box {
          margin-bottom: 1rem;
        }

        input[type="range"] {
          width: 100%;
        }

        .cost-breakdown {
          border-top: 1px solid #e2e8f0;
          padding-top: 1rem;
          margin-top: 1.5rem;
        }

        .cost-breakdown p {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          color: #2d3748;
        }

        .total-cost {
          font-weight: bold;
          font-size: 1.25rem;
          color: #000000;
        }

        .tips-section {
          margin-top: 1.5rem;
          padding: 0.8rem;
          background-color: #e6fffa;
          border-radius: 0.5rem;
          color: #2d3748;
        }

        .tips-section h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1a202c;
        }

        .tips-section ul {
          list-style: disc;
          padding-left: 1.25rem;
        }

        .tips-section li {
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
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

      <div className="scroll-area">
        <h2 className="title">Cost Forecaster</h2>

        <div className="dropdown-section">
          <label className="label">
            Place:
            <select
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="select"
            >
              {Object.keys(baseRates).map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="slider-box">
          <label className="label">
            Days: {days}
            <input
              type="range"
              min="1"
              max="30"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="slider"
            />
          </label>
        </div>

        <div className="toggle-box">
          <label className="label">
            Show hidden fees:
            <input
              type="checkbox"
              checked={showFees}
              onChange={(e) => setShowFees(e.target.checked)}
              className="ml-2"
            />
          </label>
        </div>

        <div className="cost-breakdown">
          <p>
            <span>Base Cost:</span> <span>${baseCost}</span>
          </p>
          {showFees && (
            <p>
              <span>Hidden Fee:</span> <span>${hiddenFee}</span>
            </p>
          )}
          <p className="total-cost">
            <span>Total Cost:</span> <span>${totalCost}</span>
          </p>
        </div>

        <div className="tips-section">
          <h3>Cost Saving Tips</h3>
          <ul>
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