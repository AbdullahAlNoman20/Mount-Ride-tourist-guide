import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
const Profile = ({ children }) => {
  const { user, updateUserProfile } = useContext(AuthContext);
  // console.log(user);

  const handleSave = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log(name, photo);

    updateUserProfile(name, photo)
      .then((resul) => {
        console.log(resul.user);
        toast.success("Save New Info Successfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.warn(error.message);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Mount Ride | User Profile</title>
      </Helmet>
      <section className="p-6 bg-yellow-800 dark:text-gray-900">
        <form
          onSubmit={handleSave}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-100">
            <div className="space-y-2 col-span-full lg:col-span-1 border-r-4 border-black">
              <p className="font-extrabold text-3xl animate__animated animate__bounce">
                Profile
              </p>
              <p className="text-justify p-5">
                Manage your travel plans, explore personalized recommendations,
                and keep track of your favorite destinations—all in one place.
                Welcome to your Mount Ride profile!
              </p>
            </div>
            <div
              className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
              data-aos-duration="2000"
              data-aos="zoom-in"
            >
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm font-bold">
                  Name
                </label>
                <input
                  name="name"
                  id="username"
                  type="text"
                  placeholder={
                    user.displayName ? user.displayName : "Your Name"
                  }
                  className="border p-2  w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm font-bold">
                  Photo URL
                </label>
                <input
                  name="photo"
                  id="website"
                  type="text"
                  placeholder={user.photoURL ? user.photoURL : "Photo URL"}
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm font-bold">
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder="Bio"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src={user.photoURL ? user.photoURL : "P"}
                    alt=""
                    className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                  />
                  <button type="submit" className="btn btn-outline btn-success">
                    Save Updated Info 
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Profile;
