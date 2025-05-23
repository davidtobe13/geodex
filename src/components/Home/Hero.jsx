import React from 'react';
import MapIcon from '../../assets/map-icon.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gray-100 md:h-[67vh] h-auto flex">
      <div className="container flex justify-between mx-auto ">
        <div className="flex flex-col md:flex-row items-center md:w-[50%] w-[100%] px-4 md:px-6 py-16">
          <div className="w-full mb-10 md:mb-0">
            <div className="text-[20px] text-gray-600 font-medium mb-2">Track. Analyze.Optimize.</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Billboards Made Smarter with <span className="text-orange-500">Geodex</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Real time tracking, and performance insight for your outdoor ads.
            </p>
             <Link to="/signup"  className="bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 inline-block">
              Start Trial
            </Link>
          </div >
        </div>
        <div className='md:flex hidden'>
                <img src={MapIcon} alt="Location image" className="w-150 h-[430px] object-contain" />
                </div>
      </div>
    </div>
  );
};

export default Hero;