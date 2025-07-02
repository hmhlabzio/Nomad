import { useState } from 'react';
import { Link } from 'react-router-dom';

function SparkHeader({ onContactClick, onBrowseClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="w-full z-20 py-5"
      style={{
        background: 'rgba(255, 255, 255, 0.1)', // semi-transparent white
        backdropFilter: 'blur(12px)',           // glass effect
        WebkitBackdropFilter: 'blur(12px)',     // Safari support
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex justify-between items-center h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="h-12 w-auto" src="/images/logo.svg" alt="NomadNetwork Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-yellow-400 text-sm font-medium">Home</Link>
          <Link to="/about-us" className="text-white hover:text-yellow-400 text-sm font-medium">About</Link>
          <a onClick={onContactClick} className="text-white hover:text-yellow-400 text-sm font-medium cursor-pointer">Contact</a>
        </nav>


        {/* CTA Button */}
        <div className="hidden md:flex">
          <button className="bg-yellow-400 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-gray-300 focus:outline-none"
          >
            <span className="sr-only">Toggle Menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black px-4 py-3">
          <Link to="/" className="block py-2 text-white hover:text-blue-300">Home</Link>
          <Link to="/about-us" className="block py-2 text-white hover:text-blue-300">About</Link>
          <a onClick={onContactClick} className="block py-2 text-white hover:text-blue-300 cursor-pointer">Contact</a>
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-md font-semibold">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

export default SparkHeader;
