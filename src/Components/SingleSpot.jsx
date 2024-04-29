import { FaDollarSign } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TiWorld } from "react-icons/ti";
import { NavLink } from "react-router-dom";
const SingleSpot = ({spot}) => {
    const {image,short_description,_id,country_Name,location,average_cost,tourists_spot_name}=spot
    return (
        <div>
            <div className="card h-[460px] w-96 bg-base-100 shadow-xl mt-10 ">
                <figure><img className='h-[300px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font1 text-3xl font-extrabold hover:text-amber-600 transition-all">{tourists_spot_name}</h2>
                    <p className='font2 text-lg text-gray-600 font-semibold'>{short_description}</p>
                    <div className='flex gap-2 lg:gap-10'>
                        <h1 className='flex items-center text-xl font-semibold'><TiWorld className='text-2xl'></TiWorld>{country_Name}</h1>
                        <h1 className='flex items-center text-xl font-semibold'><CiLocationOn className='text-2xl' ></CiLocationOn>{location}</h1>
                        <h1 className='flex items-center text-xl font-semibold'><FaDollarSign className='text-2xl'></FaDollarSign>{average_cost}</h1>
                    </div>
                    <div className="card-actions">
                       <NavLink to={`/detail/${_id}`} className='w-full'>
                       <button className="btn w-full border border-amber-700 hover:bg-amber-600  hover:text-white text-lg ">View Details</button>
                       </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSpot;