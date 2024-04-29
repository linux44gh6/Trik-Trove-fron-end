import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SecondSection from "../Components/HomesComponents/SecondSection";
import TouristSection from "../Components/HomesComponents/TouristSection";
import ThriedSection from "../Components/HomesComponents/ThriedSection";
import Packages from "../Components/HomesComponents/Packages";
import Story from "../Components/HomesComponents/Story";
import AllCountry from "../Components/HomesComponents/AllCountry";


const Home = () => {
    const places=useLoaderData()
    return (
        <div className="">

            <Banner></Banner>
            <div className="lg:px-5">
            <SecondSection></SecondSection>
            </div>
            <div className="mt-20">
            <TouristSection
            places={places}
            ></TouristSection>
            </div>
            <div className="">
                <ThriedSection></ThriedSection>
            </div>
            <AllCountry></AllCountry>
            <div className="mt-20 lg:px-10">
            <div>
            <h1 className="text-center font1 text-xl md:text-4xl lg:text-5xl xl:7xl font-extrabold">Our Packages</h1>
            <p className="lg:w-[700px] mx-auto text-center mb-10 font-semibold text-lg text-gray-600 mt-2">Discover a world of possibilities with our meticulously crafted packages, designed to cater to every travelers dream. From thrilling expeditions to serene getaways, our diverse range of packages offers something for everyone.</p>
            </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
               {
                    places.slice(0,6).map(place=><Packages
                    key={place._id}
                    place={place}
                    ></Packages>)
                }
               </div>
            </div>

            {/* story section */}

           <div className="lg:px-10 mt-20 ">
           <div className="mb-10">
           <h1 className="text-center font1 text-xl md:text-4xl lg:text-5xl xl:7xl font-extrabold  p-5">Our Story</h1>
           </div>
           <Story></Story>
           </div>
          
        </div>
    );
};

export default Home;