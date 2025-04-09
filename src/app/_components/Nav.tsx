import Link from "next/link";

function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#004838] text-white shadow-lg">
        <nav className="px-3 sm:px-4 py-4 sm:py-6 flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-inter text-lg sm:text-xl md:text-2xl font-extrabold flex items-center gap-2 md:gap-3 transition-all duration-300 hover:text-shadow-white"
          >
            <div className="bg-white rounded-lg p-1.5 flex items-center justify-center">
              <i className="fas fa-leaf text-[#004838] text-lg sm:text-xl md:text-2xl"></i>
            </div>
            Flourish Institute
          </Link>
          
          <div className="flex items-center">
            <Link
              href="/register"
              className="bg-white text-[#004838] px-4 py-2 rounded-md text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  export default Header;