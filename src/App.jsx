import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
// imported pages
import Home from "./pages/home/Home";
import Education from './pages/education/Education';
import Header from "./components/Header";
import Projects from "./pages/projects/Projects";
import Links from "./components/Links";
import About from './pages/about/About';

import "./css/tailwind.css"


function App() {
  
  return (
    <div className="app-body">
      <div className="z-10 font-sans ">

        
        
        
        
        <Router>
            <Routes>

              <Route path='/'  element={<Home/>}/>
              <Route path='education'  element={<Education/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='projects' element={<Projects />}/>
            </Routes>
            <Links />
        </Router>
        <Header />
        

      </div>
    </div>
  )
}

export default App
