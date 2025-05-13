// import React, { useRef, useState, useMemo } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import DiscoverCard from './DiscoverCard';
import {
  discovers,
  featuredTab,
  offersTab,
  vehiclesTab,
} from '@/data/discovery';
import { useMemo, useRef, useState } from 'react';

export default function DiscoverToyota() {
  const [activeTab, setActiveTab] = useState('Featured stories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tabItems = [
    'Featured stories',
    'Vehicles & Technology',
    'Offers & Services',
  ];

  // Memoize filtered data based on the activeTab
  const filteredData = useMemo(() => {
    const tabData = {
      'Featured stories': featuredTab,
      'Vehicles & Technology': vehiclesTab,
      'Offers & Services': offersTab,
    };
    return tabData[activeTab] || [];
  }, [activeTab]);

  // Helper function for tab button classes
  const getTabButtonClasses = (tab) => {
    return `px-4 py-2 mx-2 font-semibold text-sm cursor-pointer ${
      activeTab === tab ? 'text-gray-900' : 'text-gray-600 hover:text-gray-800'
    }`;
  };

  return (
    <div className='pt-5'>
      <h2 className='sm:mt-1 md:my-8 lg:my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800'>
        Discover Toyota
      </h2>

      {/* Tab Navigation for Desktop */}
      <div className='hidden md:flex justify-center mb-6'>
        {tabItems.map((tab) => (
          <div key={tab} className='relative border-b-2 border-gray-400'>
            <button
              className={getTabButtonClasses(tab)}
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

      {/* Dropdown for Mobile */}
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

      {/* Discover Card Component */}
      <DiscoverCard activeTab={activeTab} discovers={discovers} />

      {/* Display filtered data */}
      <div
        className='grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 lg:gap-10
        px-5 md:px-8 xl:px-16 pt-5 text-white'
      >
        {filteredData.map((item, index) => (
          <div
            key={index}
            className='group relative rounded-md overflow-hidden min-h-[30rem] md:min-h-[22rem] lg:min-h-[30rem] xl:min-h-[35rem] flex items-end p-4 hover:cursor-pointer'
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className='absolute inset-0 z-10'>
              <div className='absolute w-full h-full bottom-0 bg-gradient-to-t from-black opacity-100'></div>
            </div>

            {/* Content */}
            <div className='relative z-10 transition-all duration-500 ease-in-out'>
              <h4 className='text-sm uppercase tracking-wide mb-2'>
                {item.category}
              </h4>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-200 mb-4 opacity-0 max-h-0 translate-y-4 group-hover:translate-y-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out'>
                {item.description}
              </p>
              <button className='group/button flex items-center justify-center bg-white text-black text-sm mt-6 px-7 py-2.5 rounded-full capitalize font-bold cursor-pointer hover:bg-gray-300'>
                <span className='transition-transform duration-300 ease-in-out group-hover/button:-translate-x-1'>
                  {item.action}
                </span>
                <FaChevronRight
                  size={10}
                  className='ml-1 text-3xl transition-opacity duration-300 ease-in-out opacity-0 group-hover/button:opacity-100'
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
