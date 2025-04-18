// components/Adverts.js
import React from 'react';

const Adverts = () => {
  return (
    <div className="relative bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safe & Reliable<br />Cargo Solutions!</h2>
            <p className="mb-8">Providing reliable, exceptional and cost-effective global cargo solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition">
                Our Services
              </a>
              <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition flex items-center">
                <span>Watch Video</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* Placeholder for the image of workers */}
            <img 
              src="/api/placeholder/500/300" 
              alt="Cargo workers" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Adverts;