

const Box = ({image, title})=>{
    return(
        <div className="w-[350px] h-[400px] bg-white shadow-xl sm: w-[500px] md:w-[350px]">
            <div className="w-[100%] h-[200px] overflow-hidden">
                <img src={image} alt="" />
            </div>
            <div className="w-[100%] h-[150px] pl-[20px]">
                <p>
                {title}
                </p>
                <p className="text-[red] cursor-pointer hover:underline mt-[-10px]">
                Learn More
                </p>
                <p  className="text-[red] cursor-pointer hover:underline mt-[-10px]">
                Take a tour
                </p>
            </div>
        </div>
    )
}
export default Box;