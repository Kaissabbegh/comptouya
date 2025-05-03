import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8 relative bg-[linear-gradient(to_right,transparent_2%,rgba(255,255,255,0.3)_10%,rgba(255,255,255,0.3)_90%,transparent_98%)] bg-no-repeat bg-bottom bg-[length:100%_1px]">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="mr-4 lg:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <Link to="/" className="text-[20px] flex items-center">
            <img src="src/assets/Logo.png" alt="Comptouya Logo" className="h-8 w-auto" />
            <div
              className="text-lg md:text-[20px] font-bold bg-clip-text text-transparent ml-2"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #C084FC 0%, #3B82F6 100%)",
              }}
            >
              Comptouya
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 p-3 bg-white/15 rounded-full">
          <Link to="/" className="hover:text-purple-300 transition-colors">
            Home
          </Link>
          <Link to="/marketplace" className="hover:text-purple-300 transition-colors">
            Marketplace
          </Link>
          <Link to="/knowledge" className="hover:text-purple-300 transition-colors">
            Knowledge Base
          </Link>
          <Link to="/blogs" className="hover:text-purple-300 transition-colors">
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-purple-300 transition-colors">
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative">
            <div
              className={`flex items-center transition-all duration-300 ease-in-out ${
                isSearchOpen ? "w-32 sm:w-64" : "w-6"
              }`}
            >
              {isSearchOpen ? (
                <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="py-1 sm:py-2 px-3 sm:px-4 w-full focus:outline-none text-black text-sm sm:text-base"
                    autoFocus
                  />
                  <button
                    onClick={toggleSearch}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 hover:bg-gray-300 transition-colors rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <button onClick={toggleSearch} className="p-1 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <Link
            to="/signin"
            className="rounded-full bg-[linear-gradient(to_right,#7E22DB_0%,#095ADF_100%)] px-3 sm:px-5 py-1 text-sm sm:text-base whitespace-nowrap"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm w-full absolute z-50 py-4 px-6">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="hover:text-purple-300 transition-colors py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/marketplace" 
              className="hover:text-purple-300 transition-colors py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Marketplace
            </Link>
            <Link 
              to="/knowlegde" 
              className="hover:text-purple-300 transition-colors py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Knowledge Base
            </Link>
            <Link 
              to="/blogs" 
              className="hover:text-purple-300 transition-colors py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-purple-300 transition-colors py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Support
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}