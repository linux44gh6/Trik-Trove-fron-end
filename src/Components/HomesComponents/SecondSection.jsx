import "../../Css/SecondSection.css"
const SecondSection = () => {
    return (
        <div className=" w-full bgi h-[60vh] mt-20 blend-darken">
          <div className="flex-col justify-center md:px-5 lg:px-10 pt-0 sm:pt-0 md:pt-[2%] lg:pt-[2%] xl:pt-[0%] z-10 absolute md:space-y-1 lg:space-y-2">
            <h1 className="text-white font1 md:text-xl lg:text-2xl">-Introducing Travel Adventures</h1>
            <h1 className="text-white font1 text-xl md:text-2xl lg:text-4xl">Hosted Journeys to Extraordinary Places</h1>
            <p className="text-white lg:font2 w-full lg:w-[800px] ">Our carefully curated itineraries take you beyond the ordinary, immersing you in the wonders of the worlds most remarkable destinations. Whether youre tracing the footsteps of ancient civilizations, exploring hidden gems off the beaten path, or marveling at natural wonders that defy imagination</p>
            <button className="btn px-20 bg-amber-600 hover:bg-amber-600 md:text-lg lg:text-lg text-white">Visit Now</button>
          </div>
        </div>
    );
};

export default SecondSection;