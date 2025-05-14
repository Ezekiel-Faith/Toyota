import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/toyota-logo.png';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import privacyIcon from '../assets/images/privacyIcon.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const shop = [
  'Trade-In Value',
  'Build Your Toyota',
  'Search Inventory',
  'Find a Dealer',
  'Shop Online With SmartPath',
  'Special Offers',
  'What Fits My Budget',
  'Payment Estimator',
  'Request a Quote',
  'Toyota Certified Used Vehicles',
  'Buy Parts & Accessories',
];

const vehicle = [
  'All Toyota Vehicles',
  'SUVs',
  'Trucks',
  'Cars',
  'Crossovers',
  'Electrified Vehicles',
  'Hybrids',
  'Hybrid Cars',
  'Hybrid SUVs',
  'TRD Pro Series',
  'Nightshade Series',
];

const help = [
  'Dealers',
  'Deals and Incentives',
  'Audio Multimedia & Connected Services',
  'Mobile Phone Compatibility',
  'Mobility',
  'Toyota Fleet',
  'Toyota Financial Services',
  'Southeast Toyota Finance',
  'Toyota Insurance',
];

const owner = [
  'Owners Home',
  'Toyota Care & Maintenance Plans',
  'Safety Recalls & Service Campaigns',
  'Service Centers',
  'Service Specials',
  'Safety Hubs',
  'Schedule Service',
  'Warning Lights',
  'Manuals & Warranties',
  'Service Coupons Discounts',
  'Manage Payments',
  'Rent a Toyota',
];

const about = [
  'Careers',
  'About Us',
  'Our Company',
  'Toyota Outfitters',
  'Newsroom',
  'Toyota Worldwide',
  'Gazoo Racing',
  'Plant Tours',
  'Partner With Toyota',
];

