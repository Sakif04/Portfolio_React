import Hero from "./Hero";
import Contacts from "./contacts";
import { animated,useSpring } from "react-spring";
export default function Home(){
    const style= useSpring({
        loop: false,
        from:{ x: -2000,  },
        delay:500,
        to:  { x: 0  }
      })
    const style2=useSpring({
        delay:1000,
        loop: false,
        from:{ x: -2000,  },
        to:  { x: 0  }
      })
    return(
        <div id="hero"  className="min-w-fit  h-full">
           <animated.h2 style={style} className="text-center text-4xl text-purple-900">Hello</animated.h2>
            <animated.h1 style={style2} className='text-center my-2 text-2xl bg-red text-green-100'> I am <br />Sakif <span className="text-red-900" > Rafid</span></animated.h1>
            
            <Hero />
            <Contacts />

        </div>
    )
}