import heroImg from "./../../images/hero-img.svg" ;
export default function Hero(){

    return(
        <>
        <div className="hero-box">
            <img src={heroImg} alt="" srcSet="" className="w-full " />
        </div>
        </>
    )
}