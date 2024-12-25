import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { FaCashRegister, FaSearchLocation } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GiConfirmed } from "react-icons/gi";

const CarDetails = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
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

  // date-picking states
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // date-picking states

  // Calculate the total price for the booking period
  const dateDifferenceInMilliseconds = endDate - startDate;
  let dateDifferenceInDays = Math.ceil(
    dateDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
  );
  if (dateDifferenceInDays <= 0) {
    dateDifferenceInDays = 1;
  }
  const totalPriceOfEntireBookingPeriod =
    daily_rental_price * dateDifferenceInDays;
  // Calculate the total price for the booking period

  const handleBookCar = async () => {
    const bookingInformation = {
      car_id: _id,
      car_image,
      car_model,
      daily_rental_price,
      totalPriceOfEntireBookingPeriod,
      bookingStatus: "Confirmed",
      booking_days_difference: dateDifferenceInDays,
      booking_start_date: startDate,
      booking_end_date: endDate,
      booked_user_email: user.email,
    };
    // Post Request To DB
    try {
      await axios.post(`${api_url}/booking`, bookingInformation).then(() => {
        document.getElementById("booking_modal").close();
        navigate("/my-bookings");
        toast.success("Congratulation! Car Booked");
      });
    } catch (error) {
      toast.error(error.message);
    }

    // Post Request To DB

    // console.table(bookingInformation);
  };

  // If User Is logOut then show toast modal
  const handleBlockToBooking = () => {
    Swal.fire({
      title: "Login Required",
      text: "You need to login to booked a car",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "OK",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to the login page
        navigate("/login");
      }
    });
  };
  // If User Is logOut then show toast modal

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
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                  ${daily_rental_price} / Daily
                </h1>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    if (user && user.email) {
                      if (availability !== "Yes") {
                        toast.error("You Can't Book This Car . Already Booked");
                      } else {
                        document.getElementById("booking_modal").showModal();
                      }
                    } else {
                      handleBlockToBooking();
                    }
                  }}
                  className="bg-primary btn h-full flex float-end text-white font-semibold text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/* Text Div */}
        </div>
      )}
      {/* Booking Confirmation Modal */}
      <dialog id="booking_modal" className="modal">
        <div className="modal-box py-16">
          <div>
            <h3 className="font-bold text-3xl mb-4">{car_model}</h3>
          </div>
          {/* Date picking div */}
          <div className="my-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-800">
                Pick Booking Start Date
              </label>
              <DatePicker
                className="border p-2 rounded-md w-full mt-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="my-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-800">
                Pick Booking End Date
              </label>
              <DatePicker
                className="border p-2 rounded-md w-full mt-2"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Total Price Of Entire Booking Period:{" "}
              <span className="font-normal">
                ${totalPriceOfEntireBookingPeriod}
              </span>
            </h1>
          </div>
          {/* Date picking div */}
          <div className="flex items-center justify-between gap-4 mt-5">
            <div className="w-2/3">
              <button
                onClick={handleBookCar}
                className="bg-primary btn w-full text-white font-semibold text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary flex items-center gap-1"
              >
                <GiConfirmed className="text-md" />
                Confirm Booking
              </button>
            </div>
            <div className="w-1/3">
              <form method="dialog">
                <button className="btn w-full bg-black text-white text-lg">
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
      {/* Booking Confirmation Modal */}
    </div>
  );
};

export default CarDetails;
