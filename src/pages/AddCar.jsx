import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCar = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const { user } = useAuth();
  const navigate = useNavigate();
  // Add Car To DB Functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const car_model = form.car_model.value;
    const daily_rental_price = parseInt(form.daily_rental_price.value);
    const availability = "Yes";
    const registration_number = form.registration_number.value;
    const features = form.features.value.split("\n");
    const description = form.description.value;
    const car_image = form.car_image.value;
    const location = form.location.value;
    const newCarData = {
      car_model,
      daily_rental_price,
      availability,
      registration_number,
      features,
      description,
      car_image,
      location,
      bookingCount: 0,
      bookingStatus: "Pending",
      added_date: new Date(),
      user_details: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
    };
    const api_url = import.meta.env.VITE_API_URL;
    // Post Request To DB
    try {
      await axios.post(`${api_url}/add-car`, newCarData).then(() => {
        toast.success("Congratulation! . Car Added Successfully");
        form.reset();
        navigate("/my-cars");
      });
    } catch (error) {
      toast.error(error.message);
    }
    // Post Request To DB
    console.table(newCarData);
  };
  // Add Car To DB Functionality
  return (
    <div className="mx-auto w-11/12 md:w-10/12 lg:w-9/12 max-w-[1140px] my-8 border-2 rounded-xl">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold py-4">
          Add{" "}
          <span className="text-primary underline underline-offset-2">New</span>{" "}
          Car
        </h1>
      </div>
      <div className="mx-auto w-11/12 mt-6 mb-6">
        <form onSubmit={handleSubmit}>
          {/* Car Model & Daily Rental Price */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <label className="text-lg font-semibold text-gray-800">
                Car Model
              </label>
              <input
                type="text"
                name="car_model"
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
                placeholder="Enter Daily Rental Price"
                required
                className="mt-2 w-full input input-bordered"
              />
            </div>
          </div>
          {/* Car Model & Daily Rental Price */}

          {/* Availability & Vehicle Registration Number */}
          <div className="mt-3">
            <div>
              <label className="text-lg font-semibold text-gray-800">
                Vehicle Registration Number
              </label>
              <input
                type="number"
                name="registration_number"
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
              Add Car
            </button>
          </div>
          {/* Submit Button */}
        </form>
      </div>
    </div>
  );
};

export default AddCar;
