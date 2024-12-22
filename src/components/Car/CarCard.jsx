import { IoCalendarNumberOutline } from "react-icons/io5";
import { format } from "date-fns";
import { FaSearchLocation } from "react-icons/fa";
const CarCard = ({ car }) => {
  const {
    car_model,
    daily_rental_price,
    availability,
    description,
    car_image,
    added_date,
    location,
  } = car;
  return (
    <div className="w-full bg-white p-5 rounded-xl shadow">
      <div className="relative">
        <img
          className="rounded-lg border h-[250px] w-full"
          src={car_image}
          alt={car_model}
        />
        <div className="absolute top-3 right-3">
          <button className="btn rounded-3xl border-none shadow bg-primary text-white duration-300 hover:scale-105 hover:bg-white text-[15px] hover:text-primary font-semibold">
            ${daily_rental_price} / Daily
          </button>
        </div>
        {/* Floating button at top-left */}
        {availability === "Yes" ? (
          <button className="absolute p-2 top-[-29px] left-[-30px] z-10 bg-blue-400 text-white rounded-full btn btn-sm shadow-lg hover:bg-white hover:text-blue-400 border-blue-400 border">
            Available
          </button>
        ) : (
          <button className="absolute p-1 top-[-29px] left-[-30px] z-10 bg-yellow-400 text-white rounded-full btn btn-sm shadow-lg hover:bg-white hover:text-yellow-400 border-yellow-400 border">
            Unavailable
          </button>
        )}
      </div>
      {/* Floating button at top-left */}
      <div>
        <h5 className="my-2 font-bold text-[#313131] text-[27px]">
          {car_model}
        </h5>
        <p className="font-semibold text-lg">
          {description.substring(0, 60)}...
        </p>
        <hr className="border my-3" />
        <div>
          <h3 className="flex items-center gap-2 text-[#212121] font-semibold my-1">
            <IoCalendarNumberOutline className="text-primary" />
            Added-Date: {format(new Date(added_date), "P")}
          </h3>
          <h3 className="flex items-center gap-2 text-[#111111] font-semibold my-1">
            <FaSearchLocation className="text-primary" />
            {location}
          </h3>
        </div>
        <div className="mt-4">
          <button className="bg-primary btn w-1/2 flex float-end text-white font-semibold text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
