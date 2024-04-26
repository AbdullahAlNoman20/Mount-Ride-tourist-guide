import "animate.css";
import { useEffect, useState } from "react";
import Service from "./Service";
import Countries from "./Countries";

const Estates = () => {
  

  return (
    <div className="bg-yellow-800 text-white lg:p-5 pb-5">
      <div className="flex justify-center items-center flex-col p-14">
        <h1 className="font-bold text-4xl animate__animated animate__bounce">
          Our Services | Tourist Spots
        </h1>
        <p>
          Check-In offers a premium selection of accommodations and dining
          experiences. Whether it's a relaxing stay at our hotels, a cozy night
          in our guesthouses, or a memorable meal at our restaurants, we're here
          to make your visit exceptional.
        </p>
      </div>
      <div className="">
        Data is Coming From Database
      </div>

      {/* Extra Section 1 */}
      <div className="mt-5">
        <div
          className="p-6 py-12 bg-yellow-700 dark:text-gray-50 rounded-xl"
          data-aos-duration="2000"
          data-aos="fade-left"
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to
                <br className="sm:hidden" /> 30% Off.
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>Book for 1 person Get 1 person Free! Use code:</span>
                <span className="font-bold text-lg">MR24</span>
              </div>
              <a
                href="#"
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Countries Section */}
      <Countries></Countries>

      {/* Extra Section 2 */}
      <div className="mt-10 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div
            className="space-y-2"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Get in Touch with Mount Ride 
            </h2>
            <div className="dark:text-gray-600">
              Reach out to us for any inquiries, reservations, or feedback -
              we're here to ensure your journey is seamless and memorable.
            </div>
          </div>
          <img
            src="https://i.ibb.co/LdxJsFz/Dhaka-1.jpg"
            alt=""
            className="p-6 h-52 md:h-64"
            data-aos-duration="2000"
            data-aos="fade-right"
          />
        </div>
        <form noValidate="" className="space-y-6">
          <div data-aos-duration="1000" data-aos="fade-left">
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="border w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div data-aos-duration="2000" data-aos="fade-left">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div data-aos-duration="2500" data-aos="fade-left">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="border w-full p-3 rounded dark:bg-gray-100"
            ></textarea>
          </div>
          <button
            data-aos-duration="2000"
            data-aos="fade-left"
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-yellow-800 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
};

export default Estates;
