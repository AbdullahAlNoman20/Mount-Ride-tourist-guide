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
import Details from "./Components/Details";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Components/Providers/AuthProviders";
import Profile from "./Components/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import AddTouristSpot from './Components/AddTouristSpot';
import MyList from './Components/MyList';
import UpdateSpot from './Components/UpdateSpot';

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
        path: "/about",
        element: <About></About>,
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
        path: "/details/:id",
        element: <ProtectedRoute><Details></Details></ProtectedRoute>,
        loader: () => fetch("../Service.json")
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
        loader: ()=>fetch('http://127.0.0.1:5000/spot')
      },
      {
        path: 'updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`http://127.0.0.1:5000/spot/${params.id}`)
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
