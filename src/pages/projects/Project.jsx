import React from "react";
import {AiOutlineEye} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';

export default function Project({gitLink,prevLink,imgLink,title}){

    return(
    <div className="project card">
        <h1 className="project_name">
          {title}
        </h1>
        <img src={imgLink} alt="Quiz App"  />
        <div className="flex justify-center">
          <a href={gitLink}> <FiGithub  className='link'/></a>
          <a href={prevLink}> <AiOutlineEye className='link'/></a>
        </div>
      </div>
    )
}