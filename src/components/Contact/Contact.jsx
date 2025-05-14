import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import CTA from '../Home/Cta';
import Faq from '../Home/Faq';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.',
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.',
      });
      return;
    }
    
    // In a real application, you would submit to an API here
    // For this example, we'll simulate a successful submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will be in touch soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: '',
        });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="bg-white text-white">
    {/* <div className="bg-red-500 text-white"> */}
        <Header/>
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Ready to revolutionize your outdoor advertising? We're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl text-gray-700 font-bold mb-2">CONTACT US</h2>
              <h3 className="text-orange-500 text-xl font-bold mb-6">We'd Love to Hear from You</h3>
              
              <p className="mb-8 text-gray-600">
                Whether you're interested in a demo, have questions about our platform, or want to explore partnership opportunities, our team is ready to connect.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-500">Headquarters</h4>
                    <p className="text-gray-500 mt-1">
                      123 Tech Plaza, Suite 400<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-500">Email</h4>
                    <p className="text-gray-500 mt-1">
                      <a href="mailto:info@geodex.com" className="hover:text-orange-500 transition duration-300">info@geodex.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-500">Phone</h4>
                    <p className="text-gray-500 mt-1">
                      <a href="tel:+14155550123" className="hover:text-orange-500 transition duration-300">+1 (415) 555-0123</a>
                    </p>
                  </div>
                </div>
                
                {/* <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-500">Business Hours</h4>
                    <p className="text-gray-500 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              {formStatus.message && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.error ? 'bg-red-900 text-red-200' : 'bg-green-900 text-green-200'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition duration-300 font-medium"
                  disabled={formStatus.submitted}
                >
                  {formStatus.submitted ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">VISIT US</h2>
            <h3 className="text-orange-500 text-lg">Our Location</h3>
          </div>
          
          <div className="bg-gray-700 rounded-lg overflow-hidden h-96">
            {/* In a real application, you would replace this with an actual map component */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl font-semibold">Interactive Map</p>
                <p className="text-gray-500 mt-2">
                  In a real application, this would be an interactive map showing our office location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>     
      <Faq/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default ContactUs;