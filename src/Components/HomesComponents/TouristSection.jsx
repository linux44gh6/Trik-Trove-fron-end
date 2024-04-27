import PropTypes from 'prop-types'
import Place from './Place';
const TouristSection = ({places}) => {
    console.log(places);
    return (
        <div>
           <div>
           <h1 className=" text-center font1 text-xl md:text-4xl lg:text-5xl xl:7xl font-extrabold">Our Destinations</h1>
            <p className="lg:w-[750px] mx-auto text-center font2 text-lg">Our Destinations: Exploring the Wonders of the World, From Majestic Mountains to Pristine Beaches. Uncover Hidden Gems and Create Memories That Last a Lifetime.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-5  lg:px-10 mt-20'>
            {
                places.map(place=><Place
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