import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";
import MyCarsTable from "../components/Tables/MyCarsTable";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyCars = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const { user } = useAuth();
  const api_url = import.meta.env.VITE_API_URL;
  const axiosSecure = useAxiosSecure();
  const [myCars, setMyCars] = useState([]);
  const [loader, setLoader] = useState(true);
  const fetchMyCars = async () => {
    try {
      const { data } = await axiosSecure.get(`${api_url}/cars/${user.email}`);
      setMyCars(data);
      setLoader(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchMyCars();
  }, [api_url, user.email]);

  // console.log(myCars);
  return (
    <div className="dark:bg-black">
      <div className="w-11/12 mx-auto md:w-10/12 max-w-[1400px] py-12">
        {myCars.length === 0 ? (
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
                    No cars have been added yet
                  </h1>
                  <h3 className="font-semibold text-[#353535] text-xl md:text-2xl lg:text-3xl my-4 text-center font-serif">
                    Add a car to get started!
                  </h3>
                  <Link
                    to={"/add-car"}
                    className="btn btn-wide bg-primary text-white text-lg font-semibold border-2 border-primary hover:bg-white hover:text-primary hover:border-primary"
                  >
                    Add A Car
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
                  <h1 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif dark:text-white">
                    My Added All{" "}
                    <Typewriter
                      words={["Cars"]}
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
                        <th className="px-0 font-bold dark:text-white">
                          Car Image
                        </th>
                        <th className="text-md font-bold dark:text-white">
                          Car Model
                        </th>
                        <th className="text-md font-bold dark:text-white">
                          Rental Price
                        </th>
                        <th className="text-md font-bold dark:text-white">
                          Availability
                        </th>
                        <th className="text-md font-bold dark:text-white">
                          Date Added
                        </th>
                        <th className="text-md font-bold dark:text-white">
                          Booking Count
                        </th>
                        <th className="text-md font-bold dark:text-white">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {myCars.map((myCar, idx) => (
                        <MyCarsTable
                          key={myCar._id}
                          myCar={myCar}
                          idx={idx}
                          fetchMyCars={fetchMyCars}
                        ></MyCarsTable>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyCars;
