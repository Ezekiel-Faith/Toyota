import React, { useState } from 'react';
import logo from '../assets/toyota-logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const styles = {
  link: 'px-2 py-1 transition-colors duration-700 mt-2',
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const navs = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About Us' },
    { id: 3, text: 'Our Company' },
    { id: 4, text: 'Newsroom' },
  ];

  return (
    <nav className='w-full bg-white lg:border-b-[0.5px]  p-4 text-black text-lg font-semibold fixed top-0 right-0 z-50'>
      <div className='flex justify-between items-center mx-auto container  w-full'>
        <img src={logo} alt='' width={200} />

        <ul className='lg:flex space-x-12 hidden'>
          {navs.map((item) => (
            <li className={styles.link} key={item.id}>
              <button
                onClick={() => toggleDropdown(item.id)}
                className={`flex items-center justify-center gap-2 hover:cursor-pointer`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>

        <div className='cursor-pointer lg:hidden'>
          {isOpen ? (
            <RiCloseLargeFill
              size={22}
              onClick={toggleMenu}
              className='bg-black text-white rounded-3xl'
            />
          ) : (
            <GiHamburgerMenu size={20} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {isOpen && (
        <ul className='flex flex-col space-x-12 mt-4 lg:hidden border-t-[0.1px]  sm:ml-[500px] sm:pb-72 '>
          {navs.map((item) => (
            <li
              className={`${styles.link} block pb-10  hover:border-none rounded-none border-b-[0.1px]  hover:text-[#a9a9a9] w-full`}
              key={item.id}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
