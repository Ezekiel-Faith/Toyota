import React from 'react';
import {
  BuildingLibraryIcon,
  MagnifyingGlassIcon,
  TagIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { FaChevronRight } from 'react-icons/fa';

const tools = [
  { name: 'Build & Price', Icon: BuildingLibraryIcon },
  { name: 'Search Inventory', Icon: MagnifyingGlassIcon },
  { name: 'Special Offers', Icon: TagIcon },
  { name: 'Find a Dealer', Icon: MapPinIcon },
];

export default function ShoppingTools() {
  return (
    <section className='pt-10'>
      <div className='text-black'>
        <div className='flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-13 text-sm font-bold mb-22 sm:mb-27 md:mb-28 lg:mb-[8rem] xl:mb-[11rem]'>
          <button className='group flex items-center justify-center rounded-full border border-black px-6 py-2 hover:cursor-pointer'>
            <span className='transition-transform duration-300 group-hover:-translate-x-1'>
              Explore All Vehicles
            </span>
            <FaChevronRight
              size={10}
              className='ml-1 text-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100'
            />
          </button>
          <button className='group flex items-center justify-center hover:cursor-pointer'>
            <span className='transition-transform duration-300 group-hover:-translate-x-1'>
              Search Inventory
            </span>
            <FaChevronRight size={12} className='ml-1 text-3xl' />
          </button>
        </div>

        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center mb-15'>
          Shopping Tools
        </h2>

        <div className='grid grid-cols-2 [@media(min-width:600px)]:grid-cols-4 mx-5 md:mx-10 lg:mx-20 bg-gray-50 mb-10 rounded-sm items-stretch min-h-[200px]'>
          {tools.map(({ name, Icon }, idx) => {
            const borderClass = (() => {
              if (idx === 0) return 'border-r border-b';
              if (idx === 1) return 'border-l border-b';
              if (idx === 2) return 'border-r border-t';
              if (idx === 3) return 'border-l border-t';
              return '';
            })();

            return (
              <div
                key={name}
                className={`flex flex-col justify-center items-center h-full border-gray-300 ${borderClass} [@media(min-width:600px)]:border-none py-10`}
              >
                <div className='group flex flex-col items-center'>
                  <div className='relative w-11 h-11 mb-3 flex items-center justify-center'>
                    <div className='absolute top-4 right-[45%] w-2 h-2 bg-red-600 rounded-full' />
                    <Icon className='group-hover:cursor-pointer' />
                  </div>
                  <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer font-bold text-center border-b-2 border-transparent transition-all duration-300 group-hover:border-black'>
                    {name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <HeroBanner />
    </section>
  );
}

function HeroBanner() {
  return (
    <section className='relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[95vh] overflow-hidden mb-50'>
      {/* Background Image */}
      <img
        src='https://toyotacanada.scene7.com/is/image/toyotacanada/toyota-electrification-electric-vehicle-line-up-l?fit=constrain&wid=2200&qlt=90'
        alt='Toyota EV Lineup'
        className='absolute inset-0 w-full h-full object-cover object-center md:object-top'
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10' />
      {/* Centered Content */}
      <div className='relative z-20 flex flex-col items-center justify-start pt-16 sm:pt-20 h-full text-white text-center px-4'>
        {/* Toyota Logo - responsive width */}
        <img
          src='https://www.toyota.com/content/dam/toyota/homepage/fullbleed/horizontalbzlogo_beyond-zero.svg'
          alt='Toyota Logo'
          className='w-40 sm:w-48 md:w-56 lg:w-72'
        />
        {/* Heading - responsive text size */}
        <h1 className='mt-4 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl'>
          Drive change your way.
        </h1>
        {/* Button - responsive padding and text size */}
        <button className='group flex items-center justify-center border text-sm mt-6 px-7 py-2.5 bg-white text-black font-bold rounded-full hover:cursor-pointer'>
          <span className='transition-transform duration-300 group-hover:-translate-x-1'>
            Explore Beyond Zero
          </span>
          <FaChevronRight
            size={10}
            className='ml-1 text-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100'
          />
        </button>
        {/* Info button added here */}
        <div className='absolute bottom-4 right-3'>
          <button className='bg-black text-white text-[0.7rem] px-2.5 border  py-0.5 rounded-full shadow-lg hover:cursor-pointer'>
            Info
          </button>
        </div>
        {/* End of Info button */}
      </div>
    </section>
  );
}
