import '../../Css/ThriedSection.css'
const ThriedSection = () => {
    return (
        <div className='bgi2 h-[70vh]'>
             <div className="flex-col justify-center px-2 md:px-5 lg:px-10  pt-[10%] md:pt-[5%] 
          lg:pt-[2%] xl:pt-[5%] z-10 absolute md:space-y-1 lg:space-y-2">
            <h1 className="text-white font1 text-xl md:text-xl lg:text-2xl">-Introducing Travel Adventures</h1>
            <h1 className="text-white font1 text-2xl md:text-2xl lg:text-4xl xl:text-6xl xl:font-extrabold">Hosted Journeys to Extraordinary Places</h1>
            <p className="text-white lg:font2 w-full lg:w-[800px] ">Our carefully curated itineraries take you beyond the ordinary, immersing you in the wonders of the worlds most remarkable destinations.</p>
            <button className="btn px-20 bg-amber-600 hover:bg-amber-600 md:text-lg lg:text-lg text-white rounded-none">Explore Now</button>
          </div>
        </div>
    );
};

export default ThriedSection;