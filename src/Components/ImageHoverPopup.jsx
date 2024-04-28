import { useContext, useState } from "react";
import "./ImageHoverPopup.css";
import { AuthContext } from "./Providers/AuthProviders";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const ImageHoverPopup = () => {

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    logOut().then().catch();
    toast.error("Attention. You are LOGOUT");
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <div>
      <div
        className="image-container w-10 lg:w-14"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          src={user.photoURL ? user.photoURL : "P"}
          alt=""
          className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
        />
        {isHovering && (
          <div className="popup">
            <div className=" font-bold mb-2">
              {(user && (
                <div className="">
                  <p className="text-xl">{user.displayName}</p>
                  <div className="text-center p-5">
                    <NavLink to="/">
                      <button
                        onClick={handleSignOut}
                        className="btn btn-outline btn-warning"
                      >
                        <i className="fa-solid fa-right-from-bracket"></i>{" "}
                        Logout
                      </button>
                    </NavLink>
                  </div>
                </div>
              )) || <p>No Name</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageHoverPopup;
