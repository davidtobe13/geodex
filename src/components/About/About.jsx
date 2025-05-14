import React from 'react';
import { MapPin, Mail, Phone, Clock, Users, BarChart, Target } from 'lucide-react';

import TeamImage from '../../assets/team-image.png'; // Add to assets
import { Link } from 'react-router-dom';
import CTA from '../Home/Cta';
import Footer from '../Home/Footer';
import Header from '../Home/Header';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
        <Header/>
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">Transforming Outdoor Advertising</h1>
            <p className="text-xl text-gray-300 mb-8">
              At Geodex, we're bridging the gap between digital precision and physical impact.
            </p>
            <a href="#our-story" className="inline-block bg-orange-500 hover:bg-orange-700 text-white py-3 px-6 rounded-md transition duration-300 font-medium">
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div id="our-story" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">ABOUT US</h2>
              <h3 className="text-orange-500 text-xl font-bold mb-4">Who We Are</h3>
              <p className="mb-6 text-gray-500">
                At Geodex, we're redefining outdoor advertising through innovative tech, data scientists, marketers, and media experts. Our platform gives advertisers the tools to measure what matters – from eyeballs to behavior.
              </p>
              <p className="mb-6 text-gray-500">
                Founded in 2019, our team brings together decades of combined experience in advertising technology, data science, and media planning. We recognized the gap between digital advertising's precision and traditional outdoor media's impact, and built Geodex to bridge that divide.
              </p>
              <p className="text-gray-500">
                Today, we work with leading brands across retail, entertainment, technology, and consumer goods to optimize their out-of-home media investments through real-time analytics and dynamic campaign management.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="bg-gray-800 rounded-lg p-8 w-full">
                <img
                  src={TeamImage}
                  alt="Team meeting"
                  className="rounded-lg shadow-lg w-full mb-6"
                />
                <h3 className="text-orange-500 text-xl font-bold mb-2">Mission</h3>
                <p className="text-gray-300">
                  To make out-of-home advertising as measurable and dynamic as digital media, empowering brands to connect with audiences in physical spaces with digital-grade precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">OUR VALUES</h2>
            <h3 className="text-orange-500 text-xl font-bold">What Drives Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full mb-4">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl text-white font-semibold mb-3">Data-Driven Decisions</h4>
              <p className="text-gray-300">
                We believe in the power of data to transform advertising from guesswork to precision. Every feature and recommendation is backed by robust analytics.
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Measurable Impact</h4>
              <p className="text-gray-300">
                If it can't be measured, it can't be improved. We provide transparent metrics that clearly demonstrate ROI and campaign effectiveness.
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Client Partnership</h4>
              <p className="text-gray-300">
                We succeed when our clients succeed. We view every engagement as a partnership, providing hands-on support and strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">OUR TEAM</h2>
            <h3 className="text-orange-500 text-lg">The People Behind Geodex</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/api/placeholder/200/200"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">Sarah Johnson</h4>
              <p className="text-orange-500">CEO & Co-Founder</p>
              <p className="mt-2 text-gray-300">
                15+ years in AdTech leadership, previously VP at MediaMetrics
              </p>
            </div>
            <div className="text-center">
              <img
                src="/api/placeholder/200/200"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">Michael Chen</h4>
              <p className="text-orange-500">CTO & Co-Founder</p>
              <p className="mt-2 text-gray-300">
                Former Data Science Director at TechAnalytics, PhD in Computer Science
              </p>
            </div>
            <div className="text-center">
              <img
                src="/api/placeholder/200/200"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">Alex Rodriguez</h4>
              <p className="text-orange-500">COO</p>
              <p className="mt-2 text-gray-300">
                Outdoor media veteran with 12+ years at Global Outdoor and ClearChannel
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
  <CTA/> 
  <Footer/> 

    </div>
  );
};

export default AboutUs;