import {BsHouseDoor} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";
import {FaGraduationCap} from "react-icons/fa";
import {AiOutlineFileDone} from 'react-icons/ai';

export default function Links(){

    return (
        <div className="sticky-links">
            <a href="#hero" >
                <BsHouseDoor className="link" />
            </a>
            <a href="#about">
                <BsFillPersonFill  className="link" />
            </a>


            <a href="education" className="link">
                <FaGraduationCap/>
            </a>
           

            <a href="#education" className="link">
                <FaGraduationCap/>
            </a>
           <a href="#projects">

            <AiOutlineFileDone  className="link" />   
           </a>
         
            
        </div>
    )
}
