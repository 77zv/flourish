import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#004838] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white rounded-lg p-2 transition-transform duration-300 group-hover:scale-110">
                <i className="fas fa-leaf text-[#004838] text-2xl"></i>
              </div>
              <span className="font-bold text-2xl">Flourish Institute</span>
            </Link>
            <p className="text-gray-300 text-lg leading-relaxed">
              Empowering students through expert mentorship and personalized
              education.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <i className="fas fa-envelope text-[#2ECC71] text-lg"></i>
                </div>
                <a
                  href="mailto:flourishinstitute1@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  flourishinstitute1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <i className="fas fa-phone text-[#2ECC71] text-lg"></i>
                </div>
                <a
                  href="tel:+14168064956"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  (416) 806-4956
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300 mt-1">
                  <i className="fas fa-location-dot text-[#2ECC71] text-lg"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  188t Wilson Ave Unit L100
                  <br />
                  North York, ON
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Flourish Institute. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#accessibility"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
