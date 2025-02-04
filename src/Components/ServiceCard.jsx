
import "animate.css";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ serviceCard }) => {
  const { id,country, spotName, img, description, cost, time } = serviceCard;

  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 lg:h-[650px]"
      data-aos-duration="2000"
      data-aos="zoom-in"
      >
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{spotName}</h2>
        </div>
        <p className="dark:text-gray-800">{description}</p>

        <NavLink to={`/spotDetails/${id}`}>
        <button className="btn btn-outline btn-success mt-5 w-full ">
          View Details
        </button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default ServiceCard;
