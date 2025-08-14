import React, { useState } from "react";
import logo from "../assets/images/Frame 5.png";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/categories", label: "Categories", hasDropdown: true },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="max-w-[1620px] mx-auto">
        {/* Fixed Navbar Container */}
        <div className="bg-white/80 backdrop-blur-md fixed top-8 z-50 w-full max-w-[1620px] px-6 py-3 rounded-full shadow-sm">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="z-50">
              <img src={logo} alt="Logo" className="h-10 md:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1.5 transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-[#CBA65F] font-medium"
                        : "text-[#323232] hover:text-[#CBA65F]"
                    } text-lg`}
                    onClick={link.hasDropdown ? toggleCategories : undefined}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <FaChevronDown
                        className={`mt-1 transition-transform duration-200 ${
                          isCategoriesOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <div className="text-white bg-[#CBA65F] p-2 rounded-full text-xl hover:bg-[#b89452] transition-colors duration-300 cursor-pointer">
                <TfiWorld />
              </div>
              {isLoggedIn ? (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-[#CBA65F]">
                  <FaUserCircle className="text-[#CBA65F] text-2xl" />
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-white text-lg px-8 py-2 bg-[#CBA65F] rounded-full hover:bg-[#b89452] transition-colors duration-300 cursor-pointer"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#323232] text-2xl z-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed inset-y-0 left-0 w-[80%] sm:w-[60%] h-full bg-white z-40 flex flex-col pt-20 pb-8 transition-all duration-300 ease-in-out shadow-lg ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex-1 flex flex-col justify-between px-8">
              {/* Navigation Links */}
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-xl transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-[#CBA65F] font-medium"
                        : "text-[#323232] hover:text-[#CBA65F]"
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (link.hasDropdown) toggleCategories();
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Bottom Menu Section */}
              <div className="flex items-center gap-4">
                <div className="text-white bg-[#CBA65F] p-2 rounded-full text-xl cursor-pointer">
                  <TfiWorld />
                </div>
                {isLoggedIn ? (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-[#CBA65F]">
                    <FaUserCircle className="text-[#CBA65F] text-2xl" />
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleLogin();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-white text-lg px-6 py-2 bg-[#CBA65F] rounded-full"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
