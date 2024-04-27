import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SecondSection from "../Components/HomesComponents/SecondSection";
import TouristSection from "../Components/HomesComponents/TouristSection";
import ThriedSection from "../Components/HomesComponents/ThriedSection";

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
            <div>
                <ThriedSection></ThriedSection>
            </div>
        </div>
    );
};

export default Home;