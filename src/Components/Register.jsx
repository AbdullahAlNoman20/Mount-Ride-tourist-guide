import { toast } from "react-toastify";

import "animate.css";

import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";

const Register = () => {
  const navigateHome = useNavigate();

  const { registerUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState(" ");
  const [registerError, setRegisterError] = useState(" ");

  // console.log(registerUser);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(name,photo)

    if (password.length < 6) {
      setError("Password less then 6 character");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password has no Uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password has no lowercase letter");
      return;
    }
    // Resat Error
    setError("");
    setRegisterError("");

    console.log(name, email, photo, password);

    // 	// Create new user
    // registerUser(email, password)
    //   .then((result) => {
    //     console.log(result);
    //     toast.success("Welcome to Check-In");
    //     e.target.reset();
    //     updateProfile(name, photo)
    //     .then(()=>{
          
    //     })
    //     .catch((error)=>{
    //       console.error(error.message);
    //     })
    //     navigateHome("/");
        
    //   })

    //   .catch((error) => {
    //     console.error(error);
    //     setRegisterError(error.message);
    //     toast.warn(error.message);
    //   });

      registerUser(email, password)
            .then(result => {
              updateUserProfile(name,photo)
                .then(resul=>{
                    
                    console.log(resul)
                    toast.success("Welcome to Mount Ride");
                    navigateHome("/");

                })
                .catch(error=>{
                    console.log(error.message)
                    toast.warn(error.message);
                })
            })
            .catch(error => {
                console.log(error)
                toast.warn(error.message);
            })
  };

  return (
    <div className="flex justify-center py-5 bg-yellow-800">
      <Helmet>
        <title>Check-In | Register </title>
      </Helmet>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold animate__animated animate__pulse">
            Register Now
          </h1>
          <p className="text-sm dark:text-gray-600">
            Start a new Journey with Check-in{" "}
          </p>
        </div>
        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-12"
        >
          {" "}
          {/* onSubmit={handleRegister}  */}
          <div className="space-y-4">
            <div data-aos-duration="1000" data-aos="fade-right">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Your Name
                </label>
              </div>
              <input
                required
                name="name"
                type="text"
                placeholder="Username"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div data-aos-duration="1500" data-aos="fade-left">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                name="email"
                type="text"
                placeholder="Email"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div data-aos-duration="2000" data-aos="fade-right">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Photo URL
                </label>
              </div>
              <input
                required
                name="photo"
                type="text"
                placeholder="https/"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div data-aos-duration="2500" data-aos="fade-left">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                required
                name="password"
                type="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Register
              </button>
              {registerError && <p className="text-red-500">{registerError}</p>}
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have Account?
              <NavLink to="/login">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-violet-600 ml-4 font-bold"
                >
                  LogIn
                </a>
                .
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
