import Carousel from '@/components/sub-components/Carousel';
import ShoppingTools from '@/components/sub-components/ShoppingTools';
import VehicleShowcase from '@/components/sub-components/VehicleShowCase';
import React from 'react';

function Home() {
  return (
    <>
      <Carousel />
      <VehicleShowcase />
      <ShoppingTools />
    </>
  );
}

export default Home;
