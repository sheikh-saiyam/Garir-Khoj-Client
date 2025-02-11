import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MyBookingsTable from "../components/Tables/MyBookingsTable";
import { toast } from "react-toastify";
import DailyRentalPriceChart from "../components/Chart/DailyRentalPriceChart";
import { FaRegChartBar } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBookings = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const { user } = useAuth();
  const api_url = import.meta.env.VITE_API_URL;
  const axiosSecure = useAxiosSecure();
  const [myBookings, setMyBookings] = useState([]);
  const [loader, setLoader] = useState(true);
  const fetchMyBookings = async () => {
    try {
      const { data } = await axiosSecure.get(
        `${api_url}/bookings/${user.email}`
      );
      setMyBookings(data);
      setLoader(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchMyBookings();
  }, [api_url, user.email]);

  // console.log(myBookings);

  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-[1400px] pb-10 pt-6">
      {myBookings.length === 0 ? (
        loader ? (
          <Loader></Loader>
        ) : (
          <div className="text-center min-h-[450px] flex items-center justify-center border-accent border-2 rounded-2xl bg-bgPrimary w-10/12 mx-auto">
            <div className="space-y-4">
              <div>
                <img className="mx-auto h-44 w-fit" src={logo} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
                  No cars have been booked yet
                </h1>
                <h3 className="font-semibold text-[#353535] text-xl md:text-2xl lg:text-3xl my-4 text-center font-serif">
                  Book a car to get started!
                </h3>
                <Link
                  to={"/available-cars"}
                  className="btn btn-wide bg-primary text-white text-lg font-semibold border-2 border-primary hover:bg-white hover:text-primary hover:border-primary"
                >
                  Book A Car
                </Link>
              </div>
            </div>
          </div>
        )
      ) : (
        <>
          {loader ? (
            <Loader></Loader>
          ) : (
            <>
              <div>
                <h1 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
                  My{" "}
                  <Typewriter
                    words={["Booked Cars"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
              </div>
              <div className="overflow-x-auto border-2">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th className="px-0 font-bold">Car Image</th>
                      <th className="text-md font-bold">Car Model</th>
                      <th className="text-md font-bold">Total Booking Price</th>
                      <th className="text-md font-bold">
                        Booking Date Start To End
                      </th>
                      <th className="text-md font-bold text-center">
                        Booking Status
                      </th>
                      <th className="text-md font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myBookings.map((myBooking, idx) => (
                      <MyBookingsTable
                        key={myBooking._id}
                        myBooking={myBooking}
                        idx={idx}
                        fetchMyBookings={fetchMyBookings}
                      ></MyBookingsTable>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Chart Base On Daily Rental Price */}
          <div className="pt-20 pb-10">
            <div>
              <h1 className="mb-6 flex items-center gap-1 justify-center font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
                <FaRegChartBar className="text-accent" />
                Cars Daily Rental{" "}
                <Typewriter
                  words={["Price Chart"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
            </div>

            <div className="mt-10 border-l-4">
              <DailyRentalPriceChart
                chartData={myBookings}
              ></DailyRentalPriceChart>
            </div>
          </div>
          {/* Chart Base On Daily Rental Price */}
        </>
      )}
    </div>
  );
};

export default MyBookings;
