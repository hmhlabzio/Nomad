import { useState } from 'react';

function SparkHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="/images/logo.svg" 
              alt="Logo"
            />
          </div>

          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Browse countries
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
              Browse countries
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
              About
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
              Contact
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default SparkHeader;