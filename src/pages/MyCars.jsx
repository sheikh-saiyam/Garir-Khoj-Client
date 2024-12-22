import axios from "axios";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";
import MyCarsTable from "../components/Tables/MyCarsTable";

const MyCars = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const { user } = useAuth();
  const api_url = import.meta.env.VITE_API_URL;
  const [myCars, setMyCars] = useState([]);
  const [loader, setLoader] = useState(true);
  const fetchMyCars = async () => {
    const { data } = await axios.get(`${api_url}/cars/${user.email}`);
    setMyCars(data);
    setLoader(false);
  };
  useEffect(() => {
    fetchMyCars();
  }, [api_url, user.email]);

  // console.log(myCars);
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-10">
      {/* {myCars.length === 0 ? (
        <div className="text-center min-h-[450px] flex items-center justify-center border-accent border-2 rounded-2xl bg-bgPrimary w-10/12 mx-auto">
          <div className="space-y-4">
            <div>
              {/* <img className="mx-auto h-44 w-fit" src={logo} alt="" /> */}
      {/* </div>
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
                No Review Available
              </h1>
            </div>
          </div>
        </div>
    //   ) : ( */}
      <>
        {loader ? (
          <Loader></Loader>
        ) : (
          <>
            <div>
              <h1 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
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
                    <th className="px-0">Car Image</th>
                    <th>Car Model</th>
                    <th>Rental Price</th>
                    <th>Availability</th>
                    <th>Date Added</th>
                    <th>Booking Count</th>
                    <th>Actions</th>
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
      {/* )} */}
    </div>
  );
};

export default MyCars;
