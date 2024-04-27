import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SecondSection from "../Components/HomesComponents/SecondSection";
import TouristSection from "../Components/HomesComponents/TouristSection";
import ThriedSection from "../Components/HomesComponents/ThriedSection";
import Packages from "../Components/HomesComponents/Packages";

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
            <div className="mt-20 lg:px-10">
            <h1 className="text-center font1 text-xl md:text-4xl lg:text-5xl xl:7xl font-extrabold">Our Packages</h1>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
               {
                    places.map(place=><Packages
                    key={place._id}
                    place={place}
                    ></Packages>)
                }
               </div>
            </div>
        </div>
    );
};

export default Home;