 


import React from 'react';

function SafetyScore() {
  return (<div> 
      <h2 className='title' >Safety Trust Score</h2>
      <div className="aqua-bar"></div>
    <div className="safety-score-container">
      <div className="safety-score-chart">
        <p className="safety-score-chart-text">Chart Coming Soon</p>
      </div>
      <div className="safety-score-footer">
        <p>Safety ratings based on nomad community feedback</p>
      </div>

      {/* CSS inside the same file */}
      <style jsx>{`
        .safety-score-container {
          background-color: white;
          color: black;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 80%;
          margin: 2rem auto;
          position: relative;
        }

         .title {
          font-size: 2.5rem;
          font-weight: 600;
          margin-left:100px;
          // margin: 0 0 1rem 0;
          color: white;
          text-align: left;
        }

        .aqua-bar {
         margin-left:100px;
                  margin-right:100px;
border-radius:5px;
          height: 10px;
          background-color: #00ffff; /* Aqua color */
          // margin: 1rem 0;
        }

        .safety-score-chart {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 150px;
          background-color: #f8f9fa;
          border-radius: 0.25rem;
          margin: 1rem 0;
        }

        .safety-score-chart-text {
          color: #6b7280;
          font-size: 1rem;
        }

        .safety-score-footer {
          margin-top: 1.5rem;
          font-size: 0.875rem;
          color: #6b7280;
          text-align: center;
        }

        @media (max-width: 768px) {
          .safety-score-container {
            width: 90%;
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
    </div>
  );
}

export default SafetyScore;