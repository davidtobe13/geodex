// components/AboutUs.js
import React from 'react';
import TeamImage from '../../assets/team-image.png'; // Add to assets

const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="container flex gap-20 px-4 md:px-6">
        <div className="pl-10 w-[100%] flex flex-col md:w-auto">
          <h2 className="text-2xl font-bold mb-2">ABOUT US</h2>
          <h3 className="text-orange-500 text-lg mb-4">Who We Are</h3>
          <p className="mb-8">
            At Geodex, we're redefining outdoor advertising through innovative tech, data scientists, marketers, and media experts. Our platform gives advertisers the tools to measure what matters – from eyeballs to behavior.
          </p>
          
          <div className="">
            <h3 className="text-orange-500 text-lg mb-2">Mission</h3>
            <p className="">
              To make out-of-home advertising as measurable and dynamic as digital media.
            </p>
          </div>
        </div>
        <div className="flex items-center md:flex hidden w-[]">
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
  );
};

export default AboutUs;
