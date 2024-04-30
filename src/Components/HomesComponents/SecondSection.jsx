import "../../Css/SecondSection.css"
import { Slide} from "react-awesome-reveal";
import { useTypewriter } from 'react-simple-typewriter'
const SecondSection = () => {
  const [text] = useTypewriter({
    words: ['Extraordinary places'],
    loop: Infinity,
    delaySpeed:1000
  })
    return (
        <div className=" w-full bgi h-[60vh] mt-20 blend-darken">
          <div className="flex-col justify-center px-2 md:px-5 lg:px-10  sm:pt-0 md:pt-[3%] 
          lg:pt-[2%] xl:pt-[5%] z-10 absolute md:space-y-1 lg:space-y-2">
           <Slide>
           <h1 className="text-white font1 md:text-xl lg:text-2xl">-Introducing Travel Adventures</h1>
           </Slide>
           <Slide  duration={2000}>
           <h1 className="text-white font1 text-xl md:text-2xl lg:text-4xl xl:text-6xl xl:font-extrabold">Hosted Journeys to  <span>{text}</span></h1>
           <p className="text-white lg:font2 w-full lg:w-[800px] ">Our carefully curated itineraries take you beyond the ordinary, immersing you in the wonders of the worlds most remarkable destinations.</p>
           </Slide>
            
           <Slide  duration={3000}>
           <button className="btn rounded-none px-20 bg-amber-600 hover:bg-amber-600 md:text-lg lg:text-lg text-white">Visit Now</button>
           </Slide>
          </div>
        </div>
    );
};

export default SecondSection;