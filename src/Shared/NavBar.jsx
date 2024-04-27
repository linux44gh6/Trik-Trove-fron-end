import { NavLink } from "react-router-dom";
import '../Css/font.css'
const NavBar = () => {
    const link=<>
    <NavLink><li className="font1 text-xl lg:text-white">Home</li></NavLink>
    <NavLink><li className="font1 text-xl lg:text-white">All Tourists Spot</li></NavLink>
    <NavLink><li className="font1 text-xl lg:text-white">Add Tourists Spot</li></NavLink>
    <NavLink><li className="font1 text-xl lg:text-white">My List</li></NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-[#ffffff6d]  fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
      </ul>
    </div>
    <a className=" flex items-center text-xl"><img className="w-20" src="https://i.ibb.co/sH6v1hg/4112864-removebg-preview.png" alt="" /><h1 className="font1 text-3xl text-white font-bold">TrekTrove</h1></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-7">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;