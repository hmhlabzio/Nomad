 


function ExploreWorld() {
  return (
    <div className="explore-world-container">
      <h2 className="explore-world-title">Explore the World</h2>
      <div className="explore-world-chart">
        <p className="explore-world-chart-text">Chart Coming Soon</p>
      </div>

      {/* CSS inside the same file */}
      <style>{`
        .explore-world-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 width:80%;
            size: 100%;

          margin: auto;
        }

        .explore-world-title {
                  font-size: 2.5rem;

          font-weight: 600;
          margin-bottom: 1rem;
        }

        .explore-world-chart {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 12rem;
          background-color: #f3f4f6;
          border-radius: 0.5rem;
        }

        .explore-world-chart-text {
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}

export default ExploreWorld;
