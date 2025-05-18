import React, { useState } from 'react';
import GeoLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://geobox-backend.onrender.com/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage({ type: 'success', text: 'You have been added to the waitlist!' });
        setFormData({ email: '', companyName: '', phoneNumber: '' });
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen px-4 text-center py-12">
      {/* Logo */}
      <img src={GeoLogo} alt="Geodex Logo" className="h-24 mb-8" />
      
      {/* Main heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Coming <span className="text-orange-500">Soon!</span>
      </h1>
      
      {/* Message */}
      <div className="max-w-xl">
        <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
          Geodex Ad Manager is in active development.
        </p>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg shadow-sm mb-8">
          <p className="text-lg md:text-xl text-gray-700">
            Join our <span className="font-semibold text-orange-600">priority waitlist</span> to be among the first to get access when we launch!
          </p>
        </div>
        
        {/* Waitlist form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
          {message && (
            <div className={`p-3 mb-4 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message.text}
            </div>
          )}
          
          <div className="flex flex-col gap-3 mb-4">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address *" 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" 
              required
            />
            
            <input 
              type="text" 
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company name *" 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" 
              required
            />
            
            <input 
              type="tel" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number (optional)" 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            
            <button 
              type="submit" 
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-200 font-medium disabled:bg-orange-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </div>
        </form>
        
        {/* Return link */}
        <Link to="/home" className="text-orange-500 hover:text-orange-600 font-medium">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Signup;