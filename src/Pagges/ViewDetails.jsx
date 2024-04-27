import { useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TiWorld } from "react-icons/ti";
const ViewDetails = () => {
    const place=useLoaderData()
    const {image,tourists_spot_name,country_Name,location,seasonality,description,average_cost,totalVisitorsPerYear,travel_time,short_description}=place
    console.log(place);
    return (
        <div className=" relative">
            <img className=" overlay h-[60vh] w-full object-cover" src={image} alt="" />

            <div className="flex px-10 mt-10 p-5 gap-5">
                <div>
                    <h1 className=" font-extrabold text-3xl font1">About</h1>
                    <p className="font-semibold text-gray-600 text-lg">{description}</p>
                </div>
                <div>
                <div className="card w-96 bg-base-100 shadow-lg border border-amber-600 space-y-6">
  <div className="card-body space-y-2">
    <div className="flex justify-between border-b-2 border-amber-600 space-y-1">
        <h1><span className=" font-bold text-xl">FROM USD</span> <br /> <span className=" font-semibold">per person</span></h1>
        <h2 className="card-title"><span className="text-7xl">{average_cost}</span></h2>
    </div>
    <div className="flex gap-10">
        <h1 className="flex items-center text-xl font-bold"><TiWorld></TiWorld>{country_Name}</h1>
        <h1 className="flex items-center text-xl font-bold"><CiLocationOn></CiLocationOn>{location}</h1>
    </div>
<h1 className=" capitalize text-xl font-semibold">travel time: <span className=" text-amber-600">{travel_time}</span></h1>
    <h2 className=" capitalize text-xl font-semibold">Visitor of year:<span className=" text-amber-600">{totalVisitorsPerYear}</span></h2>
    <p className=" font-semibold text-gray-600">{short_description}</p>
    <div className="card-actions ">
      <button className="btn w-full border border-amber-600 ">Book Now</button>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;