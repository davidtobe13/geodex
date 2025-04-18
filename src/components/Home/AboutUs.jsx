// components/AboutUs.js
import React from 'react';
import TeamImage from '../../assets/team-image.png'; // Add to assets

const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="container flex mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">ABOUT US</h2>
          <h3 className="text-orange-500 text-lg mb-4">Who We Are</h3>
          <p className="max-w-3xl mb-8">
            At Geodex, we're redefining outdoor advertising through innovative tech, data scientists, marketers, and media experts. Our platform gives advertisers the tools to measure what matters – from eyeballs to behavior.
          </p>
          
          <div className="mb-8">
            <h3 className="text-orange-500 text-lg mb-2">Mission</h3>
            <p className="max-w-3xl">
              To make out-of-home advertising as measurable and dynamic as digital media.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* Leave space for content if needed */}
          </div>
          <div className="w-full">
            <img 
              src={TeamImage} 
              alt="Team meeting" 
              className="rounded-lg shadow-lg w-full"
              onError={(e) => {
                e.target.src = "/api/placeholder/500/300";
                e.target.alt = "Team meeting placeholder";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
