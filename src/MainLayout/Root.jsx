import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;