import ToyotaPicture from '../assets/images/ToyotaEffect.jpg';
import { useEffect, useRef, useState } from "react";

const ToyotaEffect=({Hover, Leave})=>{
    return(
        <div className={`w-full h-[600px] lg:h-[600px]`} onMouseEnter={Hover} onMouseLeave={Leave}>
            <div className="w-[100%] h-[15%] flex justify-center items-center">
                <h2 className="font-bold text-4xl">Toyota Effect</h2>
            </div>
            <div className="w-[100%] h-[75%] flex justify-center items-center gap-[30px] flex-col p-[10px] lg:h-[600px] lg:flex-row ">
                <div className="w-[100%] h-[300px] flex justify-center items-center overflow-hidden lg:h-[100%] lg:w-[50%] ">
                    <img src={ToyotaPicture} alt="" width='600px'/>
                </div>
                <div className=" h-[220px]  p-[10px] lg:h-[100%] lg:w-[50%] lg:flex lg:justify-center lg:flex-col">
                    <p className="mb-[15px] text-2xl font-bold">
                    Our impact in action
                    </p>
                    <p className="mb-[15px]">
                    Explore stories about Toyota’s work with our communities to create limitless possibilities for all.
                    </p>
                    <button className="w-[250px] h-[50px] bg-[red] text-white font-bold cursor-pointer hover:opacity-[0.5]">
                        LEARN ABOUT OUR IMPACT
                    </button>
                </div>
            </div>

        </div>
    )
}
export default ToyotaEffect;