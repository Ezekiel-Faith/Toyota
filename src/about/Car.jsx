import React from 'react';
import car from '../assets/corolla.avif'
import brand from '../assets/brand.avif'
import prp from '../assets/PRP.avif'
import SEQ from '../assets/SEQ.avif'
import Button from './Button';
import { Fade } from 'react-awesome-reveal';


const styles = {
    link:"text-center absolute bottom-100 left-0 right-0 text-white",
    button:"w-[50%] lg:w-[30%] text-center text-black absolute top-105 left-0 right-0 bg-white mx-20 lg:mx-60 py-2 rounded-4xl font-bold"
}

const Car = () => {

    const handleClick = () => {
        
    }


  return (
    <div className=' mt-12 mb-12 flex flex-col justify-around items-center'>
        <div className='md:grid grid-cols-2 gap-8'>
            <Fade direction='up' delay={200} duration={700}>
            <div className='relative mb-6'>
                <img src={brand} alt='' className='w-[650px] h-[550px] rounded-[8px]'/>
                <div className={styles.link}>
                    <h2 className='text-5xl font-[700] mb-6'>Toyota Gazoo Racing</h2>
                    <p>Built for the love of the drive.</p>

                    <div className={`${styles.button} `}>
                        <Button className='hover:cursor-pointer' display='Explore Gazoo Racing' onClick={handleClick} />
                    </div>

                </div>
                
            </div>
            </Fade>
            <Fade direction='up' delay={200} duration={700}>
            <div className='relative mb-6'>
                <img src={car} alt='' className='w-[650px] h-[550px] rounded-[8px]' />
                <div className={styles.link}>
                    <h2 className='text-5xl font-[700] mb-6'>Nightshade</h2>
                    <p className='text-[17px]'>Turn down the lights. Turn up the style.</p>

                    <div className={styles.button}>
                    <Button className='hover:cursor-pointer'  display='Discover Nightshade' onClick={handleClick} />
                    </div>
                </div>
            </div>
            </Fade>
                
            <Fade direction='up' delay={200} duration={700}>
            <div className='relative mb-6'>
                <img src={prp} alt='' className='w-[650px] h-[550px] rounded-[8px]' />
                <div className={styles.link}>
                    <h2 className='text-5xl font-[700] mb-6'>Beyond Zero</h2>
                    <p>The Power of Personal Choice for Reducing Carbon Emissions.</p>

                    <div className={styles.button}>
                    <Button className='hover:cursor-pointer'  display='Learn More' onClick={handleClick} />
                    </div>
                </div>
                
            </div>
            </Fade>
            <Fade direction='up' delay={200} duration={700}>
            <div className='relative mb-6'>
                <img src={SEQ} alt='' className='w-[650px] h-[550px] rounded-[8px]'/>
                <div className={styles.link}>
                    <h2 className='text-5xl font-[700] mb-6'>TRD Pro Series</h2>
                    <p>Three letters. Endless dedication.</p>

                    <div className={styles.button}>
                    <Button className='hover:cursor-pointer'  display='Learn More' onClick={handleClick} />
                    </div>
                </div>
                
            </div>
            </Fade>
            
        </div>
        
    </div>
  );
}

export default Car;
