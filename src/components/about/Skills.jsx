import React from 'react'
import Skill from '../../pages/about/Skill';
import {FaHtml5,FaPython, FaReact,FaRegFilePowerpoint} from 'react-icons/fa';


import {IoLogoCss3} from 'react-icons/io';
import {SiJavascript,SiRedux} from 'react-icons/si';
import {AiOutlineFileWord,AiOutlineFileExcel} from 'react-icons/ai';


export default function Skills() {

  return (
    <div className='skills'>
        <h1 className="text-3xl text-pink-200 font-semibold my-auto text-center">Skills</h1>
        <h1 className="text-lg text-center text-pink-200 font-thick">Programming Languages, Libraries & Frameworks</h1>
        <div className="skill-section">
            
            <Skill skill='Javascript' logo={<SiJavascript/>} color='yellow' />
            <Skill skill='Python' logo={<FaPython/>} color='#4B8BBE'/>
            <Skill skill='React' logo={<FaReact/>} color='#61dbfb'/>
            <Skill skill='Redux' logo={<SiRedux/>} color='#61dbfb'/>
            <Skill skill='HTML' logo={<FaHtml5/>} color='#ff9900'/>
            <Skill skill='CSS' logo={<IoLogoCss3/>} color='#264de4'/>
            
            
        </div>
        <h1 className="text-lg text-center text-pink-200 text-bold "> Softwares</h1>
        <div className="skill-section">
          <Skill skill='MS Word' logo={<AiOutlineFileWord/>} color='#299fe6'/>
          <Skill skill='MS Powerpoint' logo={<FaRegFilePowerpoint/> } color='#FFA500'/>
          <Skill skill='MS Excel' logo={< AiOutlineFileExcel/>} color='lime' />
        </div>


        
    </div>
  )
}

 
