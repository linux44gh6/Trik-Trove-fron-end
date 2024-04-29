import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return  <div className="w-[70px] mx-auto">
        <span className="loading loading-spinner  w-[70px]  text-green-600"></span>
    </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate> 
};

export default PrivetRoute;