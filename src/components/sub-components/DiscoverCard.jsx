import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function DiscoverCard({ activeTab, discovers }) {
  const activeData = discovers.find(
    (item) => item.category.toLowerCase() === activeTab.toLowerCase()
  );

  const colors = ['#3e3a3b', '#363949', '#2c3e50'];

  const backgroundColor = activeData
    ? colors[activeData.id % colors.length]
    : '';

  if (!activeData) return null; // Handle missing data

  return (
    <div className='px-5 md:px-8 xl:px-16 pt-4 text-white'>
      <div
        className='flex flex-col md:flex-row items-center justify-between rounded-md'
        style={{ backgroundColor }}
      >
        <div className='w-full md:w-1/2'>
          <img
            src={activeData.image}
            alt={activeData.title}
            className='w-full object-cover md:rounded-tl-md md:rounded-bl-md md:h-[50vh] sm:rounded-tl-md sm:rounded-tr-md hover:cursor-pointer'
          />
        </div>
        <div className='w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 p-6'>
          <h4 className='text-sm uppercase tracking-wide mb-2'>
            {activeData.category}
          </h4>
          <h2 className='md:text-lg sm:text-base lg:text-[1.8rem] font-semibold mb-5'>
            {activeData.title}
          </h2>
          <p className='lg:text-base md:text-sm sm:text-sm mb-5'>
            {activeData.description}
          </p>
          <button className='group flex items-center justify-center bg-white text-black text-sm mt-6 px-7 py-2.5 rounded-full capitalize font-bold cursor-pointer hover:bg-gray-300'>
            <span className='transition-transform duration-300 group-hover:-translate-x-1'>
              {activeData.action}
            </span>
            <FaChevronRight
              size={10}
              className='ml-1 text-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
