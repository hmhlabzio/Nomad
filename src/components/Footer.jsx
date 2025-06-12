import React from 'react';

function Footer({ onContactClick }) {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div id="about-section">
          <h3 className="text-2xl font-bold mb-3">NomadNetwork</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted network for digital nomad visa programs worldwide. Connect with fellow nomads and find the perfect destination for your remote work lifestyle.
          </p>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-white font-semibold mb-3">Destinations</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Europe</a></li>
            <li><a href="#" className="hover:text-white">Asia</a></li>
            <li><a href="#" className="hover:text-white">Americas</a></li>
            <li><a href="#" className="hover:text-white">Africa</a></li>
            <li><a href="#" className="hover:text-white">All Countries</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Visa Guide</a></li>
            <li><a href="#" className="hover:text-white">Cost Calculator</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section - untouched */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© 2025 Nomad. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a onClick={onContactClick} className="hover:text-white cursor-pointer">Contact</a>
          <a href="#" className="hover:text-white">Follow us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
