import React from 'react';
import {AiOutlineEye} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';
function Projects() {
  return (
  <>  
    <h1 className="projects_header"> Projects</h1>
    <div className='projects' id='projects'>
      <div className="project card">
        
        <h1 className="project_name">
          Quiz App
        </h1>
        <img src="../../images/projects_img/quiz_1.png" alt="Quiz App"  />
        <div className="flex justify-center">
          <a href="https://github.com/Sakif04/Quiz_App/"> <FiGithub  className='link'/></a>
          <a href="https://sakifsquizapp.netlify.app/"> <AiOutlineEye className='link'/></a>
        </div>
      </div>

    </div>
  </>
  )
}

export default Projects