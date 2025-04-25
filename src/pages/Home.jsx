import React from 'react';
import Slider from 'react-slick';
import { vehicles } from '@/data/vehicles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Arrows({ onClick, directions }) {
  const isLeft = directions === 'left';

  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        [isLeft ? 'left' : 'right']: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        zIndex: 10,
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      {isLeft ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
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
            {car.type === 'video' ? (
              <video
                src={car.img}
                alt={car.name}
                className='w-full object-cover'
                style={{ maxHeight: '796px', objectFit: 'cover' }}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={car.img}
                alt={car.name}
                className='w-full object-cover'
                style={{ maxHeight: '796px', objectFit: 'cover' }}
              />
            )}
            <div
              className='absolute bottom-0 left-1/2 text-white p-6 w-full'
              style={{
                transform: 'translateX(-50%)',
                display: 'inline-block',
                textAlign: 'center',
              }}
            >
              <h2 className='text-7xl font-semibold mb-8'>{car.name}</h2>
              <p className='text-2xl'>{car.description}</p>
              {car.more && (
                <button className='mt-20 bg-white text-black px-6 py-2 rounded-4xl capitalize font-semibold text-sm'>
                  {car.more}
                </button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default function Home() {
  return <VehicleCarousel />;
}
