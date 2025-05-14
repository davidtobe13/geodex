import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  // State to track which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);
  
  // FAQ data
  const faqItems = [
    {
      question: "How quickly can we start working together?",
      answer: "Once we've had an initial consultation, we can typically have your account set up within 48 hours. Implementation of your first campaign depends on the complexity, but usually takes 1-2 weeks."
    },
    {
      question: "Do you work with agencies or direct clients?",
      answer: "Both! We partner directly with brands and work alongside agencies as a specialized technology partner for their outdoor media clients."
    },
    {
      question: "What types of outdoor media can you measure?",
      answer: "Our platform works with billboards, transit, street furniture, point-of-sale displays, and any other physical advertising medium. We've developed specialized metrics for each format."
    },
    {
      question: "Is there a minimum campaign budget to work with Geodex?",
      answer: "We offer tiered solutions to accommodate various budget levels. Our entry package is designed for campaigns with at least $50,000 in media spend, while our enterprise solutions support multi-million dollar national campaigns."
    }
  ];
  
  // Toggle function for opening/closing FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-700 font-bold mb-2">FREQUENTLY ASKED QUESTIONS</h2>
          <h3 className="text-orange-500 text-lg">Quick Answers</h3>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question (always visible) */}
              <button
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 text-left transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h4 className="text-xl font-semibold text-gray-700">{item.question}</h4>
                <span className="ml-4 flex-shrink-0 text-gray-500">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>
              
              {/* Answer (visible only when expanded) */}
              <div 
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-5 text-gray-500">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;