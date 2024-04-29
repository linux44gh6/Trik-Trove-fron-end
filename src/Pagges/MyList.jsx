import { useLoaderData } from "react-router-dom";
import UserPlace from "../Components/UserPlace";

const MyList = () => {
    const usersPlace = useLoaderData()
        
    return (
        <div className="pt-14 bg-black h-[100vh]  ">
            <table className="table w-full mt-10">
                {/* head */}
                <thead className="w-full">
                    <tr className="flex justify-between">
                        
                        <th className=" text-xl text-white">Name</th>
                        <th className=" text-xl text-white">Country</th>
                        <th className=" text-xl text-white">Amount</th>
                        <th className=" text-xl text-white"></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    
                    {
                usersPlace.map(place =><UserPlace
                key={place._id}
                place={place}
                ></UserPlace>)
            }
                </tbody>
            </table>

           

        </div>
    );
};

export default MyList;