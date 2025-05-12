import propType from "prop-type";
import Check from "./Check";
import Check2 from "./Check2";
import { useState } from "react";

const ViteButton = () =>{

    const [isHover, setIsHover] = useState(false)

    const buttonStyle = {
      backgroundColor: isHover ? 'black' : 'white',
    }
    const handleMouseEnter = ()=>{
        setIsHover(true)
    }
    const handleMouseLeave = ()=>{
        setIsHover(false)
    }

    return(
       <>
       <Check style={buttonStyle}/>
       <Check2 hover={handleMouseEnter} leave={handleMouseLeave}/>
       </>
    )
}

export default ViteButton;

