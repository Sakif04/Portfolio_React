import React from 'react'
import {FiGithub} from 'react-icons/fi';
function Projects() {
  return (
  <>  
    <h1 className="projects_header"> Projects</h1>
    <div className='projects' id='projects'>
      <div className="project">
        <h1 className="project_name">
          Quiz App
        </h1>
        <img src="" alt=""  />
        <a href="http://"> <FiGithub  className='link'/></a>
      </div>

    </div>
  </>
  )
}

export default Projects