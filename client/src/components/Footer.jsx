import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <footer
      className="flex justify-around items-center pb-20 px-20 pt-10 relative 
  bg-[linear-gradient(to_right,transparent_2%,rgba(255,255,255,0.3)_10%,rgba(255,255,255,0.3)_90%,transparent_98%)] 
  bg-no-repeat bg-top bg-[length:100%_1px]"
    >
      <div className="">
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
        <div className="">
          Your trusted Tunisian marketplace for League of<br/> Legends & Valorant
          Accounts. <br />
          Proudly Serving Tunisia’s Gaming Community.{" "}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Quick Links</div>
        <Link to="/">About Us</Link>
        <Link to="/">How It Works</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">Contact Us</Link>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Tunisian Payment Partners</div>
        <div className="flex gap-2">
          <Link to="/" className="rounded-md bg-white/10 p-3">
            e-Dinar
          </Link>
          <Link to="/" className="rounded-md bg-white/10 p-3">
            Local banks
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z"
              stroke="#4ADE80"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="">SSL Secure</div>
        </div>

        <div className="flex gap-2 items-center">
          <img src="src/assets/secure.png" alt="" className="w-6 h-6" />
          <div className="">100% Tunisian Sellers</div>
        </div>
      </div>
      
    </footer>
    <div className="flex justify-center py-1 items-center px-10 relative 
  bg-[linear-gradient(to_right,transparent_10%,rgba(255,255,255,0.3)_15%,rgba(255,255,255,0.3)_85%,transparent_90%)] 
  bg-no-repeat bg-top bg-[length:100%_1px]">

  </div>
    </>
  );
}
