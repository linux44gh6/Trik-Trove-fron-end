import { NavLink } from "react-router-dom";
import '../Css/font.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext)
  const lgs=localStorage.getItem('theme')
    const [theme,setTheme]=useState(lgs)
    useEffect(() => {
      document.documentElement.classList.add(theme);
    }, []);
    
    const toggleTheme = () => {
      if (theme === 'light') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
        setTheme('light');
      }}
  const handToLogOut=()=>{
    logOut()
  }
    const link=<>
    <NavLink   className={({isActive})=>isActive?'font1 text-xl lg:text-white border-2 border-amber-600 px-3 bg-amber-600 rounded-sm':'font1 text-xl lg:text-white'}   to='/'><li >Home</li></NavLink>
    <NavLink   className={({isActive})=>isActive?'font1 text-xl lg:text-white border-2 border-amber-600 px-3 bg-amber-600 rounded-sm':'font1 text-xl lg:text-white'} to='/allSpot'><li>All Tourists Spot</li></NavLink>
    <NavLink   className={({isActive})=>isActive?'font1 text-xl lg:text-white border-2 border-amber-600 px-3 bg-amber-600 rounded-sm':'font1 text-xl lg:text-white'} to='/addSpot'><li>Add Tourists Spot</li></NavLink>
    <NavLink   className={({isActive})=>isActive?'font1 text-xl lg:text-white border-2 border-amber-600 px-3 bg-amber-600 rounded-sm':'font1 text-xl lg:text-white'}  to={`/myList/${user?.email}`}><li>My List</li></NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-[#ffffff6d]  fixed z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
      </ul>
    </div>
    <a className=" flex flex-col md:flex-row lg:flex-row items-center text-xl  "><img className=" w-10 lg:w-20" src="https://i.ibb.co/sH6v1hg/4112864-removebg-preview.png" alt="" /><h1 className="font1 text-xl md:text-3xl lg:text-3xl text-white font-bold">TrekTrove</h1></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-7">
      {link}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">

   {user?
   
   <div className="flex items-center gap-1 md:gap-2 lg:gap-2">
    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
  <button className=""><img className=" rounded-full w-12" src={user.
photoURL} alt="" /></button>
</div>  
<div className="flex flex-col md:flex-row lg:flex-row">
<NavLink><button onClick={handToLogOut} className="btn bg-amber-600 text-white ">LogOut</button></NavLink>
<label className="cursor-pointer grid place-items-center">
  <input  onClick={toggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 lg:visible"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</div>
   </div>:
   
   <>
   <div className="flex flex-col md:flex-row lg:flex-row gap-1">
   <NavLink to='/login'><button className="btn w-full  bg-amber-600 text-white hover:bg-amber-600">Login</button></NavLink>
    <NavLink to='/registration'><button className="btn bg-amber-600 text-white hover:bg-amber-600">Register</button></NavLink>
   </div>
    <label className="cursor-pointer grid place-items-center">
  <input onClick={toggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
   </>
   }
  </div>
</div>
        </div>
    );
};

export default NavBar;