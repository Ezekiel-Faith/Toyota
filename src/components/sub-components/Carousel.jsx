import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { vehicles } from '@/data/vehicles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Arrows({ onClick, directions }) {
  const isLeft = directions === 'left';
  const positionClass = isLeft ? 'left-24 mr-4' : 'right-24 ml-4';
  const Icon = isLeft ? FaChevronLeft : FaChevronRight;

  return (
    <div
      onClick={onClick}
      className={`hidden lg:block absolute top-1/2 -translate-y-1/8 bg-black text-white z-10 rounded-full p-5 cursor-pointer hover:bg-gray-500 transition duration-200 ${positionClass}`}
    >
      <Icon size={15} />
    </div>
  );
}

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    prevArrow: <Arrows directions='left' />,
    nextArrow: <Arrows directions='right' />,
  };

  const goToSlide = (index) => {
    sliderRef.current?.slickGoTo(index);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fill {
        from { width: 0%; }
        to { width: 100%; }
      }
      .animate-fill {
        animation: fill 5s linear forwards;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style); // Clean up
  }, []);

  return (
    <div className='relative'>
      <Slider ref={sliderRef} {...settings}>
        {vehicles.map((car, index) => (
          <div key={index} className='relative'>
            {/* Mobile Text */}
            <div className='hidden max-md:block absolute w-full text-white z-20 text-center'>
              <h2 className='text-3xl md:text-4xl lg:text-7xl font-semibold mb-2 md:mb-4'>
                {car.name}
              </h2>
              <p className='text-md lg:text-2xl'>{car.description}</p>
            </div>

            {/* Gradient Overlays */}
            <div className='absolute inset-0 z-10 pointer-events-none'>
              <div className='w-full h-1/8 bg-gradient-to-b from-black opacity-100'></div>
              <div className='absolute top-[86%] w-full h-1/8 bg-gradient-to-t from-black opacity-100'></div>
            </div>

            {/* Media Content */}
            {car.type === 'video' ? (
              <video
                src={car.img}
                className='w-full h-[64vh] lg:h-[80vh] object-cover z-0'
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={car.img}
                alt={car.name}
                className='w-full h-[64vh] lg:h-[80vh] object-cover z-0'
              />
            )}

            {/* Desktop Text + Optional Button */}
            <div className='absolute bottom-0 w-full text-white p-6 z-20'>
              <div className='max-md:hidden text-center'>
                <h2 className='text-3xl md:text-4xl lg:text-7xl font-semibold mb-2 md:mb-4'>
                  {car.name}
                </h2>
                <p className='text-md lg:text-2xl'>{car.description}</p>
              </div>

              {car.more && (
                <div className='text-center mt-10 lg:mt-20 lg:mb-2'>
                  <button className='mx-auto group flex items-center justify-center bg-white text-black px-8 py-3 max-md:px-15 rounded-full capitalize font-semibold text-sm cursor-pointer transition duration-300 hover:bg-gray-300'>
                    <span className='transition-transform duration-300 group-hover:-translate-x-1'>
                      {car.more}
                    </span>
                    <FaChevronRight
                      size={10}
                      className='ml-1 text-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100'
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>

      {/* Progress Bars */}
      <div className='absolute bottom-1.5 left-0 w-full z-20 flex h-[12px] gap-x-[2px] sm:gap-x-[4px] md:gap-x-[6px] lg:gap-x-[8px]'>
        {vehicles.map((_, idx) => (
          <div
            key={idx}
            className='flex-1 bg-gray-300 overflow-hidden cursor-pointer'
            onClick={() => goToSlide(idx)}
          >
            <div
              className={`h-full bg-black transition-all duration-[5000ms] ease-linear ${
                idx === currentSlide ? 'w-full animate-fill' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
