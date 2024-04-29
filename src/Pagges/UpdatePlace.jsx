
const UpdatePlace = () => {
    const handleToSubmit=e=>{
        e.preventDefault()
    }
    return (
        <div className="bg-black h-[100vh] pt-10">
             <div className=" p-10 w-full absolute  z-10">
            <h1 className="text-6xl font-bold mb-5 text-center uppercase text-amber-600">Add Tourist spot</h1>
            <form onSubmit={handleToSubmit} className=" space-y-3 content-center">
            <div className="flex gap-4 justify-center items-center">
           <input type="text" name="Name" placeholder="User Name" className="input input-bordered input-warning w-full max-w-xs" required />
           <input type="email" name="email" placeholder="User Email" className="input input-bordered input-warning w-full max-w-xs" required />
           </div>
           <div className="flex gap-4 justify-center items-center">
           <input type="text" name="name2" placeholder="tourists_spot_name" className="input input-bordered input-warning w-full max-w-xs" required />

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
           
           <input className="  btn  bg-[#D2B48C] text-xl" type="submit" value="Add" />
          </div>
            </form>
        </div>
        </div>
    );
};

export default UpdatePlace;