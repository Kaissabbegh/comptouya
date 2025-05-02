import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Header from "./components/Header";
import Marketplace from "./pages/Marketplace";
import Guides from "./pages/Guides";
import Blogs from "./pages/Blogs";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="bg-[linear-gradient(to_right,#3A1C3D_0%,#2A1E45_50%,#1A1F52_100%)] text-[#e7eef4]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
