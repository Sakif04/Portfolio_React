import React from 'react';
import noteImg from '../../images/projects_img/Note_img.png'
import quizImg from '../../images/projects_img/quiz.png';
import Project from './Project';

function Projects() {
  return (
  <>
    <h1 className="projects_header"> Projects</h1>
    <div className='projects' id='projects'>
      <Project gitLink={"https://github.com/Sakif04/Quiz_App/"} 
        prevLink={"https://sakifsquizapp.netlify.app/"}  
        imgLink={quizImg} />
      <Project 
        imgLink={noteImg}
        gitLink="https://github.com/Sakif04/React_Note" 
        prevLink="https://saksnotes.netlify.app/"
      />
      

    
    </div>
  </>
  )
}

export default Projects