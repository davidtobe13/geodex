// components/CTA.js
import React from 'react';

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-600 py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Know Who's Watching — <br />And How They Move.
            </h2>
            <p className="mb-6">
              Outdoor ads aren't static anymore. With Geodex, you can track your ad's traffic, audience demographics, and engagement levels. Know exactly who's viewing your ads, how long they stayed, and where they went next — all in one intelligent dashboard.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <a href="#" className="bg-white text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 inline-block">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;