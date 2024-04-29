import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pagges/Home";
import ViewDetails from "../Pagges/ViewDetails";
import AddSpot from "../Pagges/AddSpot";
import AllSpot from "../Pagges/AllSpot";
import MyList from "../Pagges/MyList";
import Login from "../Pagges/Login";
import Registration from "../Pagges/Registration";
import PrivetRoute from "../PriverRoute/PrivetRoute";
import Error from "../Pagges/Error";
import UpdatePlace from "../Pagges/UpdatePlace";
import CountrySpot from "../Pagges/CountrySpot";
import SpotDetails from "../Pagges/SpotDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/places'),
            
        },
        {
          path:'/details/:id',
          element:<PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/places/${params.id}`)
        }
        
        ,{
          path:'/addSpot',
          element:<PrivetRoute><AddSpot></AddSpot></PrivetRoute>
        },
        {
          path:'/allSpot',
          element:<AllSpot></AllSpot>,
          loader:()=>fetch('http://localhost:5000/places')
        },
        {
          path:'/myList/:email',
          element:<PrivetRoute><MyList></MyList></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/place/${params.email}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/update/:id',
          element:<UpdatePlace></UpdatePlace>,
          loader:({params})=>fetch(`http://localhost:5000/places/${params.id}`)
        },
        {
          path:'/place/:name',
          element:<CountrySpot></CountrySpot>,
          loader:({params})=>fetch(`http://localhost:5000/allCountry/${params.name}`)
        },
        {
          path:'/detail/:id',
          element:<PrivetRoute><SpotDetails></SpotDetails></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/country/${params.id}`)
        }
      
      ]
    },
  ]);

  export default router