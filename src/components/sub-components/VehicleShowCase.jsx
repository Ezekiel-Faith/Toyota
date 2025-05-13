import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import VehicleCard from './VehicleCard';
import CardCarousel from './CardCarousel';

import {
  carsAndMinivan,
  trucks,
  crossoverAndSuv,
  electrified,
  upcomingVehicles,
} from '@/data/vehicles';

export default function VehicleShowcase() {
  const [activeTab, setActiveTab] = useState('Crossovers & SUVs');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const tabItems = [
    'Cars & Minivan',
    'Trucks',
    'Crossovers & SUVs',
    'Electrified',
    'Upcoming Vehicles',
  ];

  const vehicleColors = [
    '#3c2c2a',
    '#394344',
    '#2b5b59',
    '#a6afaf',
    '#5d4e41',
    '#2b5b59',
    '#2b5b59',
    '#43512f',
    '#676770',
    '#25363b',
    '#5f4836',
    '#302c2c',
    '#302c2c',
    '#293237',
    '#921630',
    '#223337',
    '#5f4836',
    '#658280',
    '#325a72',
  ];

  const vehiclesMap = {
    'Cars & Minivan': carsAndMinivan,
    Trucks: trucks,
    'Crossovers & SUVs': crossoverAndSuv,
    Electrified: electrified,
    'Upcoming Vehicles': upcomingVehicles,
  };

  const filteredVehicles = vehiclesMap[activeTab] || [];

  return (
    <div className='pt-12'>
      <h2 className='sm:mt-1 md:my-8 lg:my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800'>
        Explore All Vehicles
      </h2>

      {/* Tab Navigation - visible on md and up */}
      <div className='hidden md:flex justify-center mb-6'>
        {tabItems.map((tab) => (
          <div key={tab} className='relative border-b-2 border-gray-400'>
            <button
              className={`px-4 py-2 mx-2 font-semibold text-sm cursor-pointer ${
                activeTab === tab
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
            {activeTab === tab && (
              <div className='absolute -bottom-0.5 left-0 w-full h-0.5 bg-gray-900'></div>
            )}
          </div>
        ))}
      </div>

      {/* Dropdown Menu - visible below md */}
      <div className='mt-6 md:hidden flex justify-center mb-6 font-semibold text-black'>
        <div ref={dropdownRef} className='relative'>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className='w-full bg-white border border-black py-3 px-5 rounded-md text-sm leading-tight text-left cursor-pointer focus:outline-none flex justify-start items-center gap-3'
          >
            {activeTab}
            <FaChevronDown
              size={16}
              className={`text-gray-600 transform transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>

          {isDropdownOpen && (
            <ul className='absolute z-10 mt-1 w-full bg-white border border-white rounded-md shadow-lg'>
              {tabItems.map((tab, index) => (
                <li
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsDropdownOpen(false);
                  }}
                  className={`px-4 py-[9px] text-sm cursor-pointer hover:bg-black hover:text-white ${
                    activeTab === tab ? 'bg-black text-white' : ''
                  } ${index === 0 ? 'rounded-t-md' : ''} ${
                    index === tabItems.length - 1 ? 'rounded-b-md' : ''
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <CardCarousel totalCount={filteredVehicles.length}>
        {filteredVehicles.map((vehicle) => (
          <div key={`vehicle-${vehicle.id}`} className='flex-shrink-0'>
            <VehicleCard
              vehicle={vehicle}
              bgColor={vehicleColors[vehicle.id]}
            />
          </div>
        ))}
      </CardCarousel>
    </div>
  );
}
