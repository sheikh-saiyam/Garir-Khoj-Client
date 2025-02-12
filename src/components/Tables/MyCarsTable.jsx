import axios from "axios";
import { format } from "date-fns";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyCarsTable = ({ myCar, idx, fetchMyCars }) => {
  const theme = localStorage.getItem("theme");

  const {
    _id,
    car_model,
    daily_rental_price,
    availability,
    registration_number,
    features,
    description,
    car_image,
    location,
    added_date,
    bookingCount,
  } = myCar;

  // Delete Car Function
  const api_url = import.meta.env.VITE_API_URL;
  const handleDeleteCar = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${api_url}/car/${id}`).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Car has been deleted.",
            icon: "success",
          });
          fetchMyCars();
        });
      }
    });
  };
  // Delete Car Function

  // Update Car Functionality
  const handleUpdateCar = async (e) => {
    e.preventDefault();
    const form = e.target;
    const car_model = form.car_model.value;
    const daily_rental_price = parseInt(form.daily_rental_price.value);
    const availability = form.availability.value;
    const registration_number = form.registration_number.value;
    const features = form.features.value.split("\n");
    const description = form.description.value;
    const car_image = form.car_image.value;
    const location = form.location.value;
    const updatedCarData = {
      car_model,
      daily_rental_price,
      availability,
      registration_number,
      features,
      description,
      car_image,
      location,
    };
    // Update Request Functionality
    try {
      await axios.put(`${api_url}/update-car/${_id}`, updatedCarData);
      fetchMyCars();
      document.getElementById(`${_id}`).close();
      toast.success("Car Updated Successfully!");
    } catch (error) {
      toast.error("Something Went Wrong!", error.message);
    }
    // Update job functionality

    // console.table(updatedCarData);
  };
  // Update Car Functionality
  return (
    <>
      <tr className={`${theme === "light" && "hover"} dark:text-white`}>
        <th>{idx + 1}</th>
        <td className="px-0">
          <img
            className="h-10 w-full sm:h-20 sm:w-44 border"
            src={car_image}
            alt=""
          />
        </td>
        <td>{car_model}</td>
        <td>
          ${daily_rental_price}/<sub className="text-xs">daily</sub>
        </td>
        <td>
          {availability}{" "}
          {availability === "Yes" ? (
            <sub className="text-xs font-normal text-blue-500">(Available)</sub>
          ) : (
            <sub className="text-xs font-normal text-primary">
              (Un Available)
            </sub>
          )}
        </td>
        <td>{format(new Date(added_date), "P")}</td>
        <td>Total Booking Count: {bookingCount}</td>
        <td>
          <div className="flex sm:flex-row sm:flex flex-col gap-3 items-center">
            <button
              onClick={() => document.getElementById(`${_id}`).showModal()}
              className="btn btn-sm text-white font-semibold text-md bg-blue-500 border-none"
            >
              Update
            </button>
            <button
              onClick={() => handleDeleteCar(_id)}
              className="btn btn-sm text-white font-semibold text-md bg-red-500 border-none hover:text-primary hover:bg-white hover:shadow-md"
            >
              Delete
            </button>
          </div>
        </td>
        {/* Update Car Modal */}
        <td>
          <dialog id={_id} className="modal">
            <div className="modal-box w-11/12 max-w-6xl">
              <div className="w-11/12 mx-auto">
                <h3 className="font-bold text-3xl">
                  Update Car{" "}
                  <span className="text-xl font-medium">({car_model})</span>
                </h3>
              </div>
              {/* Update Form */}
              <div>
                <div className="mx-auto w-11/12 mt-8 mb-8">
                  <form onSubmit={handleUpdateCar}>
                    {/* Car Model & Daily Rental Price */}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                      <div>
                        <label className="text-lg font-semibold text-gray-800">
                          Car Model
                        </label>
                        <input
                          type="text"
                          name="car_model"
                          defaultValue={car_model}
                          placeholder="Enter Car Model"
                          required
                          className="mt-2 w-full input input-bordered"
                        />
                      </div>

                      <div>
                        <label className="text-lg font-semibold text-gray-800">
                          Daily Rental Price
                        </label>
                        <input
                          type="number"
                          name="daily_rental_price"
                          defaultValue={daily_rental_price}
                          placeholder="Enter Daily Rental Price"
                          required
                          className="mt-2 w-full input input-bordered"
                        />
                      </div>
                    </div>
                    {/* Car Model & Daily Rental Price */}

                    {/* Availability & Vehicle Registration Number */}
                    <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-2">
                      <div>
                        <div>
                          <label className="text-lg font-semibold text-gray-800">
                            Availability /{" "}
                            <span className="text-xs font-medium text-red-500">
                              (Availability Must Be Yes Or No / Only Yes Or No
                              Is valid)
                            </span>
                          </label>
                          <input
                            type="text"
                            name="availability"
                            defaultValue={availability}
                            placeholder="Enter Vehicle Registration Number"
                            required
                            className="mt-2 w-full input input-bordered"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-lg font-semibold text-gray-800">
                          Vehicle Registration Number
                        </label>
                        <input
                          type="number"
                          name="registration_number"
                          defaultValue={registration_number}
                          placeholder="Enter Vehicle Registration Number"
                          required
                          className="mt-2 w-full input input-bordered"
                        />
                      </div>
                    </div>

                    {/* Availability & Vehicle Registration Number */}

                    {/* Features */}
                    <div className="mt-3">
                      <div>
                        <label className="text-lg font-semibold text-gray-800">
                          Features /
                          <span className="text-xs font-medium text-red-500">
                            (Put Each Feature In A New Line)
                          </span>
                        </label>
                        <textarea
                          name="features"
                          defaultValue={features}
                          placeholder="Enter All Features Of The Car . Put Each Feature In A New Line"
                          required
                          rows="4"
                          className="mt-2 text-lg block w-full textarea textarea-bordered"
                        ></textarea>
                      </div>
                    </div>
                    {/* Features */}

                    {/* Description */}
                    <div className="mt-3">
                      <div>
                        <label className="text-lg font-semibold text-gray-800">
                          Description
                        </label>
                        <textarea
                          name="description"
                          defaultValue={description}
                          placeholder="Enter Description Of The Car"
                          required
                          rows="4"
                          className="mt-2 text-lg block w-full textarea textarea-bordered"
                        ></textarea>
                      </div>
                    </div>
                    {/* Description */}

                    {/* Car Image react-dropzone */}
                    <div className="mt-3 container">
                      <div>
                        <label className="text-lg font-semibold text-gray-800">
                          Car Image
                        </label>
                        <input
                          type="text"
                          name="car_image"
                          defaultValue={car_image}
                          placeholder="Enter Car Photo URL"
                          required
                          className="mt-2 w-full input input-bordered"
                        />
                      </div>
                    </div>
                    {/* Car Image react-dropzone */}

                    {/* Location */}
                    <div className="mt-3">
                      <div>
                        <label className="text-lg font-semibold text-gray-800">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          defaultValue={location}
                          placeholder="Enter Location"
                          required
                          className="mt-2 w-full input input-bordered"
                        />
                      </div>
                    </div>
                    {/* Location */}
                    {/* Submit Button */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full btn bg-primary text-white font-bold text-lg"
                      >
                        Update Car
                      </button>
                    </div>
                    {/* Submit Button */}
                  </form>
                </div>
              </div>
              {/* Update Form */}
              <div className="modal-action w-11/12 mx-auto">
                <form method="dialog">
                  <button className="btn btn-wide bg-black text-white font-semibold text-lg">
                    Close Modal
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </td>
        {/* Update Car Modal */}
      </tr>
    </>
  );
};

export default MyCarsTable;
