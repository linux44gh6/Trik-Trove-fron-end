import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
const MyList = () => {
    const usersPlace = useLoaderData()
    const [places,setPlace]=useState(usersPlace)
    const handleToDelete=id=>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/places/${id}`,{
            method:"DELETE",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify()
          })
          .then(res=>res.json())
          .then(()=>{
            const remainingPlace=places.filter(place=>place._id!=id)
            setPlace(remainingPlace)
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

          })
            
          }
        });
          
      }
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
                places.map(place=>
                <div  key={place._id} className=" gap-3 border border-amber-600">
                <tr className="bg-base-200 flex justify-between">
        
                <td className=" text-xl font-semibold">{place.tourists_spot_name}</td>
                <td className=" text-xl font-semibold">{place.country_name}</td>
                <td className=" text-xl font-semibold">{place.average_cost}</td>
                <td className="flex flex-col gap-2">
                  <NavLink to={`/update/${place?._id}`}><button className="btn border border-amber-600 ">Update</button></NavLink>
                  <button onClick={()=>handleToDelete(place._id)} className="btn border border-amber-600 ">Delete</button>
                  </td>
              </tr>
              </div>)
            }
                </tbody>
            </table>

           

        </div>
    );
};

export default MyList;