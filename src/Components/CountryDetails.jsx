import { Helmet } from "react-helmet-async";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const CountryDetails = () => {
  const infos = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  const info = infos.find((info) => info.id === idInt);
  console.log(info);

  return (
    <div>
      <Helmet>
        <title>Mount Ride | Country Details</title>
      </Helmet>
      <section>
        <div className="dark:bg-yellow-700">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
              {info.spotName}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              {info.description}
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
              >
                Lat's Tour Together
              </button>
              <NavLink to="/">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50"
                >
                  Back To Home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <img
          src={info.img}
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />
      </section>
    </div>
  );
};

export default CountryDetails;
