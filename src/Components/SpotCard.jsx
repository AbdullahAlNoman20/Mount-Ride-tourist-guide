import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SpotCard = ({ spot, setSpots, spots }) => {
  const { _id, name, photo, country, location, description, cost, time } = spot;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mountrideserver.vercel.app/spot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((spt) => spt._id !== _id);
              setSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div
        className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 lg:h-[750px]"
        data-aos-duration="2000"
        data-aos="zoom-in"
      >
        <div className="flex space-x-4">
          <img
            alt=""
            src={photo}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {name}
            </a>
            <span className="text-xs dark:text-gray-600">{location}</span>
          </div>
        </div>
        <div>
          <img
            src={photo}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{country}</h2>
          <p className="text-sm dark:text-gray-600 text-justify">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          {/* Button */}
          <div className="space-x-2">
            <Link to={`updateSpot/${_id}`}>
              <button
                aria-label="Share this post"
                type="button"
                className="p-2 text-center border"
              >
                <i className="fa-regular fa-pen-to-square"></i>
                <span> Edit</span>
              </button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              aria-label="Bookmark this post"
              type="button"
              className="p-2 border"
            >
              <i className="fa-regular fa-trash-can"></i>
              <span> Delete</span>
            </button>
          </div>

          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <i className="fa-solid fa-dollar-sign"></i>
              <span>Around: {cost} </span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <i className="fa-solid fa-calendar-days"></i>
              <span>{time}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
