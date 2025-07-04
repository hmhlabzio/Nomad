// START OF FILE: src/App.jsx

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

// Import the background image
// <--- IMPORTANT: Make sure this path is correct for your downloaded image!

// Import all necessary components
import Hero from "./components/Hero";
import CityPreview from "./components/CityPreview";
import SparkHeader from './components/SparkHeader';
import Footer from './components/Footer';
import CostForecaster from './components/CostForecaster';
import SafetyTrustScore from './components/SafetyScore';
import MoodHeatmap from './components/MoodHeatmap';
import ExploreWorld from './components/ExploreWorld';
import AboutUsPage from './components/AboutUsPage';
import InsightsPage from './components/InsightsPage';
import Lifestylemeter from './components/LifestyleMeter';
import CityDetailsPage from './components/CityDetailsPage';


function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showBrowseForm, setShowBrowseForm] = useState(false);
  const [showSafetyScorePopup, setShowSafetyScorePopup] = useState(false);
  const [showMoodHeatmapPopup, setShowMoodHeatmapPopup] = useState(false);
  const [showCostForecasterPopup, setShowCostForecasterPopup] = useState(false);
  const [showExploreWorldPopup, setShowExploreWorldPopup] = useState(false);

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone must be 10 digits';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setContactSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    setTimeout(() => {
      setShowContactForm(false);
      setContactSubmitted(false);
    }, 3000);
  };

  const HomeView = () => {
    const location = useLocation();
    const popularCitiesRef = useRef(null);

    const handleFeedbackSubmit = (feedback) => {
      console.log("Feedback submitted:", feedback);
    };

    useEffect(() => {
      if (location.state && location.state.scrollToCities) {
        if (popularCitiesRef.current) {
          popularCitiesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    return (
      <>
        <Hero />
        <div id="popular-cities" ref={popularCitiesRef}>
          <CityPreview onFeedbackSubmit={handleFeedbackSubmit} />
        </div>
        <Lifestylemeter />
      </>
    );
  };

  return (
    <Router>
      <div className="bg-white text-black min-h-screen flex flex-col">
      
   
      


        {/* Main content area starts after the header+hero banner */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/city/:id" element={<CityDetailsPage />} />

          </Routes>
        </main>

        {/* Footer component */}
        <Footer
          onContactClick={() => setShowContactForm(true)}
          onSafetyScoreClick={() => setShowSafetyScorePopup(true)}
          onMoodHeatmapClick={() => setShowMoodHeatmapPopup(true)}
          onCostCalculatorClick={() => setShowCostForecasterPopup(true)}
          onExploreWorldClick={() => setShowExploreWorldPopup(true)}
        />

        {/* ======================================= */}
        {/* ALL POPUP MODALS (Conditionally rendered based on state) */}
        {/* ======================================= */}

        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-md relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-2 right-3 text-2xl font-bold bg-white text-black hover:text-gray-700"
                onClick={() => setShowContactForm(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              {contactSubmitted ? (
                <p className="text-green-600 font-semibold">Thank you! We'll get back to you soon.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-black bg-white"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-black bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-black bg-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Message</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded text-black bg-white"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                  </div>
                  <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        )}




        {/* Safety Score Popup */}
          {showSafetyScorePopup && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
              <div className="bg-white text-black p-6 rounded-md w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
                <button
                  className="absolute top-2 right-3 text-2xl font-bold bg-white text-black hover:text-gray-700"
                  onClick={() => setShowSafetyScorePopup(false)}
                >
                  &times;
                </button>
                <SafetyTrustScore onClose={() => setShowSafetyScorePopup(false)} />
              </div>
            </div>
          )}

          {/* Mood Heatmap Popup */}
          {showMoodHeatmapPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4 overflow-auto">
    <div className="bg-white text-black p-4 sm:p-6 rounded-md w-full max-w-6xl relative max-h-[95vh] overflow-y-auto">
      <button
        className="absolute top-2 right-3 text-2xl font-bold bg-white text-black hover:text-gray-700"
        onClick={() => setShowMoodHeatmapPopup(false)}
      >
        &times;
      </button>
      <MoodHeatmap onClose={() => setShowMoodHeatmapPopup(false)} />
    </div>
  </div>
)}


        {showCostForecasterPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-2 right-3 text-2xl font-bold bg-white text-black hover:text-gray-700"
                onClick={() => setShowCostForecasterPopup(false)}
              >
                &times;
              </button>
              <CostForecaster onClose={() => setShowCostForecasterPopup(false)} />
            </div>
          </div>
        )}

        {showExploreWorldPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-7xl relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-2 right-3 text-2xl font-bold bg-white text-black hover:text-gray-700"
                onClick={() => setShowExploreWorldPopup(false)}
              >
                &times;
              </button>
              <ExploreWorld onClose={() => setShowExploreWorldPopup(false)} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

// END OF FILE: src/App.jsx