import Carousel from '@/components/sub-components/Carousel';
import DiscoverToyota from '@/components/sub-components/DiscoverToyota';
import ShoppingTools from '@/components/sub-components/ShoppingTools';
import VehicleShowcase from '@/components/sub-components/VehicleShowCase';
import React from 'react';

function Home() {
  return (
    <>
      <Carousel />
      <VehicleShowcase />
      <ShoppingTools />
      <DiscoverToyota />
    </>
  );
}

export default Home;
