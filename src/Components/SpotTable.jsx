
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const SpotTable = ({spot, setSpots, spots}) => {

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

      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src={photo}
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {name}
                    </h3>
                    <p className="text-sm dark:text-gray-600">{country}</p>
                    <p className="text-sm dark:text-gray-600">{description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{cost}</p>
                    <p className="text-sm dark:text-gray-400">
                      {time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        
        <div className="flex justify-end space-x-4">
        <button
              onClick={() => handleDelete(_id)}
              aria-label="Bookmark this post"
              type="button"
              className="px-6 py-2 border rounded-md dark:border-violet-600"
            >
              <i className="fa-regular fa-trash-can"></i>
              <span> Delete</span>
            </button>
          <Link to={`updateSpot/${_id}`}>
              <button
                aria-label="Share this post"
                type="button"
                className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
              >
                <i className="fa-regular fa-pen-to-square"></i>
                <span> Edit</span>
              </button>
            </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SpotTable;
