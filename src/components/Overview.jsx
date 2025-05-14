import { useState } from "react";
import woman from '../assets/images/WorkingAtToyota1.png';
import ip from '../assets/images/toyota_ip_solutions.jpg';
import arrow from '../assets/images/arroww.png';
export const Btn = ({OverviewBtn, tag, click})=>{
    return(
        // creating a customizable/reuseable button 
        <button className={`${OverviewBtn} w-[200px] h-[70px] text-left text-gray-300 cursor-pointer hover:text-white`} onClick={click}>{tag}</button>
    )
}


const Overview = ()=>{
    // creating a state that manages the state of the button to know if its clicked or not
    const [btn, setBtn] = useState(false);

    // creating a function that changes the state of the button from true to false and also from false to true
    const show = ()=>{
        if(btn == false){
            setBtn(true)
            
        }else{
            setBtn(false)
        }
    }
    return(
        <div className="h-full w-full ">
        {
            // displaying the button that helps navigates on a large screen through the cards when on the firstd card on if the button is false 
            btn == false && <div className="w-[100%] h-[15%] p-[20px] justify-between hidden lg:flex">

            {/* calling the customized button that i exported over there */}
            <Btn OverviewBtn='border-b-2 border-[red]' tag='Overview' click={show}/>
            <Btn tag='Toyota IP Solutions' click={show}/>
        </div>
        }
        {
            // this is also displaying the other elements on the first card if the state of the button is false
            btn == false && <div className="w-full h-[700px] flex flex-col justify-center items-center gap-[30px]">
            <div  className="w-[90%] h-[200px] flex justify-center items-center object-fill overflow-hidden sm:h-[250px] lg:h-[450px] 2xl:h-[350px]">
                <img src={woman} alt="" width='1500px' className="2xl: w-[2000px]"/>
            </div>
            <div className="w-[90%] h-[150px]">
                <h2 className="text-2xl mb-[20px]">
                Join our team
                </h2>
                <p className="mb-[20px]">
                We’re looking for the best and brightest to join us as we innovate, collaborate and dedicate our efforts to driving the future of mobility.
                </p>
                <p className="text-[red] cursor-pointer hover:underline">
                EXPLORE CAREERS
                </p>
            </div> 
            <div className="h-[280px] w-[100%]  flex items-end sm:h-[230px] lg:hidden">
                <div className="w-[100%] h-[50px]  flex justify-between items-center p-[5px]">

                <div className="w-[200px] flex gap-[5px] p-[5px]">
                    <button className="w-[80px] h-[30px] " onClick={show}><img src={arrow} alt="" width='30px' className="sm:w-[50px]"/></button>
                    <button className="w-[80px] h-[30px] " onClick={show}><img src={arrow} alt="" width='30px' className="scale-x-[-1] sm:w-[50px]"/></button>
                </div>
                <div>
                    <h2>01 / 02</h2>
                </div>
                </div>
            </div>
        </div>
        }
         {
            // and this is displaying the navigation button for the card two if the state of the button is true
            btn == true && <div className="w-[100%] h-[15%]  p-[20px] justify-between hidden lg:flex">
            <Btn  tag='Overview' click={show}/>
            <Btn tag='Toyota IP Solutions' OverviewBtn='border-b-2 border-[red]' click={show} />
        </div>
        }
        {
            // the remaining items in the second card displays if the states of the button is true 
            btn == true && <div className="w-full h-[100%] flex flex-col items-center   gap-[20px] justify-center">
            <div  className="w-[95%] h-[200px]  flex justify-center items-center object-fill overflow-hidden sm:h-[250px] lg:h-[400px]">
                <img src={ip} alt="" width='1500px'/>
            </div>
            <div className="w-[95%] h-[300px]  " >
                <h2 className="text-2xl mb-[20px]">
                Let us help unlock your vision
                </h2>
                <p className="mb-[20px]">
                As one of the world’s leading patent holders with more than a century of experience, our intellectual property portfolios range from manufacturing unique cleaning solutions to crafting custom pigments. Explore all the patent portfolios currently available for licensing and discover how they can help you realize your vision.
                </p>
                <p className="text-[red] cursor-pointer hover:underline">
                LEARN MORE
                </p>
            </div> 
            <div className="h-[100px] w-[100%]  flex items-end lg:hidden  sm:h-[50px]">
                <div className="w-[100%] h-[50px]  flex justify-between items-center p-[5px] ">

                <div className="w-[200px] flex gap-[5px] p-[5px]">
                    <button className="w-[80px] h-[30px] " onClick={show}><img src={arrow} alt="" width='30px' className="sm:w-[50px]"/></button>
                    <button className="w-[80px] h-[30px] " onClick={show}><img src={arrow} alt="" width='30px' className="scale-x-[-1] sm:w-[50px]"/></button>
                </div>
                <div>
                    <h2>02 / 02</h2>
                </div>
                </div>
            </div>
        </div>
        }
        
    </div>
    )
}
export default Overview;