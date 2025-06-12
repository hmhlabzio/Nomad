import { useState } from "react";

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
            width: 90%;
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
            width: 100%;
          }

          .city-card:hover {
            box-shadow: 0 8px 12px rgba(0,0,0,0.15);
          }

          .city-image-container {
            position: relative;
            overflow: hidden;
          }

          .city-image {
            width: 100%;
            height: 12rem;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .city-card:hover .city-image {
            transform: scale(1.08);
          }

          .overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .city-card:hover .overlay {
            opacity: 1;
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
            width: 70vw;
            max-width: 1200px;
            height: 90vh;
            max-height: 800px;
            overflow: hidden;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
          }

          .modal-image-container {
            height: 40%;
            overflow: hidden;
          }

          .modal-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .modal-content {
            padding: 1.5rem;
            color: black;
            height: 60%;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 1rem;
          }

          .modal-title {
            font-size: 1.8rem;
            font-weight: bold;
          }

          .modal-tagline {
            color: #444;
            font-size: 1.1rem;
          }

          .modal-close-button {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #444;
            cursor: pointer;
            padding: 0.5rem;
          }

          .modal-details {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            flex-grow: 0;
          }

          .modal-detail {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.1rem;
          }

          .detail-label {
            font-weight: 600;
            min-width: 140px;
          }

          .feedback-form {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .feedback-form input,
          .feedback-form select,
          .feedback-form textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
          }

          .feedback-form textarea {
            resize: vertical;
            min-height: 6rem;
          }

          .feedback-form button {
            align-self: flex-end;
            background: #3B82F6;
            margin-bottom: 2.5rem;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .feedback-form button:hover {
            background-color: #2563EB;
            transform: translateY(-1px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .modal-close-button-main {
            margin-top: auto;
            width: 100%;
            background-color: #3B82F6;
            color: white;
            padding: 0.75rem 1rem;
            border: none;
            border-radius: 0.5rem;
            transition: background-color 0.3s ease, transform 0.3s ease;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 500;
          }

          .modal-close-button-main:hover {
            background-color: #2563EB;
            transform: translateY(-1px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 768px) {
            .modal {
              width: 90vw;
              height: 80vh;
            }

            .modal-detail {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.25rem;
            }

            .detail-label {
              min-width: unset;
            }
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
              <div className="modal-image-container">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="modal-image"
                />
              </div>
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
                    <span className="detail-label">Coworking Cost:</span>{" "}
                    {selectedCity.coworkingCost}
                  </div>
                  <div className="modal-detail">
                    <span className="detail-label">Safety:</span> {selectedCity.safety}
                  </div>
                  <div className="modal-detail">
                    <span className="detail-label">WiFi Speed:</span>{" "}
                    {selectedCity.wifiSpeed}
                  </div>
                </div>

                <form
                  className="feedback-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks for your feedback!");
                  }}
                >
                  <h1>Feedback Form</h1>
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                  <select name="country" required>
                    <option value="">Current Country</option>
                    <option value="jp">Japan</option>
                    <option value="id">Indonesia</option>
                    <option value="in">India</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Tell us about your situation..."
                    required
                  />
                  <button className="btn" type="submit">Send Inquiry</button>
                </form>

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
