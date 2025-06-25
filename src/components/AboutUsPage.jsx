// src/components/AboutUsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUsPage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/', { state: { scrollToCities: true } });
  };

  return (
    <div className="about-us-container">
      <style>{`
        .about-us-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem auto;
          max-width: 1000px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          line-height: 1.6;
          text-align: left;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .shaded-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          grid-column: 1 / -1;
          background-image: linear-gradient(to right, wheat, #0f172a, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          line-height: 1.3;
          margin-bottom: 1.5rem;
        }

        .highlighted-word {
          font-style: italic;
          
        }

        .about-us-text {
          font-size: 1.1rem;
          color: #4a5568;
        }

        .about-us-image {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
        }

        .explore-button {
          background-image: linear-gradient(to right, wheat, #0f172a, #6366f1, #8b5cf6);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          margin-top: 1.5rem;
          grid-column: 1 / -1;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .explore-button:hover {
          transform: scale(1.05);
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .about-us-container {
            grid-template-columns: 1fr;
            padding: 1.5rem;
            margin: 1.5rem 1rem;
            gap: 1rem;
          }

          .shaded-title {
            font-size: 1.8rem;
          }

          .explore-button {
            font-size: 0.95rem;
            padding: 0.6rem 1.2rem;
          }
        }
      `}</style>

      <h1 className="shaded-title">
        Your Gateway to <span className="highlighted-word">Smart</span>, <span className="highlighted-word">Supported</span> Nomad Living
      </h1>

      <div className="about-us-text">
        <p><strong>Nomad is your trusted network for digital nomad visa programs worldwide.</strong></p>
        <p>We help remote workers find verified visas, connect with fellow nomads, and discover destinations that fit their lifestyle.</p>
        <p><strong>Join a global community and take your work anywhere — with confidence and support.</strong></p>
      </div>

      <img
        src="https://storage.googleapis.com/relocate-production-store/digital-visa-DC8gGrSzzo.webp"
        alt="Digital Nomad Visa"
        className="about-us-image"
      />

      <button onClick={handleExploreClick} className="explore-button">
        <span role="img" aria-label="Map">🗺️</span> Explore All Places
      </button>
    </div>
  );
}

export default AboutUsPage;
