import Swal from "sweetalert2";

const AddTouristSpot = () => {
  const handleAddSpot = (e) => {
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

    const newSpot = {
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
    console.log(newSpot);

    // Send Data to the server

    fetch("http://127.0.0.1:5000/spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "User Added successfully",
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
          onSubmit={handleAddSpot}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 text-black"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50 text-black">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-2xl">Add Your Tourist Spot</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-black">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
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
                  placeholder="2000"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2 mt-4">
                <input
                  type="submit"
                  value="Add Spot"
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

export default AddTouristSpot;
