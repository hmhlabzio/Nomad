import React, { useState, useEffect } from "react";
import { fetchPlaces } from '../utils/api';
import './CityPreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function CityPreview() {
  const [places, setPlaces] = useState([]);
  const [likedCities, setLikedCities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPlaces();
        setPlaces(data.docs);
      } catch (err) {
        console.error(err.message);
      }
    };
    loadData();
  }, []);

  const toggleLike = (cityId) => {
    setLikedCities(prev => ({
      ...prev,
      [cityId]: !prev[cityId],
    }));
  };

  const getRatingLevel = (value) => {
    if (value >= 80) return { level: 'Excellent', color: '#22c55e' };
    if (value >= 70) return { level: 'Good', color: '#facc15' };
    if (value >= 60) return { level: 'Fair', color: '#f97316' };
    if (value >= 50) return { level: 'Poor', color: '#ef4444' };
    return { level: 'Poor', color: '#ef4444' };
  };

  return (
    <>
      <section className="filter-section">
        <div className="filter-toolbar" style={{ width: '100%' }}>
          <span className="filter-label">🔍 Filters:</span>

          <select className="filter-dropdown">
            <option>All Regions</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Americas</option>
            <option>Africa</option>
          </select>

          <select className="filter-dropdown">
            <option>Cost of Living</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>

          <select className="filter-dropdown">
            <option>Internet Speed</option>
            <option>Fastest First</option>
            <option>Slowest First</option>
          </select>

          <select className="filter-dropdown">
            <option>Visa Duration</option>
            <option>Short to Long</option>
            <option>Long to Short</option>
          </select>

          <div className="button-group">
            <button className="filter-button search">Search</button>
            <button className="filter-button reset">Reset</button>
          </div>
        </div>
      </section>

      <div className="container" id="popular-cities">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="city-grid">
          {places.map((city) => (
            <div key={city.id} className="city-card">
              <div className="city-image-container">
                <img
                  src={city.image?.url ? `http://localhost:3000${city.image.url}` : '/fallback.jpg'}
                  alt={city.name}
                  className="city-image"
                  loading="lazy"
                />
                <div className="overlay-top">
                  <h3 className="overlay-city-name">{city.name}</h3>
                  <p className="overlay-country">{city.country}</p>
                </div>
                <div className="internet-speed">{city.internet || '25'} Mbps</div>
              </div>

              <div className="city-info">
                <div className="city-meta">
                  <span className="price">{city.monthlyCost}/mon</span>
                  <span className="temp">{city.temperature}</span>
                  <span className="aqi">{city.aqi} AQI</span>
                </div>

                <div className="rating-bars">
                  {['cost', 'internet', 'safety', 'liked'].map((key) => {
                    const value = city[key] || 0;
                    const { level, color } = getRatingLevel(value);
                    return (
                      <div className="rating" key={key}>
                        <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <div className="bar">
                          <div
                            className="fill"
                            style={{ width: `${value}%`, backgroundColor: color }}
                          ></div>
                        </div>
                        <div className="rating-text">{level}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="card-buttons">
                  <button
                    className="details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/city/${city.id}`);
                    }}
                  >
                    View Details
                  </button>
                  <button
                    className="like-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(city.id);
                    }}
                  >
                    <FontAwesomeIcon icon={likedCities[city.id] ? fasFaHeart : farFaHeart} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(CityPreview);
