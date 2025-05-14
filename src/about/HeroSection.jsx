import React from 'react';
import rav from '../assets/Rav4.avif'
import Car from '../assets/LQ_CAR.avif'
import cars from '../assets/CARS.avif'
import fuel from '../assets/FUEL-CAR.avif'
import sienna from '../assets/SIENNA_CAR.avif'
import mirror from '../assets/CAR_MIRROR.avif'
import TSS from '../assets/TSS_Logo.svg'
import Button from './Button';
import { Fade } from 'react-awesome-reveal';


const styles = {
    link:"border-b-[0.1px] border-black pb-8"
}

const HeroSection = () => {

    const handleClick = () => {
        
    }


  return (
    <div className='bg-[#0000001e]'>
        <Fade direction='up' delay={500} duration={700} >
        <div className='text-center'>
            <h1 className='text-[40px]  md:text-8xl font-[600] mb-8 pt-32'>
                Inspired by what’s <br/> possible
            </h1>
            
                <p className='text-[17px] md:text-2xl'>
                    Our passion is about giving people the freedom to explore their world and <br/> reach their full potential. Whether physically, through our dependable <br/> vehicles and innovative mobility solutions, or emotionally, through <br/> inspiring design and intimate experiences—our ever-evolving desire to <br/> help will never end.
                </p>
        </div>
        </Fade>

        <div className='block md:flex justify-center gap-32 mt-32'>
            <div>
                <h1 className='text-3xl font-[700] md:text-5xl md:font-[700] mb-8 md:w-1/2'>TOYOTA PHILOSOPHY</h1>
                <Fade direction='up' delay={500} duration={500}>
                <ul className='text-[30px] md:text-left md:text-[40px] font-[500]'>
                    <li className={styles.link}>You are what drives us</li>
                    <li className={styles.link}>Built for how you live</li>
                    <li className={styles.link}>Drive change, your way</li>
                    <li className={styles.link}>Helping make safe roadways</li>
                    <li className={styles.link}>Giving back</li>
                </ul>
                </Fade>
            </div>
            <div className='mt-10'>
                <img src={rav} alt='' className='rounded-2xl w-[550px]' />
            </div>
        </div>

        <div className='mt-40'>
            <div className='flex flex-col justify-around items-center'>
                <img src={Car} alt=''  className='w-[350px] md:w-[1200px]' />
                
            </div>
            <Fade direction='up' delay={500} duration={500}>
            <div className='lg:text-left lg:ml-39'>
                <h1 className='text-4xl md:text-5xl font-bold my-8'>
                    Imagine a world without limits.
                </h1>
                <p className='mb-8'>
                    Over 85 years of innovation have brought us our greatest mission yet: giving the freedom of movement to humankind. That's why Toyota is the <br/> Worldwide Official Mobility Partner of the International Olympic Committee and the International Paralympic Committee.
                </p>
                <Button className='hover:cursor-pointer w-full lg:w-[20%] py-2 px-8 rounded-4xl font-bold bg-white' display='Learn More' onClick={handleClick}/>
            </div>
            </Fade>
        </div>


        <div className='mt-40'>
            <div className='block md:flex justify-center gap-12 items-center'>
                <img src={cars} alt='' width={650} className='rounded-[8px]' />
                <img src={fuel} alt=''  className='rounded-[8px] w-[500px] h-[400px] hidden md:block '/>
                
            </div>
            
            <Fade direction='up' delay={500} duration={500}>
            <div className='lg:text-left lg:ml-39'>
                <h1 className='text-4xl md:text-5xl font-bold my-8'>
                    The Power of Choice Is Yours.
                </h1>
                <p className='mb-8'>
                The best way toward a cleaner future is with a diverse lineup of powertrain options. Discover an impressive balance of efficiency and power—whichever <br/> powertrain you choose.
                </p>
                <Button className='w-full lg:w-[20%] hover:cursor-pointer py-2 px-8 rounded-4xl font-bold bg-white' display='Explore Beyond Zero' onClick={handleClick}/>
            </div>
            </Fade>
        </div>


        <div className='mt-40'>
            <div className='flex justify-center gap-12 items-center'>
                <div>
                    <img src={sienna} alt='' className='w-[850px] rounded-[8px]'/>
                </div>
                <div>
                    <img src={mirror} alt='' className='w-[300px] rounded-[8px]'/>
                    <img src={TSS} alt='' className='w-[300px] rounded-[8px]'/>
                </div>   
            </div>

            <Fade direction='up' delay={500} duration={500}>
            <div className='lg:text-left lg:ml-39 pb-30'>
                <h1 className='text-4xl md:text-5xl font-bold my-8'>
                    Peace of mind comes standard.
                </h1>
                <p className='mb-8'>
                    For safer driving experiences, every Toyota offers an integrated system of active and passive safety technologies. Innovative Star Safety System™ and <br/> Toyota Safety Sense™ (TSS) * features help protect you and your passengers, and come standard on many new Toyotas.
                </p>
                <Button className='w-full lg:w-[20%] hover:cursor-pointer py-2 px-8 rounded-4xl font-bold bg-white' display='Explore Safety' onClick={handleClick}/>
            </div>
            </Fade>
        </div>

    </div>
  );
}

export default HeroSection;
