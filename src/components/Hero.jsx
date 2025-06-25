import React from 'react';

function Hero() {
  const scrollToPopularCities = () => {
    const popularCitiesSection = document.getElementById('popular-cities');
    if (popularCitiesSection) {
      popularCitiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <h1 className="hero-title">Explore Cities Smarter</h1>
      <p className="hero-subtitle">
        AI-powered companion for digital nomads 🌍✨
      </p>
      <button 
        onClick={scrollToPopularCities}
        className="hero-button"
      >
        🔍 Start Exploring
      </button>

      <style>{`
        .hero-container {
          width: 100%;
          text-align: center;
          padding-top: 3rem;
          padding-bottom: 5rem;
          background-color: wheat;
        }

        @media (min-width: 600px) {
          .hero-container {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: bold;
          color: #0f172a; /* slate-900 */
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 600px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .hero-subtitle {
          margin-top: 1rem;
          font-size: 1.125rem;
          color: #4b5563; /* gray-600 */
        }

        @media (min-width: 600px) {
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }

        .hero-button {
          margin-top: 1.5rem;
          background-color: #0f172a; /* slate-900 */
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9px;
          font-weight: 600;
          border: 2px solid #0ea5e9; /* sky-500 */
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-button:hover {
          background-color: #0ea5e9; /* sky-500 */
          color: white;
          border-color: #0ea5e9;
        }
      `}</style>
    </div>
  );
}

export default Hero;