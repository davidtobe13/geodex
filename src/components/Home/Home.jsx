// Home.js - Main Component Structure
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Stats from './Stats';
import Features from './Features';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Adverts from './Adverts';
import Partners from './Partners';
import CTA from './Cta';
import Footer from './Footer';

function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
      <Adverts />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;