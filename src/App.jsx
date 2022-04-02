
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./css/tailwind.css"


function App() {
  

  return (
    <div className="app-body">
      <div className="App-header z-10 font-sans ">
    
        <Router>
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
