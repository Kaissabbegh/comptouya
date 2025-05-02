import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header
      className="flex justify-between py-1 items-center px-10 relative 
  bg-[linear-gradient(to_right,transparent_2%,rgba(255,255,255,0.3)_10%,rgba(255,255,255,0.3)_90%,transparent_98%)] 
  bg-no-repeat bg-bottom bg-[length:100%_1px]"
    >
      <Link to="/" className="text-[20px] flex items-center">
        <img src="src/assets/Logo.png" alt="" />
        <div
          className="text-[20px] font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #C084FC 0%, #3B82F6 100%)",
          }}
        >
          Comptouya
        </div>
      </Link>

      <div className="flex gap-4 p-3 bg-white/15 rounded-full">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/marketplace" className="">
          Marketplace
        </Link>
        <Link to="/signin" className="">
          Knowledge Base
        </Link>
        <Link to="/blogs" className="">
          Blogs
        </Link>
        <Link to="/contact" className="">
          Support
        </Link>
        
        
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              isSearchOpen ? "w-64" : "w-6"
            }`}
          >
            {isSearchOpen ? (
              <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 px-4 w-full focus:outline-none text-black"
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors rounded-full"
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
          className="rounded-full bg-[linear-gradient(to_right,#7E22DB_0%,#095ADF_100%)] px-5 py-1"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
