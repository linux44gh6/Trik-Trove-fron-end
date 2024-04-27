import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pagges/Home";
import ViewDetails from "../Pagges/ViewDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/places')
        },
        {
          path:'/details/:id',
          element:<ViewDetails></ViewDetails>,
          loader:({params})=>fetch(`http://localhost:5000/places/${params.id}`)
        }
      ]
    },
  ]);

  export default router