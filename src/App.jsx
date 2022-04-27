
import Gallery from "./components/Gallery";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import About from "./pages/about/About";
import Links from "./components/Links";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./css/tailwind.css"


function App() {
  

  return (
    <div className="app-body">
      <div className="z-10 font-sans ">
    
        <Router>
        <Links />
        <Header />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
          
          </Routes>
         
         </Router>
    
        
    
      </div>
    </div>
  )
}

export default App
