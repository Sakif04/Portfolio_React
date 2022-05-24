import { Link } from "react-router-dom";
import {BsHouseDoor} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";
import {FaGraduationCap} from "react-icons/fa";
import {AiOutlineFileDone} from 'react-icons/ai';

export default function Links(){

    return (
        <div className="sticky-links">
            <Link to='/'>
                <BsHouseDoor className="link" />
            </Link>
            
            <Link to= 'about'>
                <BsFillPersonFill  className="link" />
            </Link>


            < Link to="education" >
                <FaGraduationCap className="link"/>
            </Link>
           
           <Link to="projects">
                <AiOutlineFileDone  className="link" />   
           </Link>
         
            
        </div>
    )
}
