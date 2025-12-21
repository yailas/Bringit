import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeaturedRequests from '../components/FeaturedRequests';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <HowItWorks />
        <FeaturedRequests />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
