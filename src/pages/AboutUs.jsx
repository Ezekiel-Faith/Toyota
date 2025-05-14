import Car from '@/about/Car';
import Header from '@/about/Header';
import HeroSection from '@/about/HeroSection';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <HeroSection />
      <Car />
    </div>
  );
};

export default AboutUs;
