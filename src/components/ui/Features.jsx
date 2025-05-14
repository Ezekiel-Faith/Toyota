import React from 'react';

export const Features = () => {
  return (
    <div className='text-white grid grid-cols-1 md:grid-cols-2'>
      {/* Image 1 - Full Width */}
      <div
        className='relative h-[300px] sm:h-[400px] md:h-[500px] w-full col-span-1 md:col-span-2 flex items-center'
        style={{
          backgroundImage:
            "linear-gradient(to right, white 20%, transparent 50%), url('https://goarid.com/wp-content/uploads/2024/03/MLB-gallery-4.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='max-w-[90%] sm:max-w-[80%] md:max-w-[60%] space-y-4 sm:space-y-6 px-4 sm:px-8 md:px-60'>
          <h1 className='text-sm sm:text-md font-bold text-gray-900'>
            Newsletter and Email Alerts
          </h1>
          <p className='text-xl sm:text-2xl md:text-4xl text-gray-900 font-bold'>
            Click the button below to sign up for email alerts that you'd like
            to receive a notification on
          </p>
          <button className='bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-1 transition duration-300 text-sm sm:text-base'>
            SIGN UP
          </button>
        </div>
      </div>

      {/* Image 2 */}
      <div
        className='relative h-[250px] sm:h-[350px] md:h-[400px] bg-cover bg-center flex items-end p-4 sm:p-6'
        style={{
          backgroundImage:
            "url('https://pbs.twimg.com/media/E-q-vmJXoAAExLl.jpg:large')",
        }}
      >
        <div className='bg-black/60 p-3 sm:p-4 max-w-[100%] sm:max-w-[90%]'>
          <h1 className='text-lg sm:text-xl font-bold mb-1 sm:mb-2'>
            Images & Videos
          </h1>
          <p className='mb-2 sm:mb-4 text-sm sm:text-base'>
            Explore images and videos of the current lineup of Toyota vehicles.
          </p>
          <button className='bg-red-500 px-2 sm:px-3 py-1 hover:bg-red-600 text-sm sm:text-base'>
            VIEW ALL IMAGES & VIDEOS
          </button>
        </div>
      </div>

      {/* Image 3 */}
      <div
        className='relative h-[250px] sm:h-[350px] md:h-[400px] bg-cover bg-center flex items-end p-4 sm:p-6'
        style={{
          backgroundImage:
            "url('https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/Toyota_2026_bZ_0002_00096a.jpg?quality=90&strip=all&crop=0%2C5.0202741842054%2C100%2C89.959451631589&w=2400')",
        }}
      >
        <div className='bg-black/60 p-3 sm:p-4 max-w-[100%] sm:max-w-[90%]'>
          <h1 className='text-lg sm:text-xl font-bold mb-1 sm:mb-2'>
            Press Kits
          </h1>
          <p className='mb-2 sm:mb-4 text-sm sm:text-base'>
            Explore press kit information for the current lineup of Toyota
            vehicles.
          </p>
          <button className='bg-red-500 px-2 sm:px-3 py-1 hover:bg-red-600 text-sm sm:text-base'>
            VIEW ALL PRESS KITS
          </button>
        </div>
      </div>
    </div>
  );
};
