import React, { useState, useEffect, useRef } from 'react';
import { ViewMobility } from '../components/ui/ViewMobility';
import { Features } from '../components/ui/Features';

const NewsRoom = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const slides = [
    {
      title: 'PRODUCT',
      description:
        'Toyota bZ All Electric SUV Adds Range, Charging, and Exterior Updates for 2026',
      img: 'https://www.shutterstock.com/image-illustration/almaty-kazakhstan-november-5-2019-600nw-1554024083.jpg',
      linkText: 'Read More',
      rightContent: {
        number: '01 / 03',
        heading: 'NEXT',
        info: 'Akio Toyoda Receives the Industry Leadership Award From the Society of Automotive Engineers',
      },
    },
    {
      title: 'PRODUCT',
      description: 'The Countdown to the Next Adventure Begins',
      img: 'https://media.adtorqueedge.com/new-cars/toyota-au/gr-86/header-t.jpg',
      linkText: 'Read More',
      rightContent: {
        number: '02 / 03',
        heading: 'NEXT',
        info: 'Akio Toyoda Receives the Industry Leadership Award From the Society of Automotive Engineers',
      },
    },
    {
      title: 'NEWS',
      description:
        'Akio Toyoda Receives the Industry Leadership Award From the Society of Automotive Engineers',
      img: 'https://wallpapers.com/images/hd/matte-black-toyota-sports-car-xu1m4wxt38miv12b.jpg',
      linkText: 'Read More',
      rightContent: {
        number: '03 / 03',
        heading: 'NEXT',
        info: 'Toyota bZ All Electric SUV Adds Range, Charging, and Exterior Updates for 2026',
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleUserInteraction = (callback) => {
    callback();
    stopAutoSlide();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 10000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div>
      {/* SLIDER */}
      <div className='relative w-full h-[600px] overflow-hidden'>
        <div
          className='flex h-full transition-transform duration-700 ease-in-out'
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className='w-full h-full relative flex-shrink-0'>
              <img
                src={slide.img}
                alt={slide.title}
                className='w-full h-full object-cover brightness-75'
              />
              <div className='absolute inset-0 bg-black/30' />

              <div className='absolute top-0 left-0 px-10 py-5 w-96 sm:my-15 sm:mx-10 sm:w-1/3 md:my-20 md:mx-28 md:w-1/4 lg:w-1/6 lg:mx-28 lg:my-32 flex flex-col justify-start items-start text-white'>
                <h1 className='text-xs sm:text-xs px-2 py-1 bg-red-500 font-bold mb-4'>
                  {slide.title}
                </h1>
                <div className='hover:text-red-500 mt-5'>
                  <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-6'>
                    {slide.description}
                  </p>
                  <a
                    href='#'
                    className='text-sm sm:text-base font-serif underline hover:text-red-500'
                  >
                    {slide.linkText} <span>❯</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT CONTROL PANEL */}
        <div className='absolute bottom-4 right-4 sm:bottom-8 sm:right-10 lg:right-40 text-black z-10 w-11/12 sm:w-80'>
          <div className='bg-neutral-300 py-3 px-4 backdrop-blur-sm'>
            <div className='flex gap-2 justify-end mb-5'>
              <button
                onClick={() => handleUserInteraction(prevSlide)}
                className='px-3 text-sm py-1 text-white bg-red-500 rounded-4xl'
              >
                ❮
              </button>
              <div className='text-sm text-center'>
                {slides[currentSlide].rightContent.number}
              </div>
              <button
                onClick={() => handleUserInteraction(nextSlide)}
                className='px-3 py-1 text-white bg-red-500 rounded-4xl'
              >
                ❯
              </button>
            </div>
            <h2 className='text-sm mb-4 font-bold text-red-500 text-start'>
              {slides[currentSlide].rightContent.heading}
            </h2>
            <div className='text-xs sm:text-sm mb-3 text-start'>
              {slides[currentSlide].rightContent.info}
            </div>
          </div>
        </div>
      </div>

      {/* ANNOUNCEMENT BAR */}
      <div className='bg-black w-full text-center text-sm text-white p-4'>
        <a href='#'>
          SPECIAL ANNOUNCEMENT: Have you signed up for our monthly newsletter?
          Learn more about Newsroom Connection.
        </a>
      </div>

      <ViewMobility />
      <Features />
    </div>
  );
};

export default NewsRoom;
