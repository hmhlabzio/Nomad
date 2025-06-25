import React from "react";
import { useState } from "react";
import cityData from '../../CityData.json';
// Import FontAwesomeIcon and faStar for star ratings
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'; // Filled star
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'; // Outline star

function CityPreview({ onFeedbackSubmit }) { // Added onFeedbackSubmit prop
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCity, setHoveredCity] = useState(null);
  const [feedbackFormInput, setFeedbackFormInput] = useState({ // State for feedback form
    name: '',
    email: '',
    country: '',
    message: ''
  });

  const cities = cityData;

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null); // Clear selected city on close
  };

  const handleFeedbackFormChange = (e) => {
    const { name, value } = e.target;
    setFeedbackFormInput(prev => ({ ...prev, [name]: value }));
  };

  const handleFeedbackFormSubmit = (e) => {
    e.preventDefault();
    if (onFeedbackSubmit) {
      onFeedbackSubmit({ ...feedbackFormInput, city: selectedCity.name });
    }
    setFeedbackFormInput({ name: '', email: '', country: '', message: '' }); // Clear form
    alert('Feedback submitted!'); // Simple alert for confirmation
    closeModal();
  };

  // Helper function to render stars based on a percentage (out of 100)
  const renderStars = (percentage) => {
    const totalStars = 5;
    // Convert percentage to a 5-star scale and round to the nearest whole star
    const filledStars = Math.round((percentage / 100) * totalStars);
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(<FontAwesomeIcon key={i} icon={fasFaStar} className="text-yellow-400" />); // Filled star
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={farFaStar} className="text-gray-300" />); // Outlined star
      }
    }
    return stars;
  };

  return (
    <>
      <style>{`
        .container {
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
          gap: 1.5rem;
          /* Default: adaptively show columns, with a minimum width of 280px */
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        
        /* For screens wider than 768px (e.g., tablets), ensure at least 2 columns */
        @media (min-width: 768px) {
          .city-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* For screens wider than 992px (e.g., desktops), force exactly 3 columns */
        @media (min-width: 992px) {
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
        .modal-content {
          padding: 1.5rem;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .modal-title {
          font-size: 1.75rem;
          font-weight: bold;
        }
        .modal-tagline {
          color: #666;
        }
        .modal-close-button,
        .modal-close-button-main {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
        }
        
        .ratings-grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
            margin-bottom: 1.5rem;
        }

        .rating-card {
          background-color: #f9fafb;
          border-radius: 0.5rem;
          padding: 0.8rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
        }
        .rating-label {
          font-weight: 500;
          color: #333;
          font-size: 0.95rem;
          margin-bottom: 0;
          flex: none;
        }
        .stars-container {
          display: flex;
          gap: 0.2rem;
        }
        
        .feedback-section-wrapper {
          background-color: #fff;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-top: 2rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .feedback-section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }

        .feedback-city-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 0.5rem;
        }

        .feedback-city-details {
          flex-grow: 1;
        }

        .feedback-city-name {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.2rem;
          color: #0f172a;
        }

        .feedback-ratings-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.8rem;
          color: #333;
        }

        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .feedback-form input, .feedback-form select, .feedback-form textarea {
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
          margin-top: 1.5rem;
        }
        .modal-close-button-main:hover {
          background-color: #ef4444;
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
        <h2 className="section-title">Popular Cities for Digital Nomads</h2>
        <div className="city-grid">
          {cities.map((city) => (
            <div
              key={city.id}
              className="city-card"
              onClick={() => handleCityClick(city)}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div className="city-image-container">
                <img
                  src={city.image} // Assuming city.image holds the URL
                  alt={city.name}
                  className="city-image"
                  loading="lazy"
                />
                {hoveredCity === city.id && <div className="overlay">{city.name}</div>}
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
              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <h2 className="modal-title">{selectedCity.name}</h2>
                    <p className="modal-tagline">{selectedCity.tagline}</p>
                  </div>
                  <button onClick={closeModal} className="modal-close-button">
                    X
                  </button>
                </div>

                <p>{selectedCity.description}</p>

                {/* New combined feedback section */}
                <div className="feedback-section-wrapper">
                  <div className="feedback-section-header">
                    <img
                      src={selectedCity.image}
                      alt={selectedCity.name}
                      className="feedback-city-image"
                      loading="lazy"
                    />
                    <div className="feedback-city-details">
                      <h3 className="feedback-city-name">{selectedCity.name}</h3>
                      <p className="feedback-city-tagline">{selectedCity.tagline}</p>
                    </div>
                  </div>
                  
                  <h3 className="feedback-ratings-title">Nomad Ratings: ⭐⭐⭐⭐⭐</h3>
                  {/* New container for ratings to make them side-by-side in cards */}
                  <div className="ratings-grid-container">
                    {selectedCity.ratings &&
                      Object.entries(selectedCity.ratings).map(([key, value]) => (
                        <div className="rating-card" key={key}>
                          <span className="rating-label">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <div className="stars-container">
                            {renderStars(value)}
                          </div>
                        </div>
                      ))}
                  </div>

                  <form className="feedback-form" onSubmit={handleFeedbackFormSubmit}>
                    <h1 className="feedback-heading">
                      <i className="fas fa-comment-dots"></i> Your Feedback
                    </h1>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={feedbackFormInput.name}
                      onChange={handleFeedbackFormChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={feedbackFormInput.email}
                      onChange={handleFeedbackFormChange}
                      required
                    />
                    <select name="country" value={feedbackFormInput.country} onChange={handleFeedbackFormChange} required>
                      <option value="">Current Country</option>
                      {cities.map((city) => (
                        <option key={city.name} value={city.name.split(' ')[0].toLowerCase()}>
                          {city.name.split(' ')[0]}
                        </option>
                      ))}
                    </select>
                    <textarea
                      name="message"
                      placeholder="Tell us about your situation..."
                      value={feedbackFormInput.message}
                      onChange={handleFeedbackFormChange}
                      required
                    />
                    <button className="btn" type="submit">
                      Send Inquiry
                    </button>
                  </form>
                </div>

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
 
export default React.memo(CityPreview);