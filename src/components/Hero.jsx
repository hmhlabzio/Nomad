function Hero() {
  return (
    <div className="w-full text-center py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-white mx-auto max-w-3xl">
        Explore Cities Smarter
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        Find cities that match your vibe 🌍✨
      </p>
      <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
        🔍 Start Exploring
      </button>
    </div>
  );
}

export default Hero;
