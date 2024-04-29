import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {

  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("Country.json")
    // fetch("https://mountrideserver.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  });



  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 lg:mx-20 gap-5 ">
      
        {
          service.map(serviceCard => <ServiceCard key={serviceCard.id} serviceCard={serviceCard}> </ServiceCard> )
        }
    </div>
  );
};

export default Service;
