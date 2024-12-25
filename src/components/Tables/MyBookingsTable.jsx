import axios from "axios";
import { format } from "date-fns";
import { GoTrash } from "react-icons/go";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyBookingsTable = ({ myBooking, idx, fetchMyBookings }) => {
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
            car_id: car_id, // Include car_id if required
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
  
  // Functionality for modify booking date //
  return (
    <>
      <tr className="hover">
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
        <td>
          {format(new Date(booking_start_date), "P")} -{" "}
          {format(new Date(booking_end_date), "P")}{" "}
          <sub className="text-xs">
            ({booking_days_difference}{" "}
            {booking_days_difference === 0 ? "Day" : "Days"})
          </sub>
        </td>
        <td>
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
          <div className="flex sm:flex-row sm:flex flex-col gap-4 items-center">
            <button
              onClick={() => handleUpdateBookingStatus(_id, "Canceled")}
              className="flex items-center text-md gap-1 btn btn-sm text-white font-semibold text-md bg-red-500 border-none hover:text-primary hover:bg-white hover:shadow-md"
            >
              <GoTrash className="text-xs font-extrabold" />
              Cancel
            </button>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-sm text-white font-semibold text-md bg-blue-500 border-none"
            >
              🗓 Modify Date
            </button>
          </div>
        </td>

        {/* Modify-Date Modal */}
        <div>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-xl text-center">Modify Booking Date 🗓</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </tr>
    </>
  );
};

export default MyBookingsTable;
