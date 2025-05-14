import { useState } from "react";
import ErrorBound from "./Boundary";
import Overview from "./Overview";


const WorkingAtToyota = ({Hover, Leave})=>{

    
    return(
        <div className="w-full h-[750px] lg:h-[950px] bg-black text-white" onMouseEnter={Hover} onMouseLeave={Leave}>
            <div className="w-full h-[7%] flex justify-center items-center">
                <h2 className="capitalize text-3xl font-bold ">
                    Working At Toyota
                </h2>
            </div>
            <Overview/>
        </div>
    )
}

export default WorkingAtToyota;