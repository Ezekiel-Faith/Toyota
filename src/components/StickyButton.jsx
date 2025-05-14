import { button } from "./Hero"

const StickyButton = ({border, isVisible, tag, width, borderColor, id, classname})=>{
    return(
        <button className={`${width}  h-[100%] ${border} ${borderColor} ${isVisible} ${classname}`} id={id}>
            {tag}
        </button>
    )
}

export default StickyButton;