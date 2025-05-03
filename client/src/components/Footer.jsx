import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col lg:flex-row justify-around items-start  lg:items-center pb-10 lg:pb-20 px-4 sm:px-6 lg:px-8 pt-10 relative bg-[linear-gradient(to_right,transparent_2%,rgba(255,255,255,0.3)_10%,rgba(255,255,255,0.3)_90%,transparent_98%)] bg-no-repeat bg-top bg-[length:100%_1px] gap-8 lg:gap-0">
        {/* Brand Info */}
        <div className="max-w-xs">
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
          <div className="text-sm mt-3 text-gray-300">
            Your trusted Tunisian marketplace for League of Legends & Valorant
            Accounts. Proudly Serving Tunisia's Gaming Community.
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <div className="font-bold text-base">Quick Links</div>
          <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
          <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Payment Partners */}
        <div className="flex flex-col gap-4">
          <div className="font-bold text-base">Tunisian Payment Partners</div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link to="/" className="rounded-md bg-white/10 p-2 sm:p-3 text-sm text-center hover:bg-white/20 transition-colors">
              e-Dinar
            </Link>
            <Link to="/" className="rounded-md bg-white/10 p-2 sm:p-3 text-sm text-center hover:bg-white/20 transition-colors">
              Local banks
            </Link>
          </div>
          
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z"
                stroke="#4ADE80"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-sm text-gray-300">SSL Secure</div>
          </div>

          <div className="flex gap-2 items-center">
            <img src="src/assets/secure.png" alt="Secure" className="w-5 h-5" />
            <div className="text-sm text-gray-300">100% Tunisian Sellers</div>
          </div>
        </div>
      </footer>
      
      <div className="flex justify-center py-1 items-center px-4 sm:px-6 lg:px-8 relative bg-[linear-gradient(to_right,transparent_10%,rgba(255,255,255,0.3)_15%,rgba(255,255,255,0.3)_85%,transparent_90%)] bg-no-repeat bg-top bg-[length:100%_1px]">
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Comptouya. All rights reserved.
        </div>
      </div>
    </>
  );
}