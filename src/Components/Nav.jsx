import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";
import ImageHoverPopup from "./ImageHoverPopup";
import { Typewriter } from "react-simple-typewriter";

// for Writing Style

const Nav = () => {
  const [them, setThem] = useState("aqua");

  useEffect(() => {
    localStorage.setItem("them", them);
    const localTheme = localStorage.getItem("them");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [them]);

  const handleToggleColor = (e) => {
    if (e.target.checked) {
      setThem("retro");
    } else {
      setThem("aqua");
    }
  };

  // console.log(them)

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  // const handleSignOut = () => {
  //   logOut().then().catch();
  //   toast.error("Attention. You are LOGOUT");
  // };

  return (
    <div className="p-1 lg:p-5  ">
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
              className="text-black menu menu-sm dropdown-content mt-3 z-[10] p-2 rounded-box w-52"
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
          <a className="text-xl font-bold lg:text-2xl lg:font-bold text-black">
            Mount <span className="text-red-700 mr-2">Ride</span>
          </a>

          <span className="hidden lg:block" style={{ color: "black", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Adventure", "Exploration", "Wanderlust", "Discovery"]}
              loop={""}
              cursor
              cursorStyle="✈️"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
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
            <NavLink to="/allTouristSpot">
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
          <div className=" mr-5">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input onChange={handleToggleColor} type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-9 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-9 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
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
          ) : (
            // <NavLink to="/">
            //   <button
            //     onClick={handleSignOut}
            //     className="btn btn-outline btn-sm btn-warning"
            //   >
            //     <i className="fa-solid fa-right-from-bracket"></i> Logout
            //   </button>
            // </NavLink>
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
