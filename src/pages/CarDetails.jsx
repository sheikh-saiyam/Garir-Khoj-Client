import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { FaCashRegister, FaSearchLocation } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader/Loader";

const CarDetails = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const { id } = useParams();
  const api_url = import.meta.env.VITE_API_URL;
  const [carDetails, setCarDetails] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const { data } = await axios.get(`${api_url}/car/${id}`);
        setCarDetails(data);
        const timer = setTimeout(() => {
          setLoader(false);
        }, 800);
        return () => clearTimeout(timer);
      } catch (error) {
        toast.error(error.massage);
      }
    };
    fetchCarDetails();
  }, [api_url, id]);

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
  } = carDetails;

  // console.log(carDetails);
  return (
    <div>
      {loader ? (
        <Loader></Loader>
      ) : (
        <div className="mx-auto w-11/12 md:w-10/12 max-w-[1300px] my-12 lg:flex">
          <div className="relative w-full lg:w-6/12">
            <img className="h-full w-full" src={car_image} alt="" />
            {availability === "Yes" ? (
              <button className="absolute p-2 top-[-0px] left-[-px] z-10 bg-blue-400 text-white rounded-tl-none btn btn-sm shadow-lg hover:bg-white hover:text-blue-400 border-blue-400 border hover:border-blue-400">
                <span className="animate-bounce mt-[2px]">Available</span>
              </button>
            ) : (
              <button className="absolute p-2 top-[-0px] left-[-0px] z-10 bg-yellow-400 text-white rounded-tl-none btn btn-sm shadow-lg hover:bg-white hover:text-yellow-400 border-yellow-400 border">
                Unavailable
              </button>
            )}
          </div>
          {/* Text Div */}
          <div className="lg:border-l-0 border-2 p-6 border-primary w-full lg:w-6/12">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
                {car_model}
              </h1>

              <p className="font-medium my-3 text-lg">
                Description: <span className="font-normal">{description}</span>
              </p>
            </div>
            <div>
              <div>
                {added_date && (
                  <h3 className="flex items-center gap-2 text-[#212121] font-semibold my-1">
                    <IoCalendarNumberOutline className="text-primary" />
                    Added-Date: {format(new Date(added_date), "P")}
                  </h3>
                )}
                <h3 className="flex items-center gap-2 text-[#111111] font-semibold my-1">
                  <FaSearchLocation className="text-primary" />
                  Location: {location}
                </h3>
                <h3 className="flex items-center gap-2 text-[#111111] font-semibold my-1">
                  <FaCashRegister className="text-primary" />
                  Registration Number: {registration_number}
                </h3>
              </div>
              <div className="my-3">
                <h1 className="text-xl font-bold flex gap-1 items-center">
                  <CiBoxList className="text-2xl font-extrabold" />
                  Features:
                </h1>
                {(features || []).map((feature, index) => (
                  <li
                    className="font-medium mt-2 text-md list-none"
                    key={index}
                  >
                    {index + 1}. {feature}
                  </li>
                ))}
              </div>
            </div>
            <hr className="border my-3" />
            <div className="flex items-center justify-between">
              <div className="">
                <h1 className="text-3xl  font-semibold text-primary">
                  ${daily_rental_price} / Daily
                </h1>
              </div>
              <div className="">
                <button className="bg-primary btn  flex float-end text-white font-semibold text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/* Text Div */}
        </div>
      )}
    </div>
  );
};

export default CarDetails;
