import Hero from "./Hero";
import Contacts from "./contacts";
export default function Home(){
    
    return(
        <div id="hero" className="min-w-fit  h-full">
           <h2 className="text-center text-4xl text-purple-900">Hello</h2>
            <h1 className='text-center my-2 text-2xl bg-red text-green-100'> I am <br />Sakif <span className="text-red-900" > Rafid</span></h1>
          
            <Hero />
            <Contacts />

        </div>
    )
}