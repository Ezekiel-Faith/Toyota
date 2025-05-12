// creating a componet for the hero section slide
export default function Slides({ image, title, description, indicator1, indicator2, indicator3}){
    return(
            
                <div className={`w-full flex flex-col h-[600px] sm:h-[700px] lg:h-[85vh] `}>
                <div className="w-[100%] h-[90%] flex flex-col lg:flex-row">
                    <div className=" w-[100%] h-[50%] flex justify-center items-center sm:h-[70%] lg:h-[100%] lg:w-[65%] ">
                        <img src={image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[100%] h-[50%] p-[20px] flex flex-col gap-[10px] justify-center sm:h-[30%] lg:h-[100%] lg:w-[25%]">
                    <h2 className="text-3xl font-bold uppercase lg:text-4xl">
                    {title}
                    </h2>
                    <p className='font-bold uppercase'>
                    {description}
                    </p>
                    <p className='font-bold text-[red]  hover: underline cursor-pointer transition duration-500 ease-in-out w-[100%]'>
                        Learn More
                    </p>
                    </div>

                </div>    
                
            <div className='w-full h-[10% ] flex justify-center items-center gap-[10px] lg:h-[10%]'>
                    <div className={`rounded-[50%] ${indicator1} w-[10px] h-[10px]`}></div>
                    <div className={`rounded-[50%] ${indicator2} w-[10px] h-[10px]`}></div>
                    <div className={`rounded-[50%] ${indicator3} w-[10px] h-[10px]`}></div>
            </div>
            </div>
            
    )
}