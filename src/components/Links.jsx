import {BsHouseDoor} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";import {FcFlashOn} from "react-icons/fc";
import {FiGithub} from "react-icons/fi";
import {FaSuitcase} from "react-icons/fa"
import {MdWifiTetheringErrorRounded} from "react-icons/md"

export default function Links(){

    return (
        <div className="sticky-links">
            <a href="#hero" >
                <BsHouseDoor className="link" />
            </a>
            <a href="#about">
                <BsFillPersonFill  className="link" />
            </a>

            
           <a href="#">
            <FaSuitcase  className="link" />   
           </a>
            <a href="#">
                <MdWifiTetheringErrorRounded className="link"/>
            </a>
            
        </div>
    )
}
