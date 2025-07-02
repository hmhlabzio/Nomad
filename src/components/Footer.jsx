import React from 'react';
import { Link } from 'react-router-dom';

function Footer({
  onContactClick,
  onSafetyScoreClick,
  onMoodHeatmapClick,
  onCostCalculatorClick,
  onExploreWorldClick
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-10 lg:px-20 mt-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">NomadNetwork</h3>
          <p className="text-sm">
            Your trusted network for digital nomad visa programs worldwide.
            Connect with fellow nomads and find the perfect destination for your remote work lifestyle.
          </p>
          <div className="flex space-x-4 mt-4 text-white text-xl">
            <a href="#" className="hover:text-blue-500 transition duration-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-sky-400 transition duration-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-pink-500 transition duration-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-blue-700 transition duration-300"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {/* <li><Link to="/" className="hover:text-white transition duration-300">Home</Link></li> */}
            <li><Link to="/about-us" className="hover:text-white transition duration-300">About Us</Link></li>
            <li><a onClick={onContactClick} className="cursor-pointer hover:text-white transition duration-300">Contact Us</a></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Tools & Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Tools & Resources</h3>
          <ul className="space-y-2">
            <li><a onClick={onSafetyScoreClick} className="cursor-pointer hover:text-white transition duration-300">Safety & Trust Score</a></li>
            <li><a onClick={onMoodHeatmapClick} className="cursor-pointer hover:text-white transition duration-300">Mood Heatmap</a></li>
            <li><a onClick={onCostCalculatorClick} className="cursor-pointer hover:text-white transition duration-300">Cost of Living Forecaster</a></li>
            {/* <li><a onClick={onExploreWorldClick} className="cursor-pointer hover:text-white transition duration-300">Explore World</a></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <p className="text-sm">123 Nomad Lane, Digital City, World 78901</p>
          <p className="text-sm mt-2">Email: info@nomadnetwork.com</p>
          <p className="text-sm mt-2">Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        &copy; {currentYear} NomadNetwork. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
