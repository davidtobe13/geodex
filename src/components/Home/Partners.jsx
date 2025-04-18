// components/Partners.js
import React from 'react';
import Partner1 from '../../assets/partner1.png';
import Partner2 from '../../assets/partner2.png';
import Partner3 from '../../assets/partner3.png';
import Partner4 from '../../assets/partner4.png';
import Partner5 from '../../assets/partner5.png';

const Partners = () => {
  const partners = [
    { id: 1, image: Partner1, alt: "Partner 1" },
    { id: 2, image: Partner2, alt: "Partner 2" },
    { id: 3, image: Partner3, alt: "Partner 3" },
    { id: 4, image: Partner4, alt: "Partner 4" },
    { id: 5, image: Partner5, alt: "Partner 5" }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map(partner => (
            <div key={partner.id} className="flex items-center justify-center">
              <img 
                src={partner.image} 
                alt={partner.alt} 
                className="h-8 md:h-12"
                onError={(e) => {
                  e.target.src = "/api/placeholder/120/60";
                  e.target.alt = "Partner logo placeholder";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;