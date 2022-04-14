import {BsHouseDoor} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";
import {FcFlashOn} from "react-icons/fc";
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
           
            <MdWifiTetheringErrorRounded className="link"/>
        </div>
    )
}
