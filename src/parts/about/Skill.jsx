import React from 'react'


export default function Skill({skill,logo,color}) {
    const style={color:color};
    
  return (
    <div className="skill" >
        <h1 className='text-green-50'>
            {skill}
        </h1>
        <p style={style} className='skill-logo'>
        {logo}
        </p>
        

    </div>
  )
}

