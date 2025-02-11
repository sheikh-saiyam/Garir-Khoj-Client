import { format } from "date-fns";
import { FaSearchLocation } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CarListCard = ({ car }) => {
  const {
    _id,
    car_model,
    daily_rental_price,
    availability,
    description,
    car_image,
    added_date,
    location,
  } = car;
  return (
    <div className="w-full bg-white p-5 flex items-center gap-4 rounded-xl shadow">
      <div className="relative w-5/12 md:w-4/12">
        <img
          className="rounded-lg border h-[180px] sm:h-[230px] w-full"
          src={car_image}
          alt={car_model}
        />
        <div className="absolute top-3 right-3">
          <button className="btn-sm btn rounded-3xl border-none shadow bg-primary text-white duration-300 hover:scale-105 hover:bg-white text-[15px] hover:text-primary font-semibold">
            ${daily_rental_price} / Daily
          </button>
        </div>
        {/* Floating button at top-left */}
        {availability === "Yes" ? (
          <button className="absolute p-2 bottom-0 sm:top-[-0px] sm:left-[-0px] z-10 bg-blue-400 text-white rounded-lg btn btn-sm shadow-lg hover:bg-white hover:text-blue-400 border-blue-400 border">
            Available
          </button>
        ) : (
          <button className="absolute p-1 bottom-0 sm:top-[-0px] sm:left-[-0px] z-10 bg-yellow-400 text-white rounded-lg btn btn-sm shadow-lg hover:bg-white hover:text-yellow-400 border-yellow-400 border">
            Unavailable
          </button>
        )}
      </div>
      <div className="w-7/12 md:w-8/12">
        <h5 className="my-2 font-bold text-[#313131] text-lg sm:text-[27px]">
          {car_model}
        </h5>
        <p className="font-semibold text-xs sm:text-lg">
          {description.substring(0, 100)}...
        </p>
        <hr className="border my-3" />
        <div>
          <h3 className="flex text-xs sm:text-base items-center gap-2 text-[#212121] font-semibold my-1">
            <IoCalendarNumberOutline className="text-primary" />
            Added-Date: {format(new Date(added_date), "P")}
          </h3>
          <h3 className="flex text-xs sm:text-base items-center gap-2 text-[#111111] font-semibold my-1">
            <FaSearchLocation className="text-primary" />
            {location}
          </h3>
        </div>
        <div className="mt-4">
          <Link
            to={`/car-details/${_id}`}
            className="bg-primary h-full btn btn-sm w-1/2 md:w-2/5 flex float-end text-white font-semibold text-sm sm:text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarListCard;
