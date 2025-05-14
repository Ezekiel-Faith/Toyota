import Slides from '../components/Hero';
import { useState } from 'react';
import HeroSection from '../components/Hero';
import ToyotaEffect from '../components/ToyotaEffect';
import WorkingAtToyota from '../components/WorkingAtToyota';
import Manufacturing from '../components/Manufacture';
import Box from '../components/Box';
import StickyButton from '../components/StickyButton';

const OurCompany = () => {
  const [toyotaIsHovered, setToyotaIsHovered] = useState(false);
  const [wTIsHovered, setWTIsHovered] = useState(false);
  const [mIIsHovered, setMIIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setToyotaIsHovered(true);
  };
  const handleMouseLeave = () => {
    setToyotaIsHovered(false);
  };
  const handleMouseEnterWT = () => {
    setWTIsHovered(true);
  };
  const handleMouseLeaveWT = () => {
    setWTIsHovered(false);
  };
  const handleMouseEnterMI = () => {
    setMIIsHovered(true);
  };
  const handleMouseLeaveMI = () => {
    setMIIsHovered(false);
  };

  return (
    <>
      <HeroSection />
      <div
        className={`w-full h-[60px]  justify-center items-center sticky top-0 hidden lg:flex`}
      >
        <StickyButton
          tag='TOYOTA EFFECT'
          width='w-[30%]'
          isVisible={
            toyotaIsHovered ? 'bg-white text-black' : `bg-black text-white`
          }
          id='stickyButton'
          classname='stickyButton'
        />
        <StickyButton
          tag='WORKING AT TOYOTA'
          width='w-[40%]'
          border='border-l-1 border-r-1'
          borderColor='border-white'
          isVisible={
            wTIsHovered ? 'bg-white text-black' : `bg-black text-white`
          }
        />
        <StickyButton
          tag='MANUFACTURING HIGHLIGHTS'
          width='w-[30%]'
          isVisible={
            mIIsHovered ? 'bg-white text-black' : `bg-black text-white`
          }
        />
      </div>
      <ToyotaEffect Hover={handleMouseEnter} Leave={handleMouseLeave} />
      <WorkingAtToyota Hover={handleMouseEnterWT} Leave={handleMouseLeaveWT} />
      <Manufacturing Hover={handleMouseEnterMI} Leave={handleMouseLeaveMI} />
    </>
  );
};

export default OurCompany;
