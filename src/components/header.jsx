"use client";
import React, { useState } from "react";

// export default function Header() {
//   return (
function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/courses", text: "Courses" },
    { href: "/casper", text: "CASPer" },
    { href: "/mcat", text: "MCAT" },
    { href: "/directory", text: "MD Directory" },
  ];

  const linkStyles =
    "text-white text-lg font-bold font-inter hover:text-[#FFD700] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FFD700] after:scale-x-0 hover:after:scale-x-100 after:transition-transform py-2";

  return (
    <>
      <header className="bg-black text-white fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center h-[60px]">
            <a
              href="/"
              className="text-2xl font-bold text-[#FFD700] hover:text-[#FFE44D] transition-colors cursor-pointer flex items-center py-2"
            >
              PreMD<span className="text-[#FFD700]">+</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={linkStyles}>
                  {link.text}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleMenu}
                className="md:hidden text-[#FFD700] text-2xl"
              >
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
              </button>

              <a
                href="/consultation"
                className="hidden md:inline-block bg-[#FFD700] text-black px-6 py-3 rounded font-bold text-lg hover:bg-[#FFE44D] transition-colors"
              >
                Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-black border-t border-[#FFD700]/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${linkStyles} block py-4 px-6 border-b border-[#FFD700]/20`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <a
              href="/consultation"
              className="block w-full bg-[#FFD700] text-xl font-bold text-black py-4 px-6 font-inter hover:bg-[#FFE44D] transition-colors border-b border-[#FFD700]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Consultation
            </a>
          </nav>
        )}
      </header>
      <style jsx global>{`
        main {
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}
export default function Header() {
  return (
    <div className="w-full">
      <MainComponent />
    </div>
  );
}
//   );
// }
