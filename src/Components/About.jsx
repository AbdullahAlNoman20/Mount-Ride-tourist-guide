import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const About = () => {
  // Data from Database
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("Country.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  });

  // Data: Which user Created

  const loadedSpots = useLoaderData();

  const [spots, setSpots] = useState(loadedSpots);

  return (
    <div className="p-8 bg-yellow-800 text-white">
      <Helmet>
        <title>Mount Ride | All Tourist Spot </title>
      </Helmet>

      <h1 className="text-3xl text-center">
        Journey Beyond the Horizon with Mount Ride
      </h1>
      <p className="text-center mt-5">
        Step into a world where every destination promises a new discovery.
        Mount Ride presents a vast collection of awe-inspiring tourist spots
        from every corner of the globe. Experience the majestic, the hidden, and
        the unparalleled. Whether it’s iconic landmarks or secret getaways,
        start your adventure with us and find your perfect spot under the sun.
      </p>

      {/* Dropdown menu */}
      <div className="flex justify-center my-10">
        <div className="dropdown dropdown-bottom text-black">
          <div tabIndex={0} role="button" className="btn m-1">
            Short By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Average Cost</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Data Which User Created */}
      <div className="border-b text-center text-3xl font-bold">
      Explore Your Curated Lists
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-5 lg:m-10">
        {spots.map((spot) => (
          <SpotCard
            key={spot._id}
            spot={spot}
            spots={spots}
            setSpots={setSpots}
          ></SpotCard>
        ))}
      </div>




      <h1 className="text-center font-bold text-3xl">Previous Data</h1>
      <hr />


        
      {/* Data From Database */}
      <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 lg:mx-20 gap-5 ">
        {service.map((serviceCard) => (
          <ServiceCard key={serviceCard.id} serviceCard={serviceCard}>
            {" "}
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default About;
