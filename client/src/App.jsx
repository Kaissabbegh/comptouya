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
export default function App() {
  return (
    <div className="bg-[linear-gradient(135deg,#984D38_0%,#6B3D3B_22%,#3B2B3F_46%,#2B2540_54%,#181E41_63%,#181E41_93%,#181E41_97%)] text-[#e7eef4]">
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
      </BrowserRouter>
    </div>
  );
}
