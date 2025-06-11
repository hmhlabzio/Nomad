import SmartMap from './SmartMap';

function ExploreWorld() {
  return (
    <div className="explore-world-container">
      <h2 className="explore-world-title">Explore the World</h2>
      <div className="explore-world-map">
        <SmartMap />
      </div>

      <style>{`
        .explore-world-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 80%;
          margin: auto;
        }

        .explore-world-title {
          font-size: 2.5rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .explore-world-map {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 12rem;
          background-color: #f3f4f6;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .explore-world-map > div {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default ExploreWorld;
