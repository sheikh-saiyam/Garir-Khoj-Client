import { Link } from "react-router-dom";

const MyCarsTable = ({ myCar, idx }) => {
  const { car_image, car_model, daily_rental_price, availability, added_date } =
    myCar;
  return (
    <>
      <tr className="hover">
        <th>{idx + 1}</th>
        <td className="px-0">
          <img className="h-10 w-full sm:h-14 sm:w-32" src={car_image} alt="" />
        </td>
        <td>{car_model}</td>
        <td>{daily_rental_price}</td>
        <td>{availability}</td>
        <td>{added_date}</td>
        <td>
          <div className="flex sm:flex-row sm:flex flex-col gap-2 items-center">
            <Link
              //   to={`/update-review/${_id}`}
              className="btn btn-sm text-white font-semibold text-md bg-blue-500"
            >
              Update
            </Link>
            <button
              //   onClick={() => handleDeleteReview(_id)}
              className="btn btn-sm text-white font-semibold text-md bg-red-500 "
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
