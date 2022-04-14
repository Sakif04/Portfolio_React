import beardLogo from "./../images/beard.svg"
import {Link} from "react-router-dom";

export default function Header(){

 return(
    <header> 
            <nav className="app-header">
            <Link className="mx-2 w-35 z-30 h-20" to="." >
              
            <svg className="logo"   version="1.1"  xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 297 297"  >
            <path d="M286.542,8.628c-5.775,0-10.457,4.683-10.457,10.457c0,0.112-0.104,11.553-3.778,22.576
              c-1.349,4.047-2.876,7.224-4.501,9.726c0.601-3.86,0.657-6.495,0.66-7.122c0.024-4.241-2.515-8.077-6.428-9.711
              c-3.911-1.637-8.427-0.745-11.425,2.256c-0.069,0.068-7.561,6.892-22.471,6.892c-6.79,0-12.217-3.618-19.088-8.199
              c-8.234-5.489-17.567-11.711-30.689-11.711c-13.767,0-23.711,3.989-29.866,7.571c-6.155-3.582-16.1-7.571-29.866-7.571
              c-13.121,0-22.454,6.222-30.688,11.711c-6.871,4.581-12.298,8.199-19.088,8.199c-14.301,0-21.689-6.204-22.526-6.952
              c-2.939-3.102-7.351-3.977-11.328-2.394c-4.004,1.591-6.495,5.604-6.469,9.911c0.004,0.62,0.06,3.209,0.643,7.004
              c-8.049-12.081-8.261-31.911-8.263-32.186c0-5.774-4.682-10.457-10.457-10.457C4.683,8.628,0,13.311,0,19.085v103.532
              c0,6.77,0,22.625,11.979,25.453c2.602,0.613,4.997,0.39,7.168-0.34c3.233,24.744,11.989,62.12,35.682,85.813
              c2.99,2.99,7.488,3.884,11.396,2.267c1.511-0.626,2.819-1.58,3.854-2.759c0.229,0.35,0.463,0.702,0.697,1.055
              c18.4,27.6,44.398,46.257,75.186,53.953c0.834,0.209,1.686,0.313,2.537,0.313c0.852,0,1.703-0.104,2.537-0.313
              c30.787-7.696,56.785-26.354,75.186-53.953c0.234-0.352,0.468-0.705,0.697-1.055c1.035,1.179,2.344,2.133,3.854,2.759
              c3.908,1.617,8.405,0.724,11.396-2.267c23.692-23.693,32.448-61.069,35.682-85.813c2.17,0.73,4.565,0.953,7.168,0.34
              C297,145.242,297,129.387,297,122.617V19.085C297,13.311,292.317,8.628,286.542,8.628z M54.904,63.148
              c4.107,0.9,8.759,1.468,13.953,1.468c13.121,0,22.455-6.222,30.689-11.711c6.871-4.58,12.298-8.198,19.087-8.198
              c14.299,0,21.687,6.201,22.527,6.95c1.969,2.084,4.466,3.266,7.339,3.266s5.37-1.182,7.339-3.266
              c0.841-0.749,8.229-6.95,22.527-6.95c6.789,0,12.216,3.618,19.087,8.198c8.234,5.489,17.568,11.711,30.689,11.711
              c5.241,0,9.928-0.578,14.062-1.492C236.439,73.44,224.455,84.1,199.549,84.1c-3.237,0-6.668-0.178-10.197-0.526
              c-8.558-0.848-20.094-3.534-33.457-16.897c-2.042-2.042-4.718-3.063-7.394-3.063c-2.677,0-5.353,1.021-7.395,3.063
              c-13.363,13.363-24.899,16.05-33.457,16.897c-3.529,0.349-6.958,0.526-10.191,0.526c-0.002,0-0.004,0-0.006,0
              C77.647,84.098,62.721,75.99,54.904,63.148z M276.085,114.67c-2.474-2.113-5.866-3.01-9.193-2.229
              c-4.718,1.11-8.055,5.32-8.063,10.168c-0.001,0.486-0.264,37.164-13.609,68.486c-0.258-5.041-4.104-9.214-9.166-9.837
              c-5.23-0.635-10.141,2.719-11.423,7.843c-0.155,0.621-16.011,61.41-76.132,78.001c-24.633-6.782-44.781-21.575-59.919-44.001
              c-11.975-17.744-16.177-33.863-16.211-34c-1.281-5.125-6.192-8.487-11.423-7.843c-5.063,0.623-8.908,4.796-9.166,9.838
              c-13.346-31.322-13.608-67.999-13.609-68.479c0-4.85-3.335-9.063-8.055-10.178c-3.323-0.785-6.723,0.113-9.201,2.229V73.082
              c5.543,4.499,12.421,7.507,20.887,8.108c9.343,12.02,26.054,23.823,55.648,23.825c0.002,0,0.004,0,0.006,0
              c3.92,0,8.043-0.211,12.253-0.629c14.525-1.439,27.054-6.644,38.791-16.215c11.737,9.571,24.266,14.776,38.791,16.215
              c4.21,0.418,8.335,0.629,12.258,0.629c29.602,0,46.313-11.805,55.656-23.825c8.462-0.604,15.339-3.61,20.88-8.108V114.67z" 
              />

            </svg>
             </Link>
            {/* <div id="burger" className="hamburger" >
              <div className="w-10 h-1 bg-red-800"></div>  
              <div className="w-10 h-1 bg-red-800 my-2"></div>  
              <div className="w-10 h-1 bg-red-800"></div>  
            </div> */}
          
            <div className="lg:opacity-100   sm: opacity-0">
              <Link className="mx-2 z-30 hover:text-white" to="." >Home</Link>
              <Link className="mx-2 z-30 hover:text-white" to="/gallery">Gallery</Link>
              <Link className="mx-2 z-30 hover:text-white" to="about">About</Link>              
            </div>
            </nav>
    </header>

  )
    }