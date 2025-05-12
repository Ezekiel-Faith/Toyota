import { useEffect, useRef, useState } from "react";
import Slides from "./Slides";


// this is the hero section
export default function HeroSection () {

    const Hero1 = 'https://www.toyota.com/content/dam/tusa/usa/Toyota_Beyond-Zero-Campaign_Hero_2.jpg'
    const Hero2 = 'https://www.toyota.com/content/dam/tusa/usa/Toyota_Beyond-Zero-Campaign_3.jpg'
    const Hero3 = 'https://www.toyota.com/content/dam/tusa/usa/Toyota_Beyond-Zero-Campaign_2a.jpg'
     // setting the counts that takes care of the increment and decrement of the button
     let [button, setButton] = useState(1);

     useEffect(()=>{
        const interval = setInterval(() => {
            if(button < 3){
                setButton(button+1);
            }else if (button === 3){
                setButton(1);
            }
        }, 2000);
        return()=> clearInterval(interval);
            
 
     })

 
 
     // function for the increment
     const ForwardSlide = ()=>{
         if(button < 3){
             setButton(button+1);
         }else if (button === 3){
             setButton(1);
         }
     }
     // function for the decremrnt
     const BarkwardSlide = ()=>{
         if(button > 1){
             setButton(button-1);
         }else if (button = 1){
             setButton(3);
         }
     }
     return(
         <div>
             <div className="w-[100vw] h-[600px] lg:h-[85vh]">
                <div className="w-[100vw] h-[100px]">

                </div>
                 <div className="absolute h-[20px] w-[100vw] z-50 pl-[10px] pr-[10px] top-[300px] flex justify-between sm:top-[400px] lg:top-[300px]">
                     <button className="w-[50px] h-[50px] rounded-[40%] bg-gray-300 opacity-[0.5]  font-extrabold hover:opacity-[0.7]" onClick ={BarkwardSlide}>&lt;</button>
                     <button className="w-[50px] h-[50px] rounded-[40%] bg-gray-300 opacity-[0.5] font-extrabold hover:opacity-[0.7]" onClick ={ForwardSlide}>&gt;</button>
            </div>
                    {
                button === 1 && <Slides show='flex' image={Hero1} title='Our Beyond Zero Vision' description='Beyond Zero is Toyota’s vision to reach beyond carbon neutrality with our products, services and operations, and find new ways to make a positive impact on our planet and society.' indicator1='bg-gray-400'  indicator2='bg-gray-200'  indicator3='bg-gray-200'/>
            }
             
             
            {
                button === 2 && <Slides show='flex' image={Hero2} title='Community, Collaboration, Change.' description='Together with our community partners, we are improving access to opportunities and creating limitless possibilities for all - now and in the future.' indicator1='bg-gray-200'  indicator2='bg-gray-400' indicator3='bg-gray-200'/>
            }
             
            {
                button === 3 && <Slides show='flex' image={Hero3} title='Challenging what’s possible, together' description='With an array of open positions, there has never been a more exciting time to join Toyota. Grow your career with work that matters today.' indicator1='bg-gray-200'  indicator2='bg-gray-200'  indicator3='bg-gray-400'/>
            }
             </div>
             <div className="w-full h-[300px] flex justify-center items-center gap-[50px] flex-col p-[10px]">
                <h2 className="text-2xl font-bold text-center">We’re more than great cars and trucks.</h2>
                <p className="text-center">Our researchers and partners take Mobility for All beyond our vehicles to have a positive impact on people, society, and the environment.</p>
             </div>
         </div>
     )
}


export function button ({width, border, tag}){
    return(
        <button className={` ${width} h-[50px] ${border} text-white`}>
            {tag} 
        </button>
    )
}


export function stickyButtons(){
    return(
        <button/>
    )
}



