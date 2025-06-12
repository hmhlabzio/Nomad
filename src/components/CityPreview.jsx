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
      ratings: {
        cost: 80,
        internet: 90,
        safety: 95,
        liked: 70,
      },
    },
    {
      name: "Bali 🌴",
      image: "/images/bali.jpg",
      tagline: "Island vibes & wellness",
      cafes: "1200+ relaxed beach cafes",
      coworkingCost: "$150-300/month",
      safety: "Generally Safe (7.8/10)",
      wifiSpeed: "35 Mbps average",
      ratings: {
        cost: 50,
        internet: 35,
        safety: 78,
        liked: 60,
      },
    },
    {
      name: "Goa 🌊",
      image: "/images/goa.jpg",
      tagline: "Beaches, parties & peace",
      cafes: "800+ eclectic beach shacks",
      coworkingCost: "$100-250/month",
      safety: "Moderately Safe (7.0/10)",
      wifiSpeed: "25 Mbps average",
      ratings: {
        cost: 40,
        internet: 25,
        safety: 70,
        liked: 55,
      },
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
      <style>{`
        // .container {
        //   padding: 2rem;
        // }
         .container {
//             width: 95%;
            margin: 2rem auto;
            padding: 0 1rem;
          }
        .section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .city-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

          //         .city-grid {
          //   display: grid;
          //   grid-template-columns: 1fr;
          //   gap: 1.5rem;
          // }
        // .city-card {
        //   cursor: pointer;
        //   border: 1px solid #ddd;
        //   border-radius: 0.75rem;
        //   overflow: hidden;
        //   transition: transform 0.2s;
        // }

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
          transform: scale(1.02);
        }
        .city-image-container {
          position: relative;
        }
        .city-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }
        .city-info {
          padding: 1rem;
        }
        .city-name {
          font-size: 1.25rem;
          font-weight: bold;
        }
        .city-tagline {
          color: #555;
        }
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          width: 90%;
          max-width: 800px;
          border-radius: 0.75rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 90vh;
          overflow-y: auto;
          color:black;
        }
        .modal-image-container img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .modal-content {
          padding: 1.5rem;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .modal-title {
          font-size: 1.75rem;
          font-weight: bold;
        }
        .modal-tagline {
          color: #666;
        }
        .modal-detail {
          margin-top: 0.5rem;
        }
        .detail-label {
          font-weight: bold;
        }
        .modal-close-button,
        .modal-close-button-main {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
        }
        .ratings-card {
          background-color: #fff;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-top: 2rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .ratings-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .bar-row {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .bar-label {
          flex: 0 0 100px;
          font-weight: 500;
        }
        .bar-track {
          flex: 1;
          height: 0.5rem;
          background: #e5e7eb;
          border-radius: 0.25rem;
          overflow: hidden;
          margin-right: 0.75rem;
        }
        .bar-fill {
          height: 100%;
          border-radius: 0.25rem;
        }
        .bar-value {
          min-width: 2.5rem;
          text-align: right;
          font-size: 0.9rem;
        }
        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
          
        }
        .feedback-form input,
        .feedback-form select,
        .feedback-form textarea {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
           background-color:white;
        }
        .btn {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          margin-bottom:1rem;
        }
          .modal-close-button-main {
   background-color: #2563eb;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 15.5rem;
          cursor: pointer;
}

.modal-close-button-main:hover {
  background-color: #ef4444; /*red-500 */
}

.feedback-heading {
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #2563eb;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 0.4rem;
}
.feedback-heading i {
  font-size: 1.5rem;
  color: #2563eb;
}



      `}</style>

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
                    <span className="detail-label">Cafes:</span>{" "}
                    {selectedCity.cafes}
                  </div>
                  <div className="modal-detail">
                    <span className="detail-label">Coworking Cost:</span>{" "}
                    {selectedCity.coworkingCost}
                  </div>
                  <div className="modal-detail">
                    <span className="detail-label">Safety:</span>{" "}
                    {selectedCity.safety}
                  </div>
                  <div className="modal-detail">
                    <span className="detail-label">WiFi Speed:</span>{" "}
                    {selectedCity.wifiSpeed}
                  </div>
                </div>

                <div className="ratings-card">
                  <div className="ratings-title">Living Costs & Quality</div>
                  {Object.entries(selectedCity.ratings).map(([key, val]) => {
                    const color = {
                      cost: "#10B981",
                      internet: "#3B82F6",
                      safety: "#10B981",
                      liked: "#EF4444",
                    }[key];
                    const label = {
                      cost: "Cost",
                      internet: "Internet",
                      safety: "Safety",
                      liked: "Liked",
                    }[key];
                    return (
                      <div className="bar-row" key={key}>
                        <div className="bar-label">{label}</div>
                        <div className="bar-track">
                          <div
                            className="bar-fill"
                            style={{ width: `${val}%`, background: color }}
                          />
                        </div>
                        <div className="bar-value">{val}%</div>
                      </div>
                    );
                  })}
                </div>

                <form
                  className="feedback-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks for your feedback!");
                  }}
                >
                  {/* <h1>Feedback Form</h1> */}
                  <h1 className="feedback-heading">
  <i className="fas fa-comment-dots"></i> Feedback Form
</h1>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
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
                  <button className="btn" type="submit">
                    Send Inquiry
                  </button>
                </form>

                <button
                  onClick={closeModal}
                  className="modal-close-button-main"
                >
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
