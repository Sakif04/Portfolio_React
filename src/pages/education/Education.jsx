import React from 'react';
import logo from '../../images/Noor_md_logo.svg'

function Education() {
  return (
    <div className='education' id='education'>
        <h1 className='edu-header'>Education</h1>
        <div className='w-2/3 mx-auto mt-12 justify-between relative flex flex-col'>
            <div className='edu-item'>
              <h3 className='block'>SSC/GCSE</h3>
              <p >
                Willes Little Flower Higher Secondary School
              </p>
              <img className='school-logo' 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Willes_Little_Flower_School_%26_College_Logo.svg/220px-Willes_Little_Flower_School_%26_College_Logo.svg.png" alt="Willes Little flower logo Image"  />
            </div>
            <div className='edu-item'>
              <h3 className='block'>HSC/ GCE/A levels</h3>

              <h3>Birsrestha Noor Mohammad Public College</h3>
             
              <img className='school-logo' 
              alt='Noor Mohammad Logo'
              src={logo} />
            </div>

            <div className='edu-item'>
              <h3>BSC in EEE from </h3>
              <h3>East West University</h3>
              <img className='w-48 my-2'
              src="https://www.ewubd.edu/themes/east-west-university/assets/default/images/logo.png" 
              alt="East West University"  />
            </div>
        </div>
    </div>
  )
}

export default Education