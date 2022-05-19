
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Header from "./components/Header";


import Links from "./components/Links";


import "./css/tailwind.css"


function App() {
  

  return (
    <div className="app-body">
      <div className="z-10 font-sans ">

        
        
        
        <Links />
        <Router>
            <Routes>

              <Route path='/'  element={<Home/>}/>
              {/* <Route path='Education'  element={<Home/>}/> */}

              
            </Routes>

        </Router>

        <Header />
        <Home />
        
        <Links />

      </div>
    </div>
  )
}

export default App
