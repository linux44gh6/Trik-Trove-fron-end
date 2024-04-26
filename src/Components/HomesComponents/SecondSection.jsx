import "../../Css/SecondSection.css"
const SecondSection = () => {
    return (
        <div className=" w-full bgi h-[60vh] mt-20 blend-darken">
          <div className="flex-col justify-center px-10 pt-[5%] z-10 absolute space-y-2">
            <h1 className="text-white font1 text-2xl">-Introducing Travel Adventures</h1>
            <h1 className="text-white font1 text-4xl">Hosted Journeys to Extraordinary Places</h1>
            <p className="text-white font2 lg:w-[800px]">Our carefully curated itineraries take you beyond the ordinary, immersing you in the wonders of the worlds most remarkable destinations. Whether youre tracing the footsteps of ancient civilizations, exploring hidden gems off the beaten path, or marveling at natural wonders that defy imagination, our expertly guided tours ensure that every aspect of your journey is seamless and unforgettable. </p>
            <button className="btn px-20 bg-amber-600 hover:bg-amber-600 text-lg text-white">Visit Now</button>
          </div>
        </div>
    );
};

export default SecondSection;