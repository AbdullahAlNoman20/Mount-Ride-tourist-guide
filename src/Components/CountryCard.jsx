import { NavLink } from "react-router-dom";

const CountryCard = ({ countryCard }) => {
  const { id, countryName, spotName, img, description, cost, time } = countryCard;

  return (
    
      
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800"
        data-aos-duration="2000"
        data-aos="zoom-in"
        >
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="mb-0 capitalize dark:text-gray-800 font-bold"
              >
                {spotName}{" "}
                <span className="ml-3">
                  <i className="fa-solid fa-dollar-sign"></i> {cost}
                </span>{" "}
              </a>
            </div>
            <NavLink to={`/countryDetails/${id}`}>
            <a rel="noopener noreferrer ">
              <span className="underline font-bold text-[15px] text-blue-600">See Details</span>
            </a>
            </NavLink>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={img}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
                <span>{time}</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-600">
                  {countryName}
                </h3>
              </a>
              <p className="leading-snug dark:text-gray-600 text-justify">{description}</p>
            </div>
          </div>
        </div>


  );
};

export default CountryCard;
