import { useLoaderData } from "react-router-dom";
import Place from "../Components/HomesComponents/Place";
import { useEffect, useState } from "react";

const AllSpot = () => {
    const allData=useLoaderData()
   
        return (
        <div className="bg-black">
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-5  lg:px-10 pt-24'>
                
                {
                    allData.map(place=><Place
                    key={place._id}
                    place={place}
                    ></Place>)
                }
            </div>
        </div>
    );
};

export default AllSpot;