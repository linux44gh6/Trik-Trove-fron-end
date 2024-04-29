import { NavLink } from "react-router-dom";
import '../Css/font.css'
const NavBar = () => {
    const link=<>
   
    <NavLink   className={({isActive})=>isActive?'font1 text-xl lg:text-white border-2 border-amber-600 px-3 bg-amber-600 rounded-sm':'font1 text-xl lg:text-white'}   to='/'><li >Home</li></NavLink>
    <NavLink   className={({isActive})=>isActive?'font1 text-xl lg:text-white border-2 border-amber-600 px-3 bg-amber-600 rounded-sm':'font1 text-xl lg:text-white'} to='/allSpot'><li>All Tourists Spot</li></NavLink>
    <NavLink   className={({isActive})=>isActive?'font1 text-xl lg:text-white border-2 border-amber-600 px-3 bg-amber-600 rounded-sm':'font1 text-xl lg:text-white'} to='/addSpot'><li>Add Tourists Spot</li></NavLink>
    <NavLink   className={({isActive})=>isActive?'font1 text-xl lg:text-white border-2 border-amber-600 px-3 bg-amber-600 rounded-sm':'font1 text-xl lg:text-white'}  to='/myList'><li>My List</li></NavLink>
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
  <div className="navbar-end flex gap-2">
    <NavLink to='/login'><button className="btn bg-amber-600">Login</button></NavLink>
    <NavLink to='/registration'><button className="btn bg-amber-600">Register</button></NavLink>
  </div>
</div>
        </div>
    );
};

export default NavBar;