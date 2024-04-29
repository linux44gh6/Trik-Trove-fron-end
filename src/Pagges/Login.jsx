import { useContext, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import Swal from 'sweetalert2'
const Login = () => {
    const {LogIn}=useContext(AuthContext)
    const handleToSubmit=e=>{
        e.preventDefault()
        const email=e.target.email.value
    const password=e.target.password.value
    // console.log(email,password);
    LogIn(email,password)
    .then(result=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500
          });
      const user=result.user
      console.log(user);
      
    })
    .catch(error=>{
      console.log(error.message);
    })
    
    }

    const handleToGitHubLogIn=()=>{

    }
    const handleToGoogleLogIn=()=>{

    }
    const [visible,setVisible]=useState(true)
    return (
        <div className=" bg-black pt-10">
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col  w-full">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold body text-amber-600">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleToSubmit}>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Do you have an Account?please <NavLink to='/registration' className=' text-blue-900 font-bold text-xl underline'>Register</NavLink></p>
      <div className="flex justify-center items-center gap-2 border-t">
        <p className=" font-bold">Login with</p>
        <button onClick={handleToGoogleLogIn} className=" btn border-2 border-purple-600"><FcGoogle className="text-2xl"></FcGoogle></button>
        <button onClick={handleToGitHubLogIn} className=" btn border-2 border-purple-600"><FaGithub className="text-2xl"></FaGithub></button>
      </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;