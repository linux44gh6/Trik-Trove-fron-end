import { useEffect, useState } from "react";
import SingleCountry from "../SingleCountry";

const AllCountry = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allCountry")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className="mt-20">
             <h1 className="text-center text-5xl font1 mb-10">Popular Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:px-10">
               
                {
                    countries.slice(0,6).map(country=><SingleCountry
                    country={country}
                    key={countries._id}
                    ></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default AllCountry;