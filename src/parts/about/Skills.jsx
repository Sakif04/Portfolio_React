import React from 'react'
import Skill from './Skill';
import {FaPython} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {FaHtml5} from 'react-icons/fa';
import {IoLogoCss3} from 'react-icons/io';
import {BsBootstrapFill} from 'react-icons/bs';
import {SiTailwindcss} from 'react-icons/si';
import {SiPandas} from 'react-icons/si';

export default function Skills() {

  return (
    <div className='skills'>
        <h1 className="text-3xl text-yellow-300 font-semibold my-auto text-center">Skills</h1>
        <h1 className="text-lg text-center text-yellow-300 ">Programming Languages, Libraries & Frameworks</h1>
        <div className="skill-section">
            <Skill skill='Python' logo={<FaPython />} color='purple' />
            <Skill skill='Javascript' logo={<SiJavascript/>} color='yellow' />
            <Skill skill='HTML' logo={<FaHtml5/>} color='#ff9900'/>
            <Skill skill='CSS' logo={<IoLogoCss3/>} color='#264de4'/>
            <Skill skill='Bootstrap' logo={<BsBootstrapFill/>} color='#e035e6'/>
            <Skill skill='TailwindCSS' logo={<SiTailwindcss/>} color='skyblue'/>
            <Skill skill='Pandas' logo={<SiPandas/>} color='#ffffff'/>
            
        </div>


        
    </div>
  )
}

 
