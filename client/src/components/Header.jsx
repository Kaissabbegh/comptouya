import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between px-[200px] p-[30px]">
      <Link to="/" className="text-[30px]">Comptouya XD</Link>
      <div className="flex gap-4 p-3">
        <Link to="/" className="p-2">Home</Link>
        <Link to="/marketplace" className="p-2">Marketplace</Link>
        <Link to="/contact" className="p-2">Contact us</Link>
        <Link to="/about" className="p-2">About us</Link>
        <Link to="/blogs" className="p-2">Blogs</Link>
        <Link to="/signin" className="border p-2">Login</Link>
      </div>
    </header>
  );
}
