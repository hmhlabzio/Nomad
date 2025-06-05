 



import { useState } from 'react';

function CityPreview() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCity, setHoveredCity] = useState(null);

  const cities = [
    {
      name: "Tokyo 🏙️",
      image: "/images/tokyo.jpg",
      tagline: "Fast-paced tech & tradition",
      cafes: "4500+ specialty coffee shops",
      coworkingCost: "$300-500/month",
      safety: "Very Safe (9.2/10)",
      wifiSpeed: "100 Mbps average",
    },
    {
      name: "Bali 🌴",
      image: "/images/bali.jpg",
      tagline: "Island vibes & wellness",
      cafes: "1200+ relaxed beach cafes",
      coworkingCost: "$150-300/month",
      safety: "Generally Safe (7.8/10)",
      wifiSpeed: "35 Mbps average",
    },
    {
      name: "Goa 🌊",
      image: "/images/goa.jpg",
      tagline: "Beaches, parties & peace",
      cafes: "800+ eclectic beach shacks",
      coworkingCost: "$100-250/month",
      safety: "Moderately Safe (7.0/10)",
      wifiSpeed: "25 Mbps average",
    },
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-semibold mb-8 text-center">Popular Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cities.map((city) => (
          <div
            key={city.name}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 relative"
            onClick={() => handleCityClick(city)}
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <div className="relative">
              <img
                src={city.image}
                alt={city.name}
                className="h-48 w-full object-cover transition-all duration-300"
              />
              {hoveredCity === city.name && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300">
                  <span className="text-white font-bold text-lg">View Details</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{city.name}</h3>
              <p className="text-sm text-gray-600">{city.tagline}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <img
              src={selectedCity.image}
              alt={selectedCity.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-black"> {/* Added text-black here */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedCity.name}</h3>
                  <p className="text-gray-700">{selectedCity.tagline}</p> {/* Changed to gray-700 */}
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-700 hover:text-gray-900" /* Changed to gray-700 */
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Cafes:</span> {selectedCity.cafes}
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Coworking Cost:</span> {selectedCity.coworkingCost}
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Safety:</span> {selectedCity.safety}
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">WiFi Speed:</span> {selectedCity.wifiSpeed}
                </div>
              </div>

              <button
                onClick={closeModal}
                className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityPreview;