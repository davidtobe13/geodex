// components/Header.js
import React, { useState } from 'react';
import GeoLogo from '../../assets/logo.png'; // You'll need to add this image to your assets

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={GeoLogo} alt="Geodex Logo" className="h-12" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-orange-500 font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-orange-500">Learn</a>
          <a href="#" className="text-gray-600 hover:text-orange-500">About</a>
          <a href="#" className="text-gray-600 hover:text-orange-500">Contact</a>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">Signin</a>
            <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Signup</a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4">
          <a href="#" className="block py-2 text-orange-500 font-medium">Home</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Learn</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">About</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Contact</a>
          <div className="mt-4 space-y-2">
            <a href="#" className="block text-center border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">Signin</a>
            <a href="#" className="block text-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Signup</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;