// components/Features.js
import React from 'react';
import PlanningIcon from '../../assets/planning-icon.png'; // Add to assets
import MonitoringIcon from '../../assets/monitoring-icon.png'; // Add to assets
import AnalyticsIcon from '../../assets/analytics-icon.png'; // Add to assets
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">FEATURES</h2>
        <p className="text-center text-orange-500 mb-12">Powerful Tools to Maximize Your Outdoor Reach</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1">
            <div className="flex justify-center mb-4">
              <img src={PlanningIcon} alt="Planning Icon" className="h-16" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">SMART PLANNING</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Our smart planning helps you target the right audience at the right time by creating innovative media plans that move people.
            </p>
            <div className="text-center">
              <Link to="/signup" className="text-sm border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50 inline-block">
                Join waitlist
              </Link>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1">
            <div className="flex justify-center mb-4">
              <img src={MonitoringIcon} alt="Monitoring Icon" className="h-16" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">REAL-TIME CAMPAIGN MONITORING</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Stay on top of your campaign metrics with real-time data analytics, performance tracking, and competitive reports that highlight what's working.
            </p>
            <div className="text-center">
              <Link to="/signup" className="text-sm border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50 inline-block">
                Join waitlist
              </Link>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1">
            <div className="flex justify-center mb-4">
              <img src={AnalyticsIcon} alt="Analytics Icon" className="h-16" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">PERFORMANCE ANALYTICS</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Dive deep into analytics to understand what drives engagement and conversions, helping you optimize your campaign's real worth.
            </p>
            <div className="text-center">
              <Link to="/signup" className="text-sm border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50 inline-block">
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;