import PropTypes from 'prop-types'
import { FaDollarSign } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TiWorld } from "react-icons/ti";
const Place = ({ place }) => {
    const {image,tourists_spot_name,location,short_description,country_Name,average_cost}=place
    return (
        <div>
            <div className="card h-[560px]  bg-base-100 shadow-xl ">
                <figure><img className='h-[300px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font1 text-3xl font-extrabold">{tourists_spot_name}</h2>
                    <p className='font2 text-lg text-gray-600 font-semibold'>{short_description}</p>
                    <div className='flex gap-10'>
                        <h1 className='flex items-center text-xl font-semibold'><TiWorld className='text-2xl'></TiWorld>{country_Name}</h1>
                        <h1 className='flex items-center text-xl font-semibold'><CiLocationOn className='text-2xl' ></CiLocationOn>{location}</h1>
                        <h1 className='flex items-center text-xl font-semibold'><FaDollarSign className='text-2xl'></FaDollarSign>{average_cost}</h1>
                    </div>
                    <div className="card-actions">
                        <button className="btn w-full border border-amber-700 hover:bg-amber-600  hover:text-white text-lg ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Place.propTypes={
  place:PropTypes.object
}
export default Place;