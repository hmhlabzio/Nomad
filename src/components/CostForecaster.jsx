 


function CostForecaster() {
  return (
    <div className="cost-forecaster-container">
      <h3 className="cost-forecaster-title">Cost Forecaster</h3>
      <div className="cost-forecaster-chart">
        <p className="cost-forecaster-chart-text">Chart Coming Soon</p>
      </div>

      {/* CSS inside the same file */}
      <style>{`
        .cost-forecaster-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 80%;
                     size: 100%;

          margin: auto;
        }

        .cost-forecaster-title {
               font-size: 2.5rem;

          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .cost-forecaster-chart {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 12rem;
          background-color: #f3f4f6;
          border-radius: 0.5rem;
        }

        .cost-forecaster-chart-text {
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}

export default CostForecaster;
