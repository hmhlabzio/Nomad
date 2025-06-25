import { useNavigate } from 'react-router-dom';

function Footer({ onContactClick }) {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white px-20 py-8"> {/* Reduced py-12 to py-8 */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6"> {/* Changed to 4 columns */}
        {/* About Section */}
        <div id="about-section" className="col-span-2 lg:col-span-1"> {/* Adjusted column span */}
          <h3 className="text-2xl font-bold mb-3">NomadNetwork</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted network for digital nomad visa programs worldwide.
          </p>
        </div>


        {/* Nomad Insights */}
        <div>
          <h4 className="text-white font-semibold mb-3">Nomad Insights</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>
              <a onClick={() => navigate('/mood-heatmap')} className="hover:text-white cursor-pointer">
                Mood Heatmap
              </a>
            </li>
            <li>
              <a onClick={() => navigate('/safety-score')} className="hover:text-white cursor-pointer">
                Safety Trust Score
              </a>
            </li>
            <li>
              <a onClick={() => navigate('/cost-calculator')} className="hover:text-white cursor-pointer">
                Cost Calculator
              </a>
            </li>
            <li>
              <a onClick={() => navigate('/explore-world')} className="hover:text-white cursor-pointer">
                Explore World
              </a>
            </li>
          </ul>
        </div>
        
        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Visa Guide</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section - unchanged */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
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