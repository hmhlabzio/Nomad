// src/pages/AboutUsPage.jsx

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sparkheader from '../components/SparkHeader';
import bg from '../assets/about-bg.jpg'; // ✅ Replace with your actual logo path

function AboutUsPage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/', { state: { scrollToCities: true } });
  };

  return (
    <>
      <Sparkheader />

      <div className="w-full px-4 sm:px-6 md:px-12 py-10 bg-white">
        <div
          className="max-w-5xl mx-auto text-center bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: 'rgba(5, 5, 5, 0.5)',
            backgroundBlendMode: 'overlay',
          }}
        >          
          {/* Title */}
          <h4 className="text-2xl sm:text-4xl md:text-3xl font-bold mb-8 text-white">
              Your Gateway to <span className="italic">Smart</span>, <span className="italic">Supported</span> Nomad Living
          </h4>



            <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
            {/* Circle 1 - Purple */}
            <div
              className="w-60 h-60 rounded-full shadow-md flex items-center justify-center p-6 text-sm font-medium text-white text-center"
              style={{ backgroundColor: '#a855f7' }} // Tailwind's purple-500
            >
              <p><strong>Nomad</strong> is your trusted network for digital nomad visa programs worldwide.</p>
            </div>

            {/* Circle 2 - Green */}
            <div
              className="w-60 h-60 rounded-full shadow-md flex items-center justify-center p-6 text-sm font-medium text-white text-center"
              style={{ backgroundColor: '#4ade80' }} // Tailwind's green-400
            >
              <p>We help remote workers find verified visas, connect with fellow nomads, and discover destinations that fit their lifestyle.</p>
            </div>

            {/* Circle 3 - Yellow */}
            <div
              className="w-60 h-60 rounded-full shadow-md flex items-center justify-center p-6 text-sm font-medium text-white text-center"
              style={{ backgroundColor: '#facc15' }} // Tailwind's yellow-400
            >
              <p><strong>Join</strong> a global community and take your work anywhere — with confidence and support.</p>
            </div>
          </div>





         {/* Explore Button with Visible Gradient Border */}
          <button
            onClick={handleExploreClick}
            className="mt-6 px-6 py-3 rounded-full text-white font-semibold bg-black hover:bg-gray-900 transition-all border border-white"
          >
            🗺️ Explore All Places
          </button>

        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
