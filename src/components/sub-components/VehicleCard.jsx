import { FaChevronRight } from 'react-icons/fa';

export default function VehicleCard({ vehicle, bgColor }) {
  return (
    <div
      className='relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[600px] rounded-lg overflow-hidden'
      style={{ backgroundColor: bgColor }}
    >
      <div className='flex flex-col lg:flex-row'>
        <div className='relative w-full lg:w-[330px] max-lg:h-[350px] lg:h-[340px]'>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className='w-full h-full object-cover'
          />

          {vehicle.badge && (
            <span className='absolute top-3 left-3 bg-black text-white py-1 px-3 text-xs rounded-md z-20'>
              {vehicle.badge}
            </span>
          )}
          <div className='absolute bottom-0 text-white text-xs py-1 px-3 z-20'>
            As shown: ${vehicle.amount}* {vehicle.mpg} Est. MPG*
          </div>
          <div className='absolute inset-0 z-10 pointer-events-none'>
            <div className='absolute w-full h-1/8 bottom-0 bg-gradient-to-t from-black opacity-100'></div>
          </div>
        </div>

        <div className='p-7 text-white flex flex-col justify-between flex-1'>
          <div>
            {vehicle.year && <h4 className='text-sm mb-4'>{vehicle.year}</h4>}
            <h3 className='text-2xl font-bold mb-2'>{vehicle.name}</h3>
            <p className='text-base'>{vehicle.description}</p>
          </div>

          <div>
            <div className='flex items-center text-[1.3rem] space-x-5 mt-4'>
              <div className='flex flex-col items-start'>
                <p>{vehicle.amount}</p>
                {vehicle.text && <p className='text-xs mt-1'>{vehicle.text}</p>}
              </div>
              <div className='flex flex-col items-start'>
                {vehicle.mpg && <p>{vehicle.mpg}</p>}
                {vehicle.max && <p className='text-xs mt-1'>{vehicle.max}</p>}
              </div>
            </div>

            <div className='flex items-center space-x-5 mt-4'>
              <a
                href={vehicle.exploreLink}
                className='bg-white text-black text-sm font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors flex items-center group overflow-hidden'
              >
                <span className='transition-transform duration-300 ease-in-out group-hover:-translate-x-1'>
                  Explore
                </span>
                <FaChevronRight
                  size={10}
                  className='opacity-0 translate-x-[-0.25rem] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out'
                />
              </a>
              <a
                href={vehicle.buildLink}
                className='text-sm font-semibold flex items-center group'
              >
                <span className='transition-transform duration-300 ease-in-out group-hover:-translate-x-1'>
                  Build
                </span>
                <FaChevronRight
                  size={12}
                  className='ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1'
                />
              </a>
            </div>

            {vehicle.asShownInfo && (
              <p className='text-xs text-gray-500 mt-2'>
                {vehicle.asShownInfo}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
