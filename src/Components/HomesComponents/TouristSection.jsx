import PropTypes from 'prop-types'
import Place from './Place';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
const TouristSection = ({places}) => {
    const [text] = useTypewriter({
        words: ['Destinations'],
        loop:2,
        delaySpeed:1000
      })
    console.log(places);
    return (
        <div>
           <div>
           <h1 className=" text-center font1 dark:text-white text-xl md:text-4xl lg:text-5xl xl:7xl font-extrabold">Our <span>{text}</span></h1>
            <p className="lg:w-[750px] mx-auto text-center font2 mt-2 font-semibold text-lg text-gray-600 dark:text-white">Our Destinations: Exploring the Wonders of the World, From Majestic Mountains to Pristine Beaches. Uncover Hidden Gems and Create Memories That Last a Lifetime.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-5  lg:px-10 mt-20'>
            {
                places.slice(0,6).map(place=><Place
                key={place._id}
                place={place}
                ></Place>)
            }
           </div>
        </div>
    );
};
TouristSection.propTypes={
    places:PropTypes.any
}
export default TouristSection;