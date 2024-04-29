import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
const UpdatePlace = () => {
    const data=useLoaderData()
        const{_id}=data
        console.log(_id);
    const handleToSubmit=e=>{
        e.preventDefault()
        const form=e.target
        const tourists_spot_name=form.name2.value
        const short_description=form.description.value
        const country_Name=form.country_name.value
        const average_cost=form.average_cost.value
        const seasonality=form.seasonality.value
        const travel_time=form.travel_time.value
        const totalVisitorsPerYear=form.totalVisitorsPerYear.value
        const location=form.location.value
        const image=form.image.value
        const place2={tourists_spot_name,short_description,country_Name,average_cost,seasonality,travel_time,totalVisitorsPerYear,location,image}
        
        fetch(`http://localhost:5000/places/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(place2)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Place updated successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            console.log(data);
        })
    }
    return (
        <div className="bg-black h-[100vh] pt-10">
             <div className=" p-10 w-full absolute  z-10">
            <h1 className="text-6xl font-bold mb-5 text-center uppercase text-amber-600">Update Tourist spot</h1>
            <form onSubmit={handleToSubmit} className=" space-y-3 content-center">
           
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="name2"  placeholder="tourists_spot_name" className="input input-bordered input-warning w-full max-w-xs" required />

           <input type="text" name="country_name" placeholder="country_Name" className="input input-bordered input-warning w-full max-w-xs" required />
           </div>
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="location" placeholder=" location" className="input input-bordered input-warning w-full max-w-xs" required />

           <input type="text" name="description" placeholder="short description" className="input input-bordered input-warning w-full max-w-xs" />
           </div>
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="average_cost" placeholder="average_cost" className="input input-bordered input-warning w-full max-w-xs" required />

           <input type="text" name="seasonality" placeholder=" seasonality" className="input input-bordered input-warning w-full max-w-xs" required />
           </div>
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="travel_time" placeholder="Travel_time" className="input input-bordered input-warning w-full max-w-xs" required />

           <input type="number" name="totalVisitorsPerYear" placeholder="total Visitors Per Year" className="input input-bordered input-warning w-full max-w-xs" required />
           </div>
          
          <div className='flex flex-col w-[51%] mx-auto gap-4'>
          <input type="url" name="image" placeholder="Image URL" className="input input-bordered input-warning" required />
           
           <input className="  btn  bg-[#D2B48C] text-xl" type="submit" value="Update" />
          </div>
            </form>
        </div>
        </div>
    );
};

export default UpdatePlace;