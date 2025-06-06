 

function LifestyleMeter() {
  const data = [
    { name: 'Internet Speed', value: 89, icon: '🌐' },
    { name: 'Safety', value: 82, icon: '🛡️' },
    { name: 'Nightlife', value: 83, icon: '🌃' },
    { name: 'Wellness', value: 74, icon: '🧘' },
    { name: 'Cost', value: 91, icon: '💰' },
    { name: 'Community', value: 66, icon: '👥' },
  ];

  return (
    <div className="lifestyle-meter-container">
      <h2 className="lifestyle-meter-title">Lifestyle Score Meter</h2>
      
      <div className="scores-container">
        {data.map((item) => (
          <div key={item.name} className="score-item">
            <div className="score-circle">
              <div className="score-icon">{item.icon}</div>
              <div className="score-value">{item.value}</div>
            </div>
            <div className="score-label">{item.name}</div>
          </div>
        ))}
      </div>

      {/* CSS inside the same file */}
      <style jsx>{`
        .lifestyle-meter-container {
          margin-top: 2rem;
          background-color: #000;
          color: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width:70%;
           margin-left: auto;
          margin-right: auto;
          // text-align: center;
        }

        .lifestyle-meter-title {
                  font-size: 2.5rem;

          font-weight: 600;
          margin-bottom: 1.5rem;
          color: White; /* Aqua color */
        }

        .scores-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .score-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          min-width: 80px;
        }

        .score-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #222;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.5rem;
          border: 2px solid #00ffff;
        }

        .score-icon {
          font-size: 1.5rem;
          color: #00ffff;
          margin-bottom: 0.25rem;
        }

        .score-value {
          font-size: 1.4rem;
          font-weight: bold;
          color: white;
        }

        .score-label {
          font-size: 0.8rem;
          color: #aaa;
          text-align: center;
        }

        @media (max-width: 640px) {
          .scores-container {
            justify-content: center;
          }
          .score-item {
            min-width: 70px;
          }
          .score-circle {
            width: 70px;
            height: 70px;
          }
        }
      `}</style>
    </div>
  );
}

export default LifestyleMeter;