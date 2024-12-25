import { IoCalendarNumberOutline } from "react-icons/io5";
import { format } from "date-fns";
import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
const CarCard = ({ car }) => {
  const {
    _id,
    car_model,
    daily_rental_price,
    availability,
    description,
    car_image,
    added_date,
    bookingCount,
    location,
  } = car;
  return (
    <div className="w-full bg-white p-5 rounded-xl shadow grid place-content-stretch">
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
          <button className="absolute p-2 top-0 sm:top-[-29px] sm:left-[-30px] z-10 bg-blue-400 text-white rounded-lg sm:rounded-full btn btn-sm shadow-lg hover:bg-white hover:text-blue-400 border-blue-400 border">
            <span className="animate-bounce mt-[2px]">Available</span>
          </button>
        ) : (
          <button className="absolute p-1 top-0 sm:top-[-29px] sm:left-[-30px] z-10 bg-yellow-400 text-white rounded-lg sm:rounded-full btn btn-sm shadow-lg hover:bg-white hover:text-yellow-400 border-yellow-400 border">
            Unavailable
          </button>
        )}
      </div>
      {/* Floating button at top-left */}
      <div>
        <h5 className="my-2 font-bold text-[#313131] text-2xl sm:text-[27px]">
          {car_model}
        </h5>
        <p className="font-semibold text-sm sm:text-lg">
          {description.substring(0, 60)}...
        </p>
        <hr className="border my-3" />
        <div>
          <h3 className="flex items-center gap-2 text-[#212121] text-sm sm:text-base font-semibold my-1">
            <IoCalendarNumberOutline className="text-primary" />
            Added-Date: {format(new Date(added_date), "P")}
          </h3>
          <h3 className="flex items-center gap-2 text-[#111111] text-sm sm:text-base font-semibold my-1">
            <FaSearchLocation className="text-primary" />
            {location}
          </h3>
        </div>
        <div className="mt-4 flex items-center gap-2 justify-between">
          <div>
            <h1 className="text-[#111111] font-semibold text-sm sm:text-base">
              Booking Count: {bookingCount}
            </h1>
          </div>
          <Link
            to={`/car-details/${_id}`}
            className="bg-primary btn w-1/2 text-white font-semibold text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
