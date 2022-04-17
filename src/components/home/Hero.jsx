import heroImg from "./../../images/hero-img.svg" ;
export default function Hero(){

    return(
        <>
        <div className="hero-box">
            <img className="hero-img" src={heroImg} alt="" srcSet=""  />
        </div>
        </>
    )
}