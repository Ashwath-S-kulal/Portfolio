import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaHome,
  FaUser,
  FaImage,
  FaBriefcase,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GraduationCap, Menu, X } from "lucide-react";
import ProfileImage from "../Images/profilepicture1.jpeg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* BUG FIX: 
      - Changed left-80 to lg:left-80 (only shifts on desktop)
      - Changed w-[calc...] to w-full lg:w-[calc(100%-20rem)] 
      - Added 'left-0' to ensure it starts at the edge on mobile
    */
    <header className="fixed top-0 left-0 lg:left-80 w-full lg:w-[calc(100%-20rem)] z-50 bg-[#1e1e28]/90 backdrop-blur-md border-b border-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo & Profile Section */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full ring-2 ring-yellow-500 object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1e1e28] rounded-full"></span>
            </div>
            {/* BUG FIX: Visible on small screens for branding when sidebar is hidden */}
            <div className="block lg:hidden xl:block">
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">Ashwath S</h3>
              <p className="text-[10px] text-yellow-500 font-medium">Available for Hire</p>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet, flex on Large */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <NavLink href="#" icon={<FaHome />} label="Home" />
            <NavLink href="#about" icon={<FaUser />} label="About" />
            <NavLink href="#skills" icon={<FaImage />} label="Skills" />
            <NavLink href="#projects" icon={<FaBriefcase />} label="Projects" />
            <NavLink href="#education" icon={<GraduationCap />} label="Education" />
            <NavLink href="#contact" icon={<FaEnvelope />} label="Contact" />
          </nav>

          {/* Social Icons (Desktop) */}
          <div className="hidden xl:flex items-center gap-4 border-l border-gray-700 ml-6 pl-6">
            <SocialIcon href="https://github.com/Ashwath-S-kulal" icon={<FaGithub />} />
          </div>

          {/* Mobile Menu Button - Visible on screens < 1024px (lg) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-500 transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#24242f] border-b border-gray-800 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <MobileNavLink href="#" icon={<FaHome />} label="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="#about" icon={<FaUser />} label="About" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="#skills" icon={<FaImage />} label="Skills" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="#projects" icon={<FaBriefcase />} label="Projects" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="#education" icon={<GraduationCap />} label="Education" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="#contact" icon={<FaEnvelope />} label="Contact" onClick={() => setIsOpen(false)} />

          <div className="flex justify-center gap-8 pt-6 border-t border-gray-800 mt-4">
            <SocialIcon href="https://github.com/Ashwath-S-kulal" icon={<FaGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/ashwath-s-56a5b2334/" icon={<FaLinkedinIn />} />
            <SocialIcon href="https://x.com/Ashwath52870943" icon={<FaXTwitter />} />
          </div>
        </div>
      </div>
    </header>
  );
}

/* --- Helper Components --- */

const NavLink = ({ href, icon, label }) => (
  <a href={href} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-yellow-500 transition-all duration-300">
    <span className="text-yellow-500 text-sm">{icon}</span>
    {label}
  </a>
);

const MobileNavLink = ({ href, icon, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center gap-4 p-4 text-xs font-bold uppercase tracking-widest text-gray-300 hover:bg-[#1e1e28] hover:text-yellow-500 rounded-sm transition-all"
  >
    <span className="text-yellow-500">{icon}</span>
    {label}
  </a>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-yellow-500 transform hover:scale-110 transition-all"
  >
    {React.cloneElement(icon, { size: 18 })}
  </a>
);