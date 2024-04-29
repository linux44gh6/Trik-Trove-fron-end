import { NavLink } from "react-router-dom";

const SingleCountry = ({country}) => {
    const {country_Name,image}=country
    return (
        <div>
   <NavLink to={`/place/${country_Name}`}>
   <div className="card  bg-base-100 shadow-xl h-[300px] image-full">
  <figure><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title ps-20">{country_Name}</h2> 
  </div>
</div>
   </NavLink>
        </div>
    );
};

export default SingleCountry;