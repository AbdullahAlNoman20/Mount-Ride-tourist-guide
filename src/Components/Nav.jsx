import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";
import ImageHoverPopup from "./ImageHoverPopup";

const Nav = () => {

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  // const handleSignOut = () => {
  //   logOut().then().catch();
  //   toast.error("Attention. You are LOGOUT");
  // };

  return (
    <div className="p-5 bg-yellow-800 text-white ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="text-black menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">
                <li>
                  <a>
                    <i className="fa-solid fa-house"></i>Home
                  </a>
                </li>
              </NavLink>
              <NavLink to="/about">
                <li>
                  <a>
                    <i className="fa-solid fa-earth-asia"></i>All Tourist
                    Spot/about
                  </a>
                </li>
              </NavLink>

              <NavLink to="/updateProfile">
                <li>
                  <a>
                    <i className="fa-solid fa-user-tie"></i>Profile
                  </a>
                </li>
              </NavLink>
              <NavLink to="/addSpot">
                <li>
                  <a>
                    <i className="fa-solid fa-plus"></i>Add Tourist Spot
                  </a>
                </li>
              </NavLink>
              <NavLink to="/myList">
                <li>
                  <a>
                    <i className="fa-solid fa-list-check"></i>My List
                  </a>
                </li>
              </NavLink>
            </ul>
          </div>
          <a
            className="text-xl lg:text-2xl lg:font-bold"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            MOUNT
            <span className="text-yellow-500">R</span>IDE
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <NavLink to="/">
              <li>
                <a>
                  <i className="fa-solid fa-house"></i>Home
                </a>
              </li>
            </NavLink>
            <NavLink to="/about">
              <li>
                <a>
                  <i className="fa-solid fa-earth-asia"></i>All Tourist
                  Spot/about
                </a>
              </li>
            </NavLink>

            <NavLink to="/updateProfile">
              <li>
                <a>
                  <i className="fa-solid fa-user-tie"></i>Profile
                </a>
              </li>
            </NavLink>
            <NavLink to="/addSpot">
              <li>
                <a>
                  <i className="fa-solid fa-plus"></i>Add Tourist Spot
                </a>
              </li>
            </NavLink>
            <NavLink to="/myList">
              <li>
                <a>
                  <i className="fa-solid fa-list-check"></i>My List
                </a>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end ">
          <div className=" ">
            {user?.email ? (
              <div className="relative flex-shrink-0 mr-5">
                <ImageHoverPopup></ImageHoverPopup>
                <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
                <title>Name</title>
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>
          {user ? (
            <div className=""></div>
            // <NavLink to="/">
            //   <button
            //     onClick={handleSignOut}
            //     className="btn btn-outline btn-sm btn-warning"
            //   >
            //     <i className="fa-solid fa-right-from-bracket"></i> Logout
            //   </button>
            // </NavLink>
          ) : (
            <div className=" flex gap-5 ">
              <NavLink to="/login">
              <button className="btn btn-outline btn-warning hidden lg:block">
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </button>
            </NavLink>
              <NavLink to="/register">
              <button className="btn btn-outline btn-success ">
                <i className="fa-solid fa-right-to-bracket"></i> Register
              </button>
            </NavLink>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Nav;
