import { useState } from "react";

export default function Gallery(){
    const [isActive, setActive] = useState(false);
    const normalStyle="fist-img rounded card flex justify-center w-4/4 h-full overflow-hidden normal";
    
   
    function clickHandler(e){
        e.preventDefault();
        setActive(!isActive)
    }
    return(
    <div id="gallery" className="carousel">
            <h1 className="text-center "> Gallery</h1>
           
            <svg xmlns="http://www.w3.org/2000/svg" className="" width={1000} height={300}>
              
            <g id="one" > 
            { /*className={isActive?normalStyle+" active":normalStyle}>  */}
            <image clipPath="url(#imageMask)" id="two"  width="80%" height={300} onClick={clickHandler} href="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg" alt="image" >

            </image>    
            </g>
         
                
               
           
            
            <g id="one" onClick={clickHandler}>
            <clipPath className="translate-x-1/4" id="imageMask">
                <circle cx="250" cy="150" r="120" className={isActive?"circle active":"circle"} ></circle>
                </clipPath>
            </g>
            
            </svg>
   
  </div>


)

}