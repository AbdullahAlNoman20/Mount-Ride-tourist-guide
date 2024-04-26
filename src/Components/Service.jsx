import { Link } from "react-router-dom";


const Service = ({ Services }) => {
  const {
    id,
    image,
    title,
    description,
    rating,
    price,
    location,
    booking_status,
    facility,
  } = Services;

  return (
    <div className="text-black  ">
      <div className="card w-96 bg-base-100 shadow-xl h-[700px]" data-aos-duration="2000"
    data-aos="zoom-in">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>

          <p className=" flex flex-col gap-2 ">
            {Services.facility.map((facilities) => (
              <span key={Services.id} className="p-1 text-sky-900 border border-yellow-500 rounded-xl ">
                <i className="fa-solid fa-check"></i> {facilities}
              </span>
            ))}
          </p>

          <p>
            <i className="fa-regular fa-bookmark"></i> Booking Status:{" "}
            {booking_status}
          </p>
          <div className="font-bold w-full flex items-center justify-between">
            <p>
              Price: <i className="fa-solid fa-dollar-sign"></i> {price}
            </p>
            <p>
              Rating: {rating} <i className="fa-solid fa-star"></i>
            </p>
          </div>
          <p>
            <i className="fa-solid fa-location-dot"></i> Location: {location}
          </p>
          <div className="card-actions w-full flex justify-center">
           <Link to={`/details/${id}`}>
           <button className="btn btn-wide btn-outline btn-warning ">
              Details
            </button>
           </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
