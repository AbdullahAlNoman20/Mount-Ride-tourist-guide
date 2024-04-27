import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import { useState } from "react";

const MyList = () => {
  const loadedSpots = useLoaderData();

  const [spots, setSpots] = useState(loadedSpots);

  return (
    <div className="p-20 bg-yellow-800 text-white">
      <h1 className="text-5xl text-center mb-5">
        {" "}
        Spots Which i Added: {spots.length}{" "}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {spots.map((spot) => (<SpotCard 
        key={spot._id} 
        spot={spot}
        spots ={spots}
        setSpots={setSpots}
        
        ></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
