import React, { useState } from "react";
import selambImage from "../assets/selamb.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#272727] text-white p-4 w-full border-b border-dashed border-gray-100">
      <div className="container mx-auto flex justify-around items-center">
        <NavLink to="/">
          <img
            src={selambImage}
            alt="Logo"
            className="w-30 h-20"
          />
        </NavLink>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/about" className="hover:text-blue-400 transition duration-200">
            KONTAKTA OSS
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-400 transition duration-200">
            OM OSS
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-400 transition duration-200">
            TJANSTER
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-400 transition duration-200">
            OFFERT
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-blue-400 transition duration-200">
            Pågående projekt
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-blue-400 transition duration-200">
            LOGGIN
          </NavLink>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 border-t border-gray-700">
          <NavLink to="/about" className="block w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition duration-200">
            KONTAKTA OSS
          </NavLink>
          <NavLink to="/about" className="block w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition duration-200">
            About
          </NavLink>
          <NavLink to="/contact" className="block w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition duration-200">
            Contact
          </NavLink>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-red-400 transition duration-200">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Header);
