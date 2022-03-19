
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import logo from './logo.svg'

import "./css/tailwind.css"
import './App.css'



function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
          <Routes>
            <Route path="../" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
          </Routes>
          <Link to="gallery">Gallery</Link>
          <Link to="../" >Home </Link>
        </Router>


       

        <h1 className='bg-red-600 text-2xl text-pink-200'> Hello Vite + React! </h1>
    
      </header>
    </div>
  )
}

export default App
