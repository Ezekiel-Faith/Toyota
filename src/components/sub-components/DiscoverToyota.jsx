import React, { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import DiscoverCard from './DiscoverCard';
import {
  discovers,
  featuredTab,
  offersTab,
  vehiclesTab,
} from '@/data/discovery';

export default function DiscoverToyota() {
  const [activeTab, setActiveTab] = useState('Featured stories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tabItems = [
    'Featured stories',
    'Vehicles & Technology',
    'Offers & Services',
  ];

  let filteredData = [];

  switch (activeTab) {
    case 'Featured stories':
      filteredData = featuredTab;
      break;
    case 'Vehicles & Technology':
      filteredData = vehiclesTab;
      break;
    case 'Offers & Services':
      filteredData = offersTab;
      break;
    default:
      filteredData = [];
  }
  return (
    <div className='pt-5'>
      <h2 className='sm:mt-1 md:my-8 lg:my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800'>
        Discover Toyota
      </h2>
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
              <div className='absolute bottom-[-1px] left-1/2 -translate-x-1/2 h-0.5 w-full bg-gray-900'></div>
            )}
          </div>
        ))}
      </div>
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
      <DiscoverCard activeTab={activeTab} discovers={discovers} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 md:px-8 xl:px-16 pt-4 text-white'>
        {filteredData.map((item, index) => (
          <div key={index} className='bg-white p-6 rounded-md shadow-md'>
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-48 object-cover rounded-md mb-4'
            />
            <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
            <p className='text-gray-600 mb-4'>{item.description}</p>
            <button className='text-blue-500 hover:underline'>
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
