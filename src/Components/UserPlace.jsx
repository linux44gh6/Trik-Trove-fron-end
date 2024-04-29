import { NavLink } from "react-router-dom";

const UserPlace = ({place}) => {
  const {_id,tourists_spot_name,country_name,average_cost}=place
    return (
        <div className="border border-amber-600 w-full">
             <tr className="bg-base-200 flex justify-between">
        
        <td className=" text-xl font-semibold">{tourists_spot_name}</td>
        <td className=" text-xl font-semibold">{country_name}</td>
        <td className=" text-xl font-semibold">{average_cost}</td>
        <td className="flex flex-col gap-2">
          <NavLink to={`/update/${_id}`}><button className="btn border border-amber-600 ">Update</button></NavLink>
          <button className="btn border border-amber-600 ">Delete</button>
          </td>
      </tr>
        </div>
    );
};

export default UserPlace;