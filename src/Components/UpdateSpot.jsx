import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const {
    _id,
    name,
    email,
    spotName,
    photo,
    country,
    location,
    description,
    cost,
    season,
    time,
    visitor,
  } = spot;

  const handleUpdateSpot = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const spotName = form.spotName.value;
    const photo = form.photo.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitor = form.visitor.value;

    const updatedSpot = {
      name,
      email,
      spotName,
      photo,
      country,
      location,
      description,
      cost,
      season,
      time,
      visitor,
    };
    console.log(updatedSpot);

    // Send Data to the server

    fetch(`https://mountrideserver.vercel.app/spot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Spot Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <section className="p-6 bg-yellow-800 text-black">
        <form
          onSubmit={handleUpdateSpot}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 text-black"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50 text-black">
            <div
              className="space-y-2 col-span-full lg:col-span-1 border-r-8"
              data-aos-duration="2000"
              data-aos="fade-right"
            >
              <p className="font-bold text-2xl">Update Your Tourist Spot</p>
              <p className="text-xs text-justify p-5">
                Explore newly added destinations, updated attractions, and fresh
                insights in our Update Spot section. From hidden gems to
                trending hotspots, we keep you informed and inspired for your
                next adventure in real-time. Don't miss out on the
                excitement—check back often to see what's new!
              </p>
            </div>
            <div
              className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-black"
              data-aos-duration="2500"
              data-aos="fade-left"
            >
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  defaultValue={name}
                  placeholder="Abdullah Al Noman"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  defaultValue={email}
                  placeholder="Sundarban"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Spot Name
                </label>
                <input
                  name="spotName"
                  type="text"
                  required
                  defaultValue={spotName}
                  placeholder="Sundarban"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  required
                  defaultValue={photo}
                  placeholder="http//"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Country Name
                </label>
                <input
                  name="country"
                  type="text"
                  required
                  defaultValue={country}
                  placeholder="Bangladesh"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  required
                  defaultValue={location}
                  placeholder="Khulna"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Short Description
                </label>
                <input
                  name="description"
                  type="text"
                  required
                  defaultValue={description}
                  placeholder="Description"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Average Cost
                </label>
                <input
                  name="cost"
                  type="text"
                  required
                  defaultValue={cost}
                  placeholder=" Average Cost"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Season
                </label>
                <input
                  name="season"
                  type="text"
                  required
                  defaultValue={season}
                  placeholder="Summer"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Travel Time
                </label>
                <input
                  name="time"
                  type="text"
                  required
                  defaultValue={time}
                  placeholder="3 Days"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Tota Visitors Per Year
                </label>
                <input
                  name="visitor"
                  type="text"
                  required
                  defaultValue={visitor}
                  placeholder="2000"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2 mt-4">
                <input
                  type="submit"
                  value="Save Spot"
                  className="btn btn-block btn-outline"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateSpot;
