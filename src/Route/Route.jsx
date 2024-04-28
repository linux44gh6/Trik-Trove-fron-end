import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pagges/Home";
import ViewDetails from "../Pagges/ViewDetails";
import AddSpot from "../Pagges/AddSpot";
import AllSpot from "../Pagges/AllSpot";
import MyList from "../Pagges/MyList";

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
        ,{
          path:'/addSpot',
          element:<AddSpot></AddSpot>
        },
        {
          path:'/allSpot',
          element:<AllSpot></AllSpot>,
          loader:()=>fetch('http://localhost:5000/places')
        },
        {
          path:'/myList',
          element:<MyList></MyList>
        }
      
      ]
    },
  ]);

  export default router