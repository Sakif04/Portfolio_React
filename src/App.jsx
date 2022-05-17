

import Home from "./parts/home/Home";
import Header from "./components/Header";
import Education from "./parts/about/Education";
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
        <Education/>
        <Links />
      </div>
    </div>
  )
}

export default App
