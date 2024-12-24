import axios from "axios";
import { format } from "date-fns";
import { GoTrash } from "react-icons/go";
import { toast } from "react-toastify";

const MyBookingsTable = ({ myBooking, idx, fetchMyBookings }) => {
  const {
    _id,
    car_image,
    car_model,
    daily_rental_price,
    booking_date,
    booking_status,
  } = myBooking;

  const api_url = import.meta.env.VITE_API_URL;
  // Function for change status
  const handleUpdateBookingStatus = async (id, prevStatus, updatedStatus) => {
    // console.table({ id, prevStatus, updatedStatus });
    try {
      await axios.patch(`${api_url}/update-booking-status/${id}`, {
        booking_status: updatedStatus,
      });
      fetchMyBookings();
      toast.success("Booked Status Changed");
    } catch (error) {
      toast.error(error.message);
    }
  };
  // Function for change status
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
          ${daily_rental_price}/<sub className="text-xs">daily</sub>
        </td>
        <td>{format(new Date(booking_date), "P")}</td>
        <td>
          <span
            className={`px-3 py-2 rounded-full text-center font-semibold ${
              booking_status === "Confirmed" &&
              "bg-blue-100 text-blue-800 border border-blue-500"
            } ${
              booking_status === "Pending" &&
              "bg-yellow-100 text-yellow-800 border border-yellow-500"
            } ${
              booking_status === "Canceled" &&
              "bg-red-100 text-red-800 border border-red-500"
            }`}
          >
            {booking_status}
          </span>
        </td>
        <td>
          <div className="flex sm:flex-row sm:flex flex-col gap-4 items-center">
            <button
              onClick={() =>
                handleUpdateBookingStatus(_id, booking_status, "Canceled")
              }
              className="flex items-center text-md gap-1 btn btn-sm text-white font-semibold text-md bg-red-500 border-none hover:text-primary hover:bg-white hover:shadow-md"
            >
              <GoTrash className="text-xs font-extrabold" />
              Cancel
            </button>
            <button
              onClick={() =>
                handleUpdateBookingStatus(_id, booking_status, "Confirmed")
              }
              className="btn btn-sm text-white font-semibold text-md bg-blue-500 border-none"
            >
              Confirm
            </button>
            <button className="btn btn-sm text-white font-semibold text-md bg-yellow-400 border-none">
              🗓 Modify Date
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyBookingsTable;