const styles = {
  link: 'hover:inline-block mb-3 hover:border-b-[0.5px] hover:border-black hover:cursor-pointer hover:border-w',
  // hover:p-0
  about: 'mb-3 font-bold',
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className='bg-[#0000000b] py-[30px] '>
      <div className='md:flex sm:justify-center sm:items-center gap-8 font-bold m:py-12 flex-col 2xl:flex-row sm:mb-[30px]'>
        <div className='flex-col sm:flwx-row flex sm:justify-center sm:items-center gap-[10px] sm:p-0 p-[10px] 2xl:flex-row'>
          <p className='cursor-pointer font-medium hover:underline'>
            Accessibility
          </p>
          <p className='flex  font-medium text-[red] sm:justify-center items-center cursor-pointer hover:underline '>
            YOUR PRIVACY CHOICES{' '}
            <span>
              <img src={privacyIcon} width='40px' />
            </span>
          </p>
        </div>
        <div className=' flex flex-col sm:flex-row sm:justify-center sm:items-center gap-[10px] sm:p-0 p-[10px]'>
          <p className='font-medium cursor-pointer hover:underline'>
            DISCONNECT REMOTE VEHICLE ACCESS (NY RESIDENTS)
          </p>
          <p className='cursor-pointer font-medium hover:underline'>
            Cookies Consent Options
          </p>
        </div>
      </div>

      <div className='w-[100%] h-[200px] sm:h-[50px] flex flex-col sm:flex-row justify-center items-center gap-[40px] mb-[50px]'>
        <Button
          className='bg-red-700 text-white w-[90%] sm:w-[300px] py-[10px] rounded-4xl cursor-pointer'
          display='Manage Preferences'
        />
        <div className='w-300px flex gap-[40px] sm:gap-[20px]'>
          <a href='https://facebook.com'>
            <FontAwesomeIcon
              icon={faFacebook}
              className='text-black text-[17px] border-black border-2 p-2.5 rounded-full'
            />
          </a>
          <a href='https://youtube.com'>
            <FontAwesomeIcon
              icon={faYoutube}
              className='text-black text-[17px] border-black border-2 p-2.5 rounded-full'
            />
          </a>
          <a href='https://twitter.com'>
            <FontAwesomeIcon
              icon={faXTwitter}
              className='text-black text-[17px] border-black border-2 p-2.5 rounded-full'
            />
          </a>
          <a href='https://instagram.com'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='text-black text-[17px] border-black border-2 p-2.5 rounded-full'
            />
          </a>
          <a href='https://tiktok.com'>
            <FontAwesomeIcon
              icon={faTiktok}
              className='text-black text-[17px] border-black border-2 p-2.5 rounded-full'
            />
          </a>
        </div>
      </div>
      <footer className='hidden lg:block'>
        <div className='grid grid-cols-3 gap-12 md:flex justify-around items-start pb-24 border-b-1 mx-12 border-[#0000001e]'>
          <div>
            <h2 className={styles.about}>SHOPPING TOOLS</h2>
            <ul>
              {shop.map((item, i) => (
                <li className={styles.link} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.about}>VEHICLES</h2>
            <ul>
              {vehicle.map((item, i) => (
                <li className={styles.link} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.about}>HELPFUL LINKS</h2>
            <ul>
              {help.map((item, i) => (
                <li className={styles.link} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.about}>OWNERS</h2>
            <ul>
              {owner.map((item, i) => (
                <li className={styles.link} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.about}>ABOUT TOYOTA</h2>
            <ul>
              {about.map((item, i) => (
                <li className={styles.link} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <Accordion
        type='single'
        collapsible
        value={isOpen}
        onValueChange={setIsOpen}
        className='w-full border-0 block lg:hidden'
      >
        <AccordionItem value='item-1' className='px-[15px]'>
          <AccordionTrigger className='flex justify-between border-none text-de items-center font-bold text-sm cursor-pointer [&>svg]:hidden '>
            SHOPPING TOOLS
            <span className='ml-auto transition-all duration-300  ease-in-out scale-100 opacity-100'>
              <FontAwesomeIcon
                icon={isOpen === 'item-1' ? faMinus : faPlus}
                className='text-lg'
              />
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='pl-4 text-sm text-gray-600 flex flex-col gap-[10px]'>
              {shop.map((shopItems, index) => (
                <li key={index} className='hover:underline'>
                  <a href='#'>{shopItems}</a>
                </li>
              ))}
            </ul>
          </AccordionContent>
          <div className='w-[100%] h-[2px] bg-[#ededed]'></div>
        </AccordionItem>

        <AccordionItem value='item-2' className='px-[15px]'>
          <AccordionTrigger className='flex justify-between text-decoration-none items-center font-bold text-sm cursor-pointer [&>svg]:hidden '>
            VEHICLES
            <span className='ml-auto transition-all duration-300 ease-in-out scale-100 opacity-100'>
              <FontAwesomeIcon
                icon={isOpen === 'item-2' ? faMinus : faPlus}
                className='text-lg'
              />
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='pl-4 text-sm text-gray-600 flex flex-col gap-[10px]'>
              {vehicle.map((vehicleItems, index) => (
                <li key={index} className='hover:underline'>
                  <a href='#'>{vehicleItems}</a>
                </li>
              ))}
            </ul>
          </AccordionContent>
          <div className='w-[100%] h-[2px] bg-[#ededed]'></div>
        </AccordionItem>

        <AccordionItem value='item-3' className='px-[15px]'>
          <AccordionTrigger className='flex justify-between items-center font-bold text-sm cursor-pointer [&>svg]:hidden '>
            HELPFUL LINKS
            <span className='ml-auto transition-all duration-300 ease-in-out scale-100 opacity-100'>
              <FontAwesomeIcon
                icon={isOpen === 'item-3' ? faMinus : faPlus}
                className='text-lg'
              />
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='pl-4 text-sm text-gray-600 flex flex-col gap-[10px]'>
              {help.map((helpItems, index) => (
                <li key={index} className='hover:underline'>
                  <a href='#'>{helpItems}</a>
                </li>
              ))}
            </ul>
          </AccordionContent>
          <div className='w-[100%] h-[2px] bg-[#ededed]'></div>
        </AccordionItem>

        <AccordionItem value='item-4' className='px-[15px]'>
          <AccordionTrigger className='flex justify-between items-center font-bold text-sm cursor-pointer [&>svg]:hidden '>
            OWNERS
            <span className='ml-auto transition-all duration-300 ease-in-out scale-100 opacity-100'>
              <FontAwesomeIcon
                icon={isOpen === 'item-4' ? faMinus : faPlus}
                className='text-lg'
              />
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='pl-4 text-sm text-gray-600 flex flex-col gap-[10px]'>
              {owner.map((ownerItems, index) => (
                <li key={index} className='hover:underline'>
                  <a href='#'>{ownerItems}</a>
                </li>
              ))}
            </ul>
          </AccordionContent>
          <div className='w-[100%] h-[2px] bg-[#ededed]'></div>
        </AccordionItem>

        <AccordionItem value='item-5' className='px-[15px]'>
          <AccordionTrigger className='flex justify-between items-center font-bold text-sm cursor-pointer [&>svg]:hidden '>
            ABOUT TOYOTA
            <span className='ml-auto transition-all duration-300 ease-in-out scale-100 opacity-100'>
              <FontAwesomeIcon
                icon={isOpen === 'item-5' ? faMinus : faPlus}
                className='text-lg'
              />
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='pl-4 text-sm text-gray-600 flex flex-col gap-[10px]'>
              {about.map((aboutItems, index) => (
                <li key={index} className='hover:underline'>
                  <a href='#'>{aboutItems}</a>
                </li>
              ))}
            </ul>
          </AccordionContent>
          <div className='w-[100%] h-[2px] bg-[#ededed]'></div>
        </AccordionItem>
      </Accordion>
      <div className='flex flex-col space-y-8 mt-10 pb-20 sm:items-center p-[10px] '>
        <div className='w-[200px] h-[70px] flex justify-center items-center'>
          <img src={logo} alt='' className='object-cover w-[300px] mr-[85px]' />
        </div>
        <div className='flex space-x-3 font-bold'>
          <a
            className='hover:border-b-[0.5px] hover:border-black hover:cursor-pointer'
            href=''
          >
            Contact Us
          </a>
          <a
            className='hover:border-b-[0.5px] hover:border-black hover:cursor-pointer'
            href=''
          >
            FAQs
          </a>
          <a
            className='hover:border-b-[0.5px] hover:border-black hover:cursor-pointer'
            href=''
          >
            Español
          </a>
        </div>
        <p className='text-[12px]'>
          ©2025 Toyota Motor Sales, U.S.A., Inc. All information applies to U.S.
          vehicles only.
        </p>
        <div className='text-[12px] flex space-x-2'>
          <a className=' hover:border-black hover:cursor-pointer' href=''>
            Privacy Notice
          </a>
          <p className='border-r-1 border-black px-2 py-1 pr-2 hover:border-b-[0.5px]'></p>
          <a className=' hover:border-black hover:cursor-pointer pl-3' href=''>
            Legal Terms
          </a>
          <p className='border-r-1 border-black pr-2 hover:border-b-[0.5px]'></p>
          <a className='pl-3' href=''>
            Site Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
