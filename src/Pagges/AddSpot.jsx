import '../Css/addSpot.css'
import Swal from 'sweetalert2'
const AddSpot = () => {
    const handleToSubmit=e=>{
        e.preventDefault()
        const form=e.target
        const name=form.Name.value
        const email=form.email.value
        const tourists_spot_name=form.name2.value
        const short_description=form.description.value
        const country_Name=form.country_name.value
        const average_cost=form.average_cost.value
        const seasonality=form.seasonality.value
        const travel_time=form.travel_time.value
        const totalVisitorsPerYear=form.totalVisitorsPerYear.value
        const location=form.location.value
        const image=form.image.value
       const places={name,email,tourists_spot_name,short_description,country_Name,average_cost,seasonality,travel_time,totalVisitorsPerYear,image,location}
       console.log(places);
        //send data to the server side

        fetch('http://localhost:5000/places',{
            method:"POST",
            headers:{
                "content-type":"Application/json"
            },
            body:JSON.stringify(places)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Place added successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            form.reset()
            console.log(data);
        })
    }
    return (
        <div className='spot h-[100vh]  w-full pt-12'>
            <div className=" p-10 w-full absolute  z-10">
            <h1 className="text-6xl font-bold mb-5 text-center uppercase text-amber-600">Add Tourist spot</h1>
            <form onSubmit={handleToSubmit} className=" space-y-3 content-center">
            <div className="flex gap-4 justify-center items-center">
           <input type="text" name="Name" placeholder="User Name" className="input input-bordered input-warning w-full max-w-xs" />
           <input type="email" name="email" placeholder="User Email" className="input input-bordered input-warning w-full max-w-xs" />
           </div>
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="name2" placeholder="tourists_spot_name" className="input input-bordered input-warning w-full max-w-xs" />

           <input type="text" name="country_name" placeholder="country_Name" className="input input-bordered input-warning w-full max-w-xs" />
           </div>
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="location" placeholder=" location" className="input input-bordered input-warning w-full max-w-xs" />

           <input type="text" name="description" placeholder="short description" className="input input-bordered input-warning w-full max-w-xs" />
           </div>
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="average_cost" placeholder="average_cost" className="input input-bordered input-warning w-full max-w-xs" />

           <input type="text" name="seasonality" placeholder=" seasonality" className="input input-bordered input-warning w-full max-w-xs" />
           </div>
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="travel_time" placeholder="Travel_time" className="input input-bordered input-warning w-full max-w-xs" />

           <input type="number" name="totalVisitorsPerYear" placeholder="total Visitors Per Year" className="input input-bordered input-warning w-full max-w-xs" />
           </div>
          
          <div className='flex flex-col w-[51%] mx-auto gap-4'>
          <input type="url" name="image" placeholder="Image URL" className="input input-bordered input-warning " />
           
           <input className="  btn  bg-[#D2B48C] text-xl" type="submit" value="Add" />
          </div>
            </form>
        </div>
        </div>
    );
};

export default AddSpot;