// components/Stats.js
import React from 'react';

const Stats = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-around text-center">
          <div className="w-1/3 mb-8 md:w-[200px] w-20 ">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">6k+</div>
            <div className="text-xs md:text-sm text-gray-500 mt-2">Outdoor Reach</div>
          </div>
          <div className="w-1/3 mb-8 md:w-[200px] w-20">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">700+</div>
            <div className="text-xs md:text-sm text-gray-500 mt-2">Data-driven Reports</div>
          </div>
          <div className="w-1/3 mb-8 md:w-[200px] w-20">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">120+</div>
            <div className="text-xs md:text-sm text-gray-500 mt-2">Marketing Campaigns</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;