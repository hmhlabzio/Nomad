import { useState } from 'react';
import Hero from "./components/Hero";
import CityPreview from "./components/CityPreview";
import MoodHeatmap from "./components/MoodHeatmap";
import SafetyScore from "./components/SafetyScore";
import ExploreWorld from "./components/ExploreWorld";
import CostForecaster from "./components/CostForecaster";
import LifestyleMeter from "./components/LifestyleMeter";
import SparkHeader from './components/SparkHeader';
import Footer from './components/Footer';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showBrowseForm, setShowBrowseForm] = useState(false);
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
    // Clear errors
    setFormErrors({});
    // Show confirmation
    setContactSubmitted(true);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    // Auto close after 3 seconds
    setTimeout(() => {
      setShowContactForm(false);
      setContactSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <div className="w-[1440px] max-w-full px-4 py-6">
        <SparkHeader 
          onContactClick={() => setShowContactForm(true)} 
          onBrowseClick={() => setShowBrowseForm(true)} 
        />
        <Hero />
        <CityPreview/>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <MoodHeatmap />
          <SafetyScore />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <ExploreWorld />
          <CostForecaster />
        </div>
        <LifestyleMeter />
        <Footer onContactClick={() => setShowContactForm(true)} />

        {/* Contact Form Popup */}
        {showContactForm && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-md relative">
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

        {/* Browse Country Form Popup */}
        {showBrowseForm && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-2xl relative">
              <button
                className="absolute top-2 right-3 text-2xl font-bold bg-white text-black hover:text-gray-700"
                onClick={() => setShowBrowseForm(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Browse Countries</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Country Name</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option>Tokyo</option>
                    <option>Bali</option>
                    <option>Paris</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Date of Travel</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded bg-white" />
                </div>
                <div>
                  <label className="block mb-1">Season / Weather Preference</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option>Summer</option>
                    <option>Winter</option>
                    <option>Rainy</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Budget Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Travel Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option>Solo</option>
                    <option>Couple</option>
                    <option>Family</option>
                    <option>Group</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Popular Activities</label>
                  <div className="space-y-1">
                    <label><input type="checkbox" className="mr-2" /> Adventure</label><br />
                    <label><input type="checkbox" className="mr-2" /> Sightseeing</label><br />
                    <label><input type="checkbox" className="mr-2" /> Relaxation</label><br />
                    <label><input type="checkbox" className="mr-2" /> Wildlife</label>
                  </div>
                </div>
                <div>
                  <label className="block mb-1">Preferred Continent</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>America</option>
                  </select>
                </div>
              </form>
              <div className="mt-4 text-right">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Explore
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
