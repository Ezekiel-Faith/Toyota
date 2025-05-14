import Box from './Box';
import firstPic from '../assets/images/TMMTX.jpg';
import secondPic from '../assets/images/TMMI.jpg';
import thirdPic from '../assets/images/TMMMS.jpg';
import fourthPic from '../assets/images/TMMK.png';
import fifthPic from '../assets/images/TMMMO.jpg';
import sixthdPic from '../assets/images/TMMTN.jpg';
import seventhPic from '../assets/images/TMMAL.png';
import eightPic from '../assets/images/TMMWV.jpg';
import ninethPic from '../assets/images/TABC.png';
import tenthpic from '../assets/images/MTM.jpg';
import eleventhPic from '../assets/images/PEMC.jpg';
import twelvethPic from '../assets/images/TBMNC.jpg';

const Manufacturing = ({Hover, Leave})=>{
    return(
        <div className="w-[100vw]" onMouseEnter={Hover} onMouseLeave={Leave}>
            <div className="w-[100vw] h-[100px] p-[10px] flex justify-center items-center">
                <h2 className="text-2xl font-bold text-center">
                Manufacturing Highlights
                </h2>
            </div>
            <div className='flex flex-wrap gap-y-[-100px] w-[100%] h-[92%]  justify-center items-center gap-x-[50px] manufactures'>
                <Box image={firstPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={secondPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={thirdPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={fourthPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={fifthPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={sixthdPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={seventhPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={eightPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={ninethPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={tenthpic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={eleventhPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
                <Box image={twelvethPic} title='Toyota Motor Manufacturing, Texas (TMMTX)'/>
            </div>
        </div>
    )
}

export default Manufacturing;