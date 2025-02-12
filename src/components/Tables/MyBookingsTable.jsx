import axios from "axios";
import { format } from "date-fns";
import { GoTrash } from "react-icons/go";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";

const MyBookingsTable = ({ myBooking, idx, fetchMyBookings }) => {
  const theme = localStorage.getItem("theme");

  const {
    _id,
    car_id,
    car_image,
    car_model,
    daily_rental_price,
    totalPriceOfEntireBookingPeriod,
    booking_days_difference,
    booking_start_date,
    booking_end_date,
    bookingStatus,
  } = myBooking;

  const api_url = import.meta.env.VITE_API_URL;

  // Function for change status
  const handleUpdateBookingStatus = async (id, updatedStatus) => {
    // console.table({ id, updatedStatus });
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel this booking?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "No",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.patch(`${api_url}/update-booking-status/${id}`, {
            booking_status: updatedStatus,
            car_id: car_id,
          });
          fetchMyBookings().then(() => {
            Swal.fire({
              title: "Canceled!",
              text: "Your Booking has been Canceled.",
              icon: "success",
            });
          });
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  // Function for change status

  // Functionality for modify booking date //

  // Date-picking states
  const [startDate, setStartDate] = useState(new Date(booking_start_date));
  const [endDate, setEndDate] = useState(new Date(booking_end_date));

  // Ensure both startDate and endDate are valid Date objects
  const handleDateChange = (dateType, dateValue) => {
    if (dateType === "start") {
      setStartDate(new Date(dateValue));
    } else if (dateType === "end") {
      setEndDate(new Date(dateValue));
    }
  };

  // Calculate the total price for the new booking period
  const calculatePrice = () => {
    if (!startDate || !endDate)
      return { totalPrice: 0, dateDifferenceInDays: 0 };

    const dateDifferenceInMilliseconds = endDate - startDate;

    // Ensure difference is at least 1 day
    let dateDifferenceInDays = Math.ceil(
      dateDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    if (dateDifferenceInDays <= 0) {
      dateDifferenceInDays = 1;
    }

    const totalPrice = daily_rental_price * dateDifferenceInDays;
    return { totalPrice, dateDifferenceInDays }; // Return both values
  };
  // Calculate the total price for the new booking period

  const { totalPrice, dateDifferenceInDays } = calculatePrice();
  const totalPriceOfEntireNewBookingPeriod = totalPrice;

  const handleModifyBookingDate = async (id) => {
    console.log(id);
    const modifiedBookingData = {
      booking_start_date: startDate,
      booking_end_date: endDate,
      booking_days_difference: dateDifferenceInDays,
      totalPriceOfEntireBookingPeriod: totalPriceOfEntireNewBookingPeriod,
    };
    // Put Request To Server //
    try {
      await axios.put(
        `${api_url}/modify-booking-date/${id}`,
        modifiedBookingData
      );
      fetchMyBookings();
      document.getElementById(_id).close();
      toast.success("Date Modified");
    } catch (error) {
      toast.error(error.message);
    }
    // Put Request To Server //

    // console.table({ modifiedBookingData });
  };

  // Functionality for modify booking date //
  return (
    <>
      <tr
        className={`${theme === "light" && "hover"} dark:text-white ${
          theme === "light" && bookingStatus === "Canceled" && "bg-red-50"
        }`}
      >
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
          ${totalPriceOfEntireBookingPeriod}/
          <sub className="text-xs">({daily_rental_price}) daily</sub>
        </td>
        <td className="text-[13px]">
          {format(new Date(booking_start_date), "dd-MM-yyyy HH:mm")} -{" "}
          {format(new Date(booking_end_date), "dd-MM-yyyy HH:mm")}{" "}
          <sub className="text-[9px]">
            ({booking_days_difference}{" "}
            {booking_days_difference === 1 ? "Day" : "Days"})
          </sub>
        </td>
        <td className="text-center">
          <span
            className={`px-3 py-2 rounded-full text-center font-semibold ${
              bookingStatus === "Confirmed" &&
              "bg-blue-100 text-blue-800 border border-blue-500"
            } ${
              bookingStatus === "Pending" &&
              "bg-yellow-100 text-yellow-800 border border-yellow-500"
            } ${
              bookingStatus === "Canceled" &&
              "bg-red-100 text-red-800 border border-red-500"
            }`}
          >
            {bookingStatus}
          </span>
        </td>
        <td>
          <div className="flex xl:flex-row xl:flex flex-col gap-4 items-center">
            <button
              disabled={bookingStatus === "Canceled"}
              onClick={() => handleUpdateBookingStatus(_id, "Canceled")}
              className="disabled:text-[#5b5959] disabled:font-normal flex items-center text-md gap-1 h-full py-2 btn btn-sm text-white font-semibold text-md bg-red-500 border-none hover:text-primary hover:bg-white hover:shadow-md"
            >
              <GoTrash className="text-xs font-extrabold" />
              Cancel
            </button>
            <button
              disabled={bookingStatus === "Canceled"}
              onClick={() => document.getElementById(_id).showModal()}
              className="disabled:text-[#5b5959] disabled:font-normal h-full py-2 btn btn-sm text-white font-semibold text-md bg-blue-500 border-none"
            >
              🗓 Modify Date
            </button>
          </div>
        </td>

        {/* Modify-Date Modal */}
        <td>
          <dialog id={_id} className="modal">
            <div className="modal-box py-10 rounded-lg shadow-xl">
              <div className="text-center bg-white shadow border p-5 rounded-xl">
                <h3 className="font-bold text-2xl">Modify Booking Date 🗓</h3>
                <div className="text-lg font-semibold space-y-1 mt-2">
                  <p>
                    Previous Start Date:{" "}
                    <span className="font-normal tracking-widest">
                      {format(new Date(booking_start_date), "P")}
                    </span>
                  </p>
                  <p>
                    Previous End Date:{" "}
                    <span className="font-normal tracking-widest">
                      {format(new Date(booking_end_date), "P")}
                    </span>
                  </p>
                  <h1 className="text-lg font-semibold text-gray-800 tracking-wider">
                    Previous Total Price Of Entire <br /> Booking Period:{" "}
                    <span className="font-normal">
                      ${totalPriceOfEntireBookingPeriod}
                    </span>
                  </h1>
                </div>
              </div>
              {/* Date picking div */}
              <div className="my-5 text-center">
                <div className="flex flex-col">
                  <label className="text-lg tracking-widest font-semibold text-gray-800">
                    Pick New Booking Start Date
                  </label>
                  <DatePicker
                    className="border p-2 text-center rounded-md w-4/5 mt-2"
                    selected={startDate}
                    onChange={(date) => handleDateChange("start", date)}
                  />
                </div>
              </div>
              <div className="my-5 text-center">
                <div className="flex flex-col">
                  <label className="text-lg tracking-widest font-semibold text-gray-800">
                    Pick New Booking End Date
                  </label>
                  <DatePicker
                    className="border p-2 text-center rounded-md w-4/5 mt-2"
                    selected={endDate}
                    onChange={(date) => handleDateChange("end", date)}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-wider text-center text-gray-800">
                  New Total Price Of <br /> Entire Booking Period:{" "}
                  <span className="font-normal">
                    ${totalPriceOfEntireNewBookingPeriod}
                  </span>
                </h1>
              </div>
              {/* Date picking div */}
              <div className="flex items-center w-4/5 mx-auto justify-between gap-4 mt-6">
                <div className="w-2/3">
                  <button
                    onClick={() => handleModifyBookingDate(_id)}
                    className="bg-primary btn w-full text-white font-semibold text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary flex items-center gap-1"
                  >
                    <GiConfirmed className="text-md" />
                    Confirm Date
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
        </td>
      </tr>
    </>
  );
};

export default MyBookingsTable;
