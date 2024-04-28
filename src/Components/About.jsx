import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="p-8 bg-yellow-800 text-white">
      <Helmet>
        <title>Mount Ride | All Tourist Spot </title>
      </Helmet>

      <h1 className="text-3xl text-center">Journey Beyond the Horizon with Mount Ride</h1>
      <p className="text-center mt-5">
        Step into a world where every destination promises a new discovery.
        Mount Ride presents a vast collection of awe-inspiring tourist spots
        from every corner of the globe. Experience the majestic, the hidden, and
        the unparalleled. Whether it’s iconic landmarks or secret getaways,
        start your adventure with us and find your perfect spot under the sun.
      </p>
    </div>
  );
};

export default About;
