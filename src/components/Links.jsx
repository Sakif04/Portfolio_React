import { Link, useLocation } from "react-router-dom";
import {BsHouseDoor} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";
import {FaGraduationCap} from "react-icons/fa";
import {AiOutlineFileDone} from 'react-icons/ai';
import { useState } from "react";

export default function Links(){
    
    const location = useLocation();
    
    return (
        <div className="sticky-links">
            <Link to='/'>
                <BsHouseDoor className={location.pathname==="/"? "link active-link":"link"} />
            </Link>
            
            <Link to= 'about'>
                <BsFillPersonFill  className={location.pathname==="/about"? "link active-link":"link"} />
            </Link>


            < Link to="education" >
                <FaGraduationCap className={location.pathname==="/education"? "link active-link":"link"}/>
            </Link>
           
           <Link to="projects">
                <AiOutlineFileDone  className={location.pathname==="/projects"? "link active-link":"link"} />   
           </Link>
         
            
        </div>
    )
}
