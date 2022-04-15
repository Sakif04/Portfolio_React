import {BsHouseDoor} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";import {FcFlashOn} from "react-icons/fc";
import {FiGithub} from "react-icons/fi";
import {FaSuitcase} from "react-icons/fa"
import {MdWifiTetheringErrorRounded} from "react-icons/md"
import { Link } from "react-router-dom";
export default function Links(){

    return (
        <div className="sticky-links">
            <Link to="." >
                <BsHouseDoor className="link" />
            </Link>
            <Link to="/about">
                <BsFillPersonFill  className="link"/>
            </Link>
           
            <FaSuitcase className="link"/>
            <MdWifiTetheringErrorRounded className="link"/>
        </div>
    )
}
