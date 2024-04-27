import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SecondSection from "../Components/HomesComponents/SecondSection";
import TouristSection from "../Components/HomesComponents/TouristSection";

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
        </div>
    );
};

export default Home;