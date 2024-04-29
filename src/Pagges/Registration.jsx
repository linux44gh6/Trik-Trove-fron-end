import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Swal from 'sweetalert2'

const Registration = () => {
    const {createUser,updateUserProfile,loading}=useContext(AuthContext)
    const [visible,setVisible]=useState(true)
    const location=useLocation()
    const from=location?.state||'/'
    const handleToSubmit=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const url=e.target.url.value
        const email=e.target.email.value
        const password=e.target.password.value
        if(!/[a-z]/.test(password)){
            Swal.fire({
                icon: "error",
                title: "At least 1 lowerCase",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        else if(!/[A-Z]/.test(password)){
            Swal.fire({
                icon: "error",
                title: "At least 1 Uppercase",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        else if(password.length<6){
            Swal.fire({
                icon: "error",
                title: "password should be 6 character",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        createUser(email,password)
        .then(result=>{
            updateUserProfile(name,url)
            .then(()=>{

                Navigate(from)
            
            })
            .catch(error=>{
                console.log(error.message);
            })
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration success",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error=>{
            Swal.fire({
                icon: "error",
                title: `${error.message}`,
                text: "Something went wrong!",
               
              });
        })
    }
   
    return (
        <div className="bg-black z-0">
             <div>
            <div className="hero min-h-screen pt-20 ">
  <div className="hero-content flex-col w-full">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-amber-600  ">Register now</h1>
    </div>
    <div className=" card shrink-0  w-1/2 shadow-2xl bg-base-300">
      <form className="card-body" onSubmit={handleToSubmit}>
       
       <div className="flex gap-3">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name="url" placeholder="Your Photo URL" className="input input-bordered"  />
        </div>
       </div>
       
       <div className="flex gap-4">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={visible?"password":"text"} name="password" placeholder="password" className="input input-bordered" required />
          {
          visible?<IoMdEye onClick={()=>setVisible(!true)} className="text-2xl"></IoMdEye>:<IoMdEyeOff onClick={()=>setVisible(!false)} className="text-2xl"></IoMdEyeOff>
         }
        </div>
       </div>
       
        <div className="form-control mt-6">
          <button className="btn border border-amber-600 hover:bg-amber-600 hover:text-white">Register</button>
        </div>
        <p>Already an Account?please <NavLink to='/login' className='text-blue-900 font-bold text-xl underline'>Login</NavLink></p>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registration;