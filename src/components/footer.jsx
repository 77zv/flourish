"use client";
import React from "react";

export default function Footer() {
  return (
    function MainComponent() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const mainLinks = [
        { href: "/", text: "Home" },
        { href: "/courses", text: "Courses" },
        { href: "/casper", text: "CASPer" },
        { href: "/mcat", text: "MCAT" },
        { href: "/directory", text: "MD Directory" },
      ];

      const socialLinks = [
        {
          href: "https://facebook.com/premdplus",
          icon: "fa-facebook",
          label: "Facebook",
        },
        {
          href: "https://twitter.com/premdplus",
          icon: "fa-twitter",
          label: "Twitter",
        },
        {
          href: "https://instagram.com/premdplus",
          icon: "fa-instagram",
          label: "Instagram",
        },
        {
          href: "https://linkedin.com/company/premdplus",
          icon: "fa-linkedin",
          label: "LinkedIn",
        },
      ];

      const contactInfo = {
        email: "contact@premdplus.com",
        phone: "+1 (555) 123-4567",
        address: "123 Medical Drive, Toronto, ON M5V 2T6",
      };

      const linkStyles =
        "text-white text-xl font-inter hover:text-[#FFD700] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FFD700] after:scale-x-0 hover:after:scale-x-100 after:transition-transform";

      const smallLinkStyles =
        "text-white text-sm font-inter hover:text-[#FFD700] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FFD700] after:scale-x-0 hover:after:scale-x-100 after:transition-transform";

      const socialLinkStyles =
        "text-white hover:text-[#FFD700] transition-colors text-2xl";

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      return (
        <footer className="bg-black text-white px-6 py-12 relative">
          <div className="max-w-7xl mx-auto">
            <div className="md:hidden flex items-center justify-between mb-6">
              <div className="text-3xl font-bold font-inter">
                <span className="text-[#FFD700]">PreMD</span>
                <span className="text-[#FFD700]">+</span>
              </div>
              <button onClick={toggleMenu} className="text-[#FFD700] text-2xl">
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden border-t border-[#FFD700]/20">
                <div className="py-6">
                  <h3 className="text-[#FFD700] font-bold font-inter text-2xl mb-6">
                    Quick Links
                  </h3>
                  <ul className="space-y-4">
                    {mainLinks.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className={linkStyles}>
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="py-6 border-t border-[#FFD700]/20">
                  <a
                    href="/consultation"
                    className="block w-full bg-[#FFD700] text-center text-black px-6 py-2 rounded-md font-bold font-inter hover:bg-[#FFE44D] transition-colors text-xl"
                  >
                    Book Now
                  </a>
                </div>

                <div className="py-6 border-t border-[#FFD700]/20">
                  <div className="flex justify-center space-x-6 mb-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className={socialLinkStyles}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <i className={`fab ${link.icon}`}></i>
                      </a>
                    ))}
                  </div>
                  <div className="space-y-2 mb-6">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="block text-center text-gray-300 hover:text-[#FFD700] transition-colors"
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      {contactInfo.email}
                    </a>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="block text-center text-gray-300 hover:text-[#FFD700] transition-colors"
                    >
                      <i className="fas fa-phone mr-2"></i>
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="text-gray-400 font-inter text-sm mb-4 text-center">
                    Copyright © 2024 PreMD+
                  </div>
                  <div className="flex flex-col space-y-4">
                    <a href="/terms" className={smallLinkStyles}>
                      Terms of Service
                    </a>
                    <a href="/privacy" className={smallLinkStyles}>
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="hidden md:grid grid-cols-4 gap-12">
              <div className="col-span-1">
                <div className="text-3xl font-bold font-inter mb-6">
                  <span className="text-[#FFD700]">PreMD</span>
                  <span className="text-[#FFD700]">+</span>
                </div>
                <div className="text-gray-300 font-inter text-lg mb-6">
                  Empowering future medical professionals with comprehensive
                  preparation resources.
                </div>
                <div className="flex space-x-4 mb-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={socialLinkStyles}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <i className={`fab ${link.icon}`}></i>
                    </a>
                  ))}
                </div>
                <div className="text-gray-400 font-inter text-sm">
                  Copyright © 2024 PreMD+
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-[#FFD700] font-bold font-inter text-2xl mb-6">
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  {mainLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={linkStyles}>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-[#FFD700] font-bold font-inter text-2xl mb-6">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="block text-gray-300 hover:text-[#FFD700] transition-colors"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    {contactInfo.email}
                  </a>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="block text-gray-300 hover:text-[#FFD700] transition-colors"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    {contactInfo.phone}
                  </a>
                  <p className="text-gray-300">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {contactInfo.address}
                  </p>
                  <a
                    href="/consultation"
                    className="inline-block bg-[#FFD700] text-black px-6 py-2 rounded-md font-bold font-inter hover:bg-[#FFE44D] transition-colors text-xl"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-[#FFD700] font-bold font-inter text-2xl mb-6">
                  Legal
                </h3>
                <div className="flex flex-col space-y-4">
                  <a href="/terms" className={smallLinkStyles}>
                    Terms of Service
                  </a>
                  <a href="/privacy" className={smallLinkStyles}>
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    },
    function StoryComponent() {
      return (
        <div className="w-full">
          <MainComponent />
        </div>
      );
    }
  );
}
