import Banner from "../Components/Banner";
import SecondSection from "../Components/HomesComponents/SecondSection";

const Home = () => {
    return (
        <div className="">

            <Banner></Banner>
            <div className="lg:px-5">
            <SecondSection></SecondSection>
            </div>
        </div>
    );
};

export default Home;