import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/toyota-logo.svg'
import Button from './Button';

const shop = ['Trade-In Value', 'Build Your Toyota', 'Search Inventory', 'Find a Dealer', 'Shop Online With SmartPath', 'Special Offers', 'What Fits My Budget', 'Payment Estimator', 'Request a Quote', 'Toyota Certified Used Vehicles', 'Buy Parts & Accessories'];

const vehicle = ['All Toyota Vehicles', 'SUVs', 'Trucks', 'Cars', 'Crossovers', 'Electrified Vehicles', 'Hybrids', 'Hybrid Cars', 'Hybrid SUVs', 'TRD Pro Series', 'Nightshade Series'];

const help = ['Dealers', 'Deals and Incentives', 'Audio Multimedia & Connected Services', 'Mobile Phone Compatibility', 'Mobility', 'Toyota Fleet', 'Toyota Financial Services', 'Southeast Toyota Finance', 'Toyota Insurance'];

const owner = ['Owners Home', 'Toyota Care & Maintenance Plans', 'Safety Recalls & Service Campaigns', 'Service Centers', 'Service Specials', 'Safety Hubs', 'Schedule Service', 'Warning Lights', 'Manuals & Warranties', 'Service Coupons Discounts', 'Manage Payments', 'Rent a Toyota'];

const about = ['Careers', 'About Us', 'Our Company', 'Toyota Outfitters', 'Newsroom', 'Toyota Worldwide', 'Gazoo Racing', 'Plant Tours', 'Partner With Toyota']

const styles = {
    link: "hover:inline-block mb-3 hover:border-b-[0.5px] hover:border-black hover:cursor-pointer hover:border-w",
    // hover:p-0
    about: "mb-3 font-bold"
}

const Footer = () => {

    const handleClick = () => {
        
    }

  return (
    <div className='bg-[#0000000b] '>
        <div className='md:flex justify-center items-center gap-8 font-bold py-12'>
        <p className='hover:border-black hover:border-b-[0.5px]'><a href="">Accessibility</a></p>
        <p className='text-red-700 hover:border-red-700 hover:border-b-[0.5px] pt-4 md:pt-0'><a href="">YOUR PRIVACY CHOICES</a></p>
        <p className='hover:border-black hover:border-b-[0.5px] pt-4 md:pt-0'><a href="">DISCONNECT REMOTE VEHICLE ACCESS (NY RESIDENTS)</a></p>
        <p className='hover:border-black hover:border-b-[0.5px] pt-4 md:pt-0'><a href="">Cookie Consent Options</a></p>
            
        </div>

        <div className='block md:flex justify-center items-center space-x-12 pb-10 lg:ml-100'>
            <Button className='bg-red-700 text-white py-2 px-8 rounded-4xl hover:cursor-pointer w-full md:w-[30%]' display='Manage Preferences' onClick={handleClick}/>
            <div className='w-full flex space-x-8 ml-10 pt-10 md:ml-0 md:pt-0'>
                <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebook} className="text-black text-[17px] border-black border-2 p-2.5 rounded-full" />
                </a>
                <a href="https://youtube.com">
                    <FontAwesomeIcon icon={faYoutube} className="text-black text-[17px] border-black border-2 p-2.5 rounded-full" />
                </a>
                <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faXTwitter} className="text-black text-[17px] border-black border-2 p-2.5 rounded-full" />
                </a>
                <a href="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram} className="text-black text-[17px] border-black border-2 p-2.5 rounded-full" />
                </a>
                <a href="https://tiktok.com">
                    <FontAwesomeIcon icon={faTiktok} className="text-black text-[17px] border-black border-2 p-2.5 rounded-full" />
                </a>
            </div>
            
        </div>

        <div className='grid grid-cols-3 gap-12 md:flex justify-around items-start pb-24 border-b-1 mx-12 border-[#0000001e]'>
            <div>
                <h2 className={styles.about}>SHOPPING TOOLS</h2>
                <ul>
                {shop.map((item, i) =>(
                    <li className={styles.link} key={i}>{item}</li>
                ))}
                </ul>
            </div>
            <div>
            <h2 className={styles.about}>VEHICLES</h2>
                <ul>
                {vehicle.map((item, i) =>(
                    <li className={styles.link} key={i}>{item}</li>
                ))}
                </ul>
            </div>
            <div>
            <h2 className={styles.about}>HELPFUL LINKS</h2>
                <ul>
                {help.map((item, i) =>(
                    <li className={styles.link} key={i}>{item}</li>
                ))}
                </ul>
            </div>
            <div>
            <h2 className={styles.about}>OWNERS</h2>
                <ul>
                {owner.map((item, i) =>(
                    <li className={styles.link} key={i}>{item}</li>
                ))}
                </ul>
            </div>
            <div>
            <h2 className={styles.about}>ABOUT TOYOTA</h2>
                <ul>
                {about.map((item, i) =>(
                    <li className={styles.link} key={i}>{item}</li>
                ))}
                </ul>
            </div>
        </div>


        <div className='flex flex-col items-center space-y-8 mt-10 pb-20'>
            <img src={logo} alt="" width={200}/>
            <div className='flex space-x-3 font-bold'>
                <a className='hover:border-b-[0.5px] hover:border-black hover:cursor-pointer' href="">Contact Us</a>
                <a className='hover:border-b-[0.5px] hover:border-black hover:cursor-pointer' href="">FAQs</a>
                <a className='hover:border-b-[0.5px] hover:border-black hover:cursor-pointer' href="">Español</a>
            </div>
            <p className='text-[12px]'>©2025 Toyota Motor Sales, U.S.A., Inc. All information applies to U.S. vehicles only.</p>
            <div className='text-[12px] flex space-x-2'>
                <a className=' hover:border-black hover:cursor-pointer' href="">Privacy Notice</a>
                <p className='border-r-1 border-black px-2 py-1 pr-2 hover:border-b-[0.5px]'></p>
                <a className=' hover:border-black hover:cursor-pointer pl-3' href="">Legal Terms</a>
                <p className='border-r-1 border-black pr-2 hover:border-b-[0.5px]'></p>
                <a className='pl-3' href="">Site Map</a>
            </div>
        </div>
      
    </div>
  );
}

export default Footer;
