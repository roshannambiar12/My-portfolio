"use client";
import React from 'react';
import { Menu, X, Download } from 'lucide-react';
import icon from "../assets/icon.png"; // Make sure the path to your icon is correct
import Image from "next/image";

const Header = ({ scrollToSection, scrollY, isMenuOpen, setIsMenuOpen }) => {
  // Function to handle CV download
  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/roshancv66.pdf'; 
    // Set the download attribute with the desired file name
    link.download = 'roshan-cv.pdf';
    // Append the link to the document body
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Remove the link from the document body
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src={icon} 
              alt="Logo" 
              width={40} 
              height={40} 
              className="cursor-pointer"
              onClick={() => scrollToSection('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-gray-300 transition-colors text-lg duration-200 font-medium"
              >
                {item}
              </button>
            ))}
            {/* CV Download Button */}
            <button
              onClick={handleCVDownload}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false); // Close menu on click
                }}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                handleCVDownload();
                setIsMenuOpen(false); // Close menu on click
              }}
              className="flex items-center gap-2 w-full text-left rounded-md px-3 py-2 text-base font-medium text-purple-400 hover:text-purple-300 hover:bg-gray-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;