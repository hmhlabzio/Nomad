 

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

      {/* CSS inside the same file */}
      <style>{`
        .hero-container {
          width: 100%;
          text-align: center;
          padding-top: 3rem;
          padding-bottom: 5rem;
        }

        @media (min-width: 768px) {
          .hero-container {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: bold;
          color: #00ffff; /* aqua */
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .hero-subtitle {
          margin-top: 1rem;
          font-size: 1.125rem;
          color: #d1d5db; /* gray-300 */
        }

        @media (min-width: 768px) {
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }

        .hero-button {
          margin-top: 1.5rem;
          background-color: black;
             color: #00ffff;
          padding: 0.75rem 1.5rem;
          border-radius: 9px; /* fully rounded */
          font-weight: 600;
          border:3px solid #00ffff;
          cursor: pointer;
          transition: background-color 0.3s;
         }

        .hero-button:hover {
          background-color: black; /* gray-200 */
        }
      `}</style>
    </div>
  );
}

export default Hero;
