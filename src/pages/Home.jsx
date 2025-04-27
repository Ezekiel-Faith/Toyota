import React from 'react';
import Slider from 'react-slick';
import { vehicles } from '@/data/vehicles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Arrows({ onClick, directions }) {
  const isLeft = directions === 'left';
  const sidePositionClass = isLeft ? 'left-24' : 'right-24';

  const marginLeftClass = isLeft ? '' : 'ml-4';
  const marginRightClass = isLeft ? 'mr-4' : '';

  return (
    <div
      onClick={onClick}
      className={`hidden lg:block absolute top-1/2 -translate-y-1/8 bg-black text-white z-10 rounded-full p-5 cursor-pointer hover:bg-gray-500 transition duration-200 ${sidePositionClass} ${marginLeftClass} ${marginRightClass}`}
    >
      {isLeft ? <FaChevronLeft size={15} /> : <FaChevronRight size={15} />}
    </div>
  );
}

function VehicleCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <Arrows directions='left' />,
    nextArrow: <Arrows directions='right' />,
  };

  return (
    <div className=' '>
      <Slider {...settings}>
        {vehicles.map((car, index) => (
          <div key={index} className='relative'>
            <div className='hidden max-md:block absolute w-full text-white  '>
              <div className=' text-center'>
                <h2 className='text-3xl md:text-4xl lg:text-7xl font-semibold mb-2 md:mb-4'>
                  {car.name}
                </h2>
                <p className='text-md lg:text-2xl'>{car.description}</p>
              </div>
            </div>

            {car.type === 'video' ? (
              <video
                src={car.img}
                alt={car.name}
                className='w-full h-[64vh] lg:h-[80vh] object-cover'
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={car.img}
                alt={car.name}
                className='w-full h-[64vh] lg:h-[80vh] object-cover'
              />
            )}
            <div className='absolute bottom-0 w-full text-white p-6'>
              <div className='bock max-md:hidden  text-center'>
                <h2 className='text-3xl md:text-4xl lg:text-7xl font-semibold mb-2 md:mb-4'>
                  {car.name}
                </h2>
                <p className='text-md lg:text-2xl'>{car.description}</p>
              </div>

              {car.more && (
                <div className='text-center mt-10 lg:mt-20 lg:mb-2'>
                  <button className='bg-white text-black px-6 py-2 max-md:px-15 rounded-full capitalize font-semibold text-sm'>
                    {car.more}
                  </button>
                </div>
              )}
            </div>

            {/* <div className='absolute bottom-0 left-0 w-full text-white p-6 bg-gradient-to-t from-black/70 to-transparent'>
              <div className='text-center'>
                <h2 className='text-3xl md:text-4xl lg:text-7xl font-semibold mb-4 lg:mb-6'>
                  {car.name}
                </h2>
                <p className='text-md lg:text-2xl'>{car.description}</p>
                {car.more && (
                  <button className='mt-10 lg:mt-20 bg-white text-black px-6 py-2 rounded-full capitalize font-semibold text-sm lg:mb-2'>
                    {car.more}
                  </button>
                )}
              </div>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default function Home() {
  return <VehicleCarousel />;
}
