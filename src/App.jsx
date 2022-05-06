

import Home from "./parts/home/Home";
import Header from "./components/Header";
import About from "./parts/about/About";
import Links from "./components/Links";


import "./css/tailwind.css"

function App() {
  

  return (
    <div className="app-body">
      <div className="z-10 font-sans ">
    
    
        
        <Header />
        <Home />
        <About />

        
        <Links />
        
    
      </div>
    </div>
  )
}

export default App
