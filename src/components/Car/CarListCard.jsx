import { format } from "date-fns";
import { FaSearchLocation } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";

const CarListCard = ({ car }) => {
  const {
    car_model,
    daily_rental_price,
    description,
    car_image,
    added_date,
    location,
  } = car;
  return (
    <div className="w-full bg-white p-4 flex items-center gap-4 rounded-xl shadow">
      <div className="relative w-5/12 md:w-4/12">
        <img
          className="rounded-lg border h-[230px] w-full"
          src={car_image}
          alt={car_model}
        />
        <div className="absolute top-3 right-3">
          <button className="btn rounded-3xl border-none shadow bg-primary text-white duration-300 hover:scale-105 hover:bg-white text-[15px] hover:text-primary font-semibold">
            ${daily_rental_price} / Daily
          </button>
        </div>
      </div>
      <div className="w-7/12 md:w-8/12">
        <h5 className="my-2 font-bold text-[#313131] text-[27px]">
          {car_model}
        </h5>
        <p className="font-semibold text-lg">
          {description.substring(0, 100)}...
        </p>
        <hr className="border my-3" />
        <div>
          {added_date && (
            <h3 className="flex items-center gap-2 text-[#212121] font-semibold my-1">
              <IoCalendarNumberOutline className="text-primary" />
              Added-Date: {format(new Date(added_date), "P")}
            </h3>
          )}
          <h3 className="flex items-center gap-2 text-[#111111] font-semibold my-1">
            <FaSearchLocation className="text-primary" />
            {location}
          </h3>
        </div>
        <div className="mt-4">
          <button className="bg-primary btn w-1/2 md:w-2/5 flex float-end text-white font-semibold text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarListCard;
