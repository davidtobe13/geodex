// components/WhyChooseUs.js
import React from 'react';
import PrecisionIcon from '../../assets/precision-icon.png'; // Add to assets
import InsightsIcon from '../../assets/insights-icon.png'; // Add to assets
import OptimizationIcon from '../../assets/optimization-icon.png'; // Add to assets
import DashboardIcon from '../../assets/dashboard-icon.png'; // Add to assets
import CollaborationIcon from '../../assets/collaboration-icon.png'; // Add to assets
import SecurityIcon from '../../assets/security-icon.png'; // Add to assets

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container w-[70%] mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">WHY CHOOSE US</h2>
        <p className="text-center text-orange-500 mb-12">Why Leading Brands Trust Geodex</p>
        
        <div className="grid grid-cols-2  md:grid-cols-3 gap-8">
          {/* Reason 1 */}
          <div className="flex flex-col items-center">
            <img src={PrecisionIcon} alt="Precision Icon" className="h-12 mb-4" />
            <p className="text-sm text-center text-gray-600">Data-driven media planning</p>
          </div>
          
          {/* Reason 2 */}
          <div className="flex flex-col items-center">
            <img src={InsightsIcon} alt="Insights Icon" className="h-12 mb-4" />
            <p className="text-sm text-center text-gray-600">Real-time location-based insights</p>
          </div>
          
          {/* Reason 3 */}
          <div className="flex flex-col items-center">
            <img src={OptimizationIcon} alt="Optimization Icon" className="h-12 mb-4" />
            <p className="text-sm text-center text-gray-600">Campaign performance optimization</p>
          </div>
          
          {/* Reason 4 */}
          <div className="flex flex-col items-center">
            <img src={DashboardIcon} alt="Dashboard Icon" className="h-12 mb-4" />
            <p className="text-sm text-center text-gray-600">Intuitive and interactive dashboards</p>
          </div>
          
          {/* Reason 5 */}
          <div className="flex flex-col items-center">
            <img src={CollaborationIcon} alt="Collaboration Icon" className="h-12 mb-4" />
            <p className="text-sm text-center text-gray-600">Seamless team and buyer collaboration</p>
          </div>
          
          {/* Reason 6 */}
          <div className="flex flex-col items-center">
            <img src={SecurityIcon} alt="Security Icon" className="h-12 mb-4" />
            <p className="text-sm text-center text-gray-600">Enterprise-grade security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;