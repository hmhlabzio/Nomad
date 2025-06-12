import { useState } from 'react';

function SparkHeader({ onContactClick, onBrowseClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md w-full z-50 fixed top-0 left-0 right-5 w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-15">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="/images/logo.svg"
              alt="Logo"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a
  onClick={onBrowseClick}
  className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer"
>
  Browse countries
</a>

            <a href="#about-section" className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a
  onClick={onContactClick}
  className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer"
>
  Contact
</a>
          </nav>

          <div className="hidden md:flex items-center space-x-1">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
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
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Home</a>
            <a
  onClick={onBrowseClick}
  className="block px-3 py-2 text-gray-900 hover:text-blue-600 cursor-pointer"
>
  Browse countries
</a>

            <a href="#about-section" className="block px-3 py-2 text-gray-900 hover:text-blue-600">About</a>
            <a
  onClick={onContactClick}
  className="block px-3 py-2 text-gray-900 hover:text-blue-600 cursor-pointer"
>
  Contact
</a>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default SparkHeader;

