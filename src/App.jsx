
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Education from './pages/education/Education'
import Header from "./components/Header";


import Links from "./components/Links";


import "./css/tailwind.css"
import About from './pages/about/About';


function App() {
  

  return (
    <div className="app-body">
      <div className="z-10 font-sans ">

        
        
        
        
        <Router>
            <Routes>

              <Route path='/'  element={<Home/>}/>
              <Route path='education'  element={<Education/>}/>
              <Route path='about' element={<About/>}/>
              
            </Routes>
            <Links />
        </Router>
        <Header />
        

      </div>
    </div>
  )
}

export default App
