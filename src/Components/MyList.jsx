import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SpotTable from "./SpotTable";

const MyList = () => {
  const loadedSpots = useLoaderData();

  const [spots, setSpots] = useState(loadedSpots);

  return (
    <div className="lg:p-20 p-10 bg-yellow-800 text-white">
      <Helmet>
        <title>Mount Ride | My List </title>
      </Helmet>
      <h1 className="text-2xl text-center mb-5">
        {" "}
        Explore Your Curated Lists: {spots.length}{" "}
      </h1>
      <p className="mb-10 text-center">
        Delve into curated collections of top destinations, insider tips, and
        must-see sights handpicked by Mount Ride's travel experts. Whether
        you're seeking adventure, culture, or tranquility, our lists are your
        passport to unforgettable experiences around the globe. Start exploring
        now and let your wanderlust guide the way!
      </p>

      <div className="flex justify-center">
      <div className="flex flex-col ">
        {spots.map((spot) => (
          <SpotTable
            key={spot._id}
            spot={spot}
            spots={spots}
            setSpots={setSpots}
          ></SpotTable>
        ))}
      </div>
      </div>
      

     





    </div>
  );
};

export default MyList;
