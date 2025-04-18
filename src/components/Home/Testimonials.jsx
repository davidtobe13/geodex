// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Geodex helped us cut spend by 30% and boost our ROI.",
      author: "Relates Media",
      rating: 5
    },
    {
      id: 2,
      text: "Finally, OOH that's measurable! Our campaigns convert in half the time.",
      author: "Intouch mena",
      rating: 5
    },
    {
      id: 3,
      text: "Since we started using Geodex, we've seen much smarter placement selection and better conversion rates.",
      author: "MarketBridge",
      rating: 5
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">TESTIMONIALS</h2>
        <p className="text-center text-orange-500 mb-12">What Our Clients Are Saying</p>
        
        <div className="flex flex-col md:flex-row gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 flex-1">
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <span className="font-medium text-gray-700">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;