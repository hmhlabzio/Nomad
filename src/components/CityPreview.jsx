 

import { useState } from 'react';

function CityPreview() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCity, setHoveredCity] = useState(null);

  const cities = [
    {
      name: "Tokyo 🏙️",
      image: "/images/tokyo.jpg",
      tagline: "Fast-paced tech & tradition",
      cafes: "4500+ specialty coffee shops",
      coworkingCost: "$300-500/month",
      safety: "Very Safe (9.2/10)",
      wifiSpeed: "100 Mbps average",
    },
    {
      name: "Bali 🌴",
      image: "/images/bali.jpg",
      tagline: "Island vibes & wellness",
      cafes: "1200+ relaxed beach cafes",
      coworkingCost: "$150-300/month",
      safety: "Generally Safe (7.8/10)",
      wifiSpeed: "35 Mbps average",
    },
    {
      name: "Goa 🌊",
      image: "/images/goa.jpg",
      tagline: "Beaches, parties & peace",
      cafes: "800+ eclectic beach shacks",
      coworkingCost: "$100-250/month",
      safety: "Moderately Safe (7.0/10)",
      wifiSpeed: "25 Mbps average",
    },
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <style>
        {`
          .container {
            width: 100%;
             margin: 2rem auto;
            padding: 0 1rem;
          }

          .section-title {
                    font-size: 2.5rem;

            font-weight: 600;
            margin-bottom: 2rem;
          }

          .city-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 4.5rem;
          }

          @media (min-width: 600px) {
            .city-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .city-card {
            background-color: white;
            color: black;
          
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            width:100%;
          }

          .city-card:hover {
            box-shadow: 0 8px 12px rgba(0,0,0,0.15);
          }

          .city-image-container {
            position: relative;
          }

          .city-image {
            width: 100%;
            height: 12rem;
            object-fit: cover;
            transition: all 0.3s;
          }

          .overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
          }

          .overlay-text {
            color: white;
            font-weight: bold;
            font-size: 1.125rem;
          }

          .city-info {
            padding: 1rem;
          }

          .city-name {
            font-size: 1.25rem;
            font-weight: bold;
          }

          .city-tagline {
            font-size: 0.875rem;
            color: #666;
          }

          .modal-backdrop {
            position: fixed;
            inset: 0;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            z-index: 50;
          }

          .modal {
            background-color: white;
            border-radius: 1rem;
            max-width: 28rem;
            width: 100%;
            overflow: hidden;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          }

          .modal-image {
            width: 100%;
            height: 12rem;
            object-fit: cover;
          }

          .modal-content {
            padding: 1.5rem;
            color: black;
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 1rem;
          }

          .modal-title {
            font-size: 1.5rem;
            font-weight: bold;
          }

          .modal-tagline {
            color: #444;
          }

          .modal-close-button {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #444;
            cursor: pointer;
          }

          .modal-details {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .modal-detail {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .detail-label {
            font-weight: 500;
          }

          .modal-close-button-main {
            margin-top: 1.5rem;
            width: 100%;
            background-color: #3B82F6;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 0.5rem;
            transition: background-color 0.3s;
            cursor: pointer;
          }

          .modal-close-button-main:hover {
            background-color: #2563EB;
          }
        `}
      </style>

      <div id="popular-cities" className="container">
        <h2 className="section-title">Popular Cities</h2>
        <div className="city-grid">
          {cities.map((city) => (
            <div
              key={city.name}
              className="city-card"
              onClick={() => handleCityClick(city)}
              onMouseEnter={() => setHoveredCity(city.name)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div className="city-image-container">
                <img src={city.image} alt={city.name} className="city-image" />
                {hoveredCity === city.name && (
                  <div className="overlay">
                    <span className="overlay-text">View Details</span>
                  </div>
                )}
              </div>
              <div className="city-info">
                <h3 className="city-name">{city.name}</h3>
                <p className="city-tagline">{city.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedCity && (
          <div className="modal-backdrop">
            <div className="modal">
              <img
                src={selectedCity.image}
                alt={selectedCity.name}
                className="modal-image"
              />
              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <h3 className="modal-title">{selectedCity.name}</h3>
                    <p className="modal-tagline">{selectedCity.tagline}</p>
                  </div>
                  <button onClick={closeModal} className="modal-close-button">
                    ✕
                  </button>
                </div>

                <div className="modal-details">
                  <div className="modal-detail">
                    <span className="detail-label">Cafes:</span> {selectedCity.cafes}
                  </div>
                  <div className="modal-detail">
                    <span className="detail-label">Coworking Cost:</span> {selectedCity.coworkingCost}
                  </div>
                  <div className="modal-detail">
                    <span className="detail-label">Safety:</span> {selectedCity.safety}
                  </div>
                  <div className="modal-detail">
                    <span className="detail-label">WiFi Speed:</span> {selectedCity.wifiSpeed}
                  </div>
                </div>

                <button onClick={closeModal} className="modal-close-button-main">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CityPreview;