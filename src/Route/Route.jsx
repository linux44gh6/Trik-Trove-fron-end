import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pagges/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/places')
        }
      ]
    },
  ]);

  export default router