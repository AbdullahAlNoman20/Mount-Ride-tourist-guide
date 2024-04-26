import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const service = services.find((services) => services.id === idInt);

  // console.log(service)

  return (
    <div className="p-5 bg-sky-900">
      <Helmet>
        <title>Check-In | Details</title>
      </Helmet>
      <section className="dark:bg-sky-900 dark:text-gray-800">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div
            className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-white dark:text-black"
            data-aos-duration="2000"
            data-aos="fade-right"
          >
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  {service.title}
                </p>
                <p className="leading-snug">{service.description}</p>
              </div>
            </div>

            <p className=" flex gap-2 ">
              {service.facility.map((facilities) => (
                <span key={service.id} className="p-1 text-sky-900 ">
                  <i className="fa-solid fa-check"></i> {facilities}
                </span>
              ))}
            </p>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <i className="fa-solid fa-dollar-sign"></i>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  {service.price}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <i className="fa-solid fa-star"></i>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  {service.rating}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <i className="fa-solid fa-location-dot"></i>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  {service.location}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <i className="fa-regular fa-bookmark"></i>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  {service.booking_status}
                </p>
              </div>
            </div>

            <button className="btn btn-outline btn-warning w-full">
              Book Now
            </button>
          </div>
          <div
            className="lg:w-1/2 xl:w-3/5 dark:bg-sky-900"
            data-aos-duration="2000"
            data-aos="fade-left"
          >
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={service.image}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
