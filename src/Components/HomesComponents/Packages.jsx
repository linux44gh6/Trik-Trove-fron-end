import PropTypes from 'prop-types'
const Packages = ({place}) => {
    const {image,country_Name,average_cost}=place
    return (
        <div className=''>  
    <div className="card  h-[300px] bg-base-100 shadow-xl image-full">
  <figure><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center uppercase">{country_Name}</h2>
   
   <div className='mt-10'>
    <h1 className=' text-xl font-bold'>4 days 4 night</h1>
   <div className='flex items-center justify-between border-t-4'>
   <h1><span className=' text-xl font-bold'>FROM USD</span><br /> <span className=' font-semibold'>per person</span></h1>
   <h1 className=' text-5xl'>{average_cost}</h1>
   </div>
   </div>
    <div className="card-actions mt-5">
      <button className="btn w-full bg-[#ffffff71] hover:bg-amber-600 border-none hover:text-white text-lg">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};
Packages.propTypes={
    place:PropTypes.object
}
export default Packages;