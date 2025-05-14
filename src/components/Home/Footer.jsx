// components/Footer.js
import React from "react";
import GeoLogo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaX, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={GeoLogo} alt="Geodex Logo" className="h-12" />
            </div>

            <div className="flex items-center mb-3 text-sm text-gray-600">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>24, Abiye street, Ajah, Lagos</span>
            </div>

            <div className="flex items-center mb-3 text-sm text-gray-600">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+234 703 423 5942</span>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>geodex@gmail.com</span>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-gray-800 font-medium mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Learn
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/singularity.core"
                  className="flex items-center text-gray-600 hover:text-orange-500 text-sm gap-3"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-500 text-sm"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-orange-500 text-sm gap-3"
                >
                  <FaLinkedin />

                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/sigularitycore"
                  className="flex items-center text-gray-600 hover:text-orange-500 text-sm gap-3"
                >
                  <FaXTwitter />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>Copyright © 2025 Geodex</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
