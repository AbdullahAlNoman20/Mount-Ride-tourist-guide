import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("Country.json")
    // fetch("https://mountrideserver.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  });

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-10">
       | Discover Asia’s Treasures with Mount Ride. |
      </h1>
      <p className="text-center my-5 text-justify">
        Discover Asia’s Treasures with Mount RideEmbark on a spectacular voyage
        through Asia with Mount Ride as your guide. Explore the essence of each
        country through its most celebrated landmarks. From the tranquil temples
        of Thailand to the rugged peaks of Nepal, our “Gateway to the East”
        section unveils a tapestry of cultural heritage, natural beauty, and
        architectural marvels. Each destination is carefully selected to enrich
        your understanding and enhance your appreciation of Asia’s diverse
        landscapes. Join Mount Ride and step into a world where every corner
        holds a story waiting to be discovered.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-10 lg:m-20 gap-10">
        {
          country.map(countryCard => <CountryCard key={countryCard.id} countryCard={countryCard}> </CountryCard> )
        }
      </div>
    </div>
  );
};

export default Countries;
