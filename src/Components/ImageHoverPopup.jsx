import { useContext, useState } from "react";
import "./ImageHoverPopup.css";
import { AuthContext } from "./Providers/AuthProviders";

const ImageHoverPopup = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

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
              {user && (
                <p className="">{user.displayName}</p>
              )|| <p>No Name</p>}
            </div>

            <div className="">
              {user && <p className="underline ">{user.email}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageHoverPopup;
