function CityPreview() {
  const cities = [
    {
      name: "Tokyo 🏙️",
      image: "/images/tokyo.jpg",
      tagline: "Fast-paced tech & tradition",
    },
    {
      name: "Bali 🌴",
      image: "/images/bali.jpg",
      tagline: "Island vibes & wellness",
    },
    {
      name: "Goa 🌊",
      image: "/images/goa.jpg",
      tagline: "Beaches, parties & peace",
    },
  ];

  return (
    <div className="w-full mt-12">
   
      <h2 className="text-2xl font-semibold mb-8 text-center">Popular Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cities.map((city) => (
          <div
            key={city.name}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={city.image}
              alt={city.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{city.name}</h3>
              <p className="text-sm text-gray-600">{city.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default CityPreview;
