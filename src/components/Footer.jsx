function Footer({ onContactClick }) {
  return (
    <footer className="bg-[#0f172a] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div id="about-section">
          <h3 className="text-2xl font-bold mb-3">Nomad</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nomad is our smart companion for digital nomad city exploration.
            Discover the best destinations with real-time data on lifestyle, 
            internet, safety, and more.
          </p>
        </div>
      </div>

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

