import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCarsTable = ({ myCar, idx, fetchMyCars }) => {
  const {
    _id,
    car_image,
    car_model,
    daily_rental_price,
    availability,
    added_date,
    bookingCount,
  } = myCar;
  // Delete Car Function
  const api_url = import.meta.env.VITE_API_URL;
  const handleDeleteCar = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${api_url}/car/${id}`).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Car has been deleted.",
            icon: "success",
          });
          fetchMyCars();
        });
      }
    });
  };
  // Delete Car Function
  return (
    <>
      <tr className="hover">
        <th>{idx + 1}</th>
        <td className="px-0">
          <img
            className="h-10 w-full sm:h-20 sm:w-40 border"
            src={car_image}
            alt=""
          />
        </td>
        <td>{car_model}</td>
        <td>
          ${daily_rental_price}/<sub className="text-xs">daily</sub>
        </td>
        <td>
          {availability}{" "}
          {availability === "Yes" ? (
            <sub className="text-xs font-normal text-blue-500">(Available)</sub>
          ) : (
            <sub className="text-xs font-normal text-primary">
              (Un Available)
            </sub>
          )}
        </td>
        <td>{format(new Date(added_date), "P")}</td>
        <td>Total Count: {bookingCount}</td>
        <td>
          <div className="flex sm:flex-row sm:flex flex-col gap-2 items-center">
            <Link
              // to={`/update-review/${_id}`}
              className="btn btn-sm text-white font-semibold text-md bg-blue-500 border-none"
            >
              Update
            </Link>
            <button
              onClick={() => handleDeleteCar(_id)}
              className="btn btn-sm text-white font-semibold text-md bg-red-500 border-none hover:text-primary hover:bg-white hover:shadow-md"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyCarsTable;
