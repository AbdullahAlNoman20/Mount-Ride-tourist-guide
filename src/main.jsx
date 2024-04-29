import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Components/Providers/AuthProviders";
import Profile from "./Components/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import AddTouristSpot from './Components/AddTouristSpot';
import MyList from './Components/MyList';
import UpdateSpot from './Components/UpdateSpot';
import CountryDetails from './Components/CountryDetails';
import SpotDetails from './Components/SpotDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allTouristSpot",
        element: <ProtectedRoute><About></About></ProtectedRoute>,
        loader: ()=>fetch('https://mountrideserver.vercel.app/spot')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/spotDetails/:id",
        element: <ProtectedRoute><SpotDetails></SpotDetails></ProtectedRoute>,
        loader: ()=>fetch('/Service.json')
      },
      {
        path: "/countryDetails/:id",
        element: <ProtectedRoute><CountryDetails></CountryDetails></ProtectedRoute>,
        loader: ()=>fetch('/Country.json')
      },
      {
        path: "/updateProfile",
        element: <ProtectedRoute><Profile></Profile></ProtectedRoute>,
      },
      {
        path: "/addSpot",
        element: <ProtectedRoute><AddTouristSpot></AddTouristSpot></ProtectedRoute>,
      },
      {
        path: "/myList",
        element: <ProtectedRoute><MyList></MyList></ProtectedRoute>,
        loader: ()=>fetch('https://mountrideserver.vercel.app/spot')
      },
      {
        path: '/myList/updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`https://mountrideserver.vercel.app/spot/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProviders>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
  
);
