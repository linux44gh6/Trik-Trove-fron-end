import {  useLoaderData } from "react-router-dom";

import SingleSpot from "../Components/SingleSpot";

const CountrySpot = () => {
    const countrySpots=useLoaderData()
   
    
    return (
        <div className="lg:px-10 bg-black h-[100vh] pt-20 z-0">
            {
                countrySpots.map(spot=><SingleSpot
                key={spot._id}
                spot={spot}
                ></SingleSpot>)
            }
           
        </div>
    );
};

export default CountrySpot;