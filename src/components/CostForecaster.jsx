import { useState } from "react";

function CostForecaster() {
  const [days, setDays] = useState(5);
  const [showFees, setShowFees] = useState(false);
  const [place, setPlace] = useState("Bali");

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
      <h2 className="title">Smart Cost Estimator</h2>

      <div className="dropdown-section">
        <label htmlFor="place-select" className="label">Select Destination:</label>
        <select
          id="place-select"
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
      </div>

      <div className="slider-box">
        <label htmlFor="days">Select Duration: {days} days</label>
        <input
          id="days"
          type="range"
          min="1"
          max="15"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
        />
      </div>

      <div className="toggle-box">
        <label htmlFor="fees">Include hidden fees?</label>
        <input
          id="fees"
          type="checkbox"
          checked={showFees}
          onChange={() => setShowFees(!showFees)}
        />
      </div>

      <div className="cost-breakdown">
        <p>Base Rate (₹{baseRates[place]}/day)</p>
        <p>Base Cost: ₹{baseCost}</p>
        <p>Hidden Fees: ₹{hiddenFee}</p>
        <p><strong>Total: ₹{totalCost}</strong></p>
      </div>

      <div className="tips">
        <h4>Smart Save Tips</h4>
        <ul>
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

      <style>{`
        .cost-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          width: 90%;
          margin: auto;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          
        }
        .dropdown-section {
          margin-bottom: 1rem;
          color: white;
        }
        .label {
  font-size: 1rem;
  font-weight: 500;
  color: #111827; /* dark gray for visibility */
}


        .select {
          font-size: 1rem;
          margin-left: 0.5rem;
          padding: 0.4rem;
          border-radius: 0.5rem;
          background-color:rgb(0, 3, 5);
        }
        .slider-box,
        .toggle-box {
          margin-bottom: 1rem;
        }
        input[type="range"] {
          width: 100%;
        }
        .cost-breakdown p {
          font-size: 1.1rem;
        }
        .tips {
          margin-top: 1rem;
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.5rem;
        }
        .tips h4 {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .tips ul {
          margin: 0;
          padding-left: 1rem;
        }
        .tips li {
          margin-bottom: 0.4rem;
        }
      `}</style>
    </div>
  );
}

export default CostForecaster;
