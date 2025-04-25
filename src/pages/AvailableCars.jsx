import { IoGrid } from "react-icons/io5";
import CarCard from "../components/Car/CarCard";
import { FaList } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CarListCard from "../components/Car/CarListCard";
import Loader from "../components/Loader/Loader";
import CarCardSkeleton from "../components/Skeleton/CarCardSkeleton";
import CarListCardSkeleton from "../components/Skeleton/CarListCardSkeleton";

const AvailableCars = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const [layout, setLayout] = useState(true);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [sortByDate, setSortByDate] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [cars, setCars] = useState([]);

  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axios.get(
          `${api_url}/available-cars?search=${search}&sortByPrice=${sortByPrice}&sortByDate=${sortByDate}`
        );
        setCars(data);
        setLoader(false);
      } catch (error) {
        toast.error(
          `Error Caught: ${
            error?.message || "Something Went Wrong While Fetching Data"
          }`
        );
      }
    };
    fetchCars();
  }, [api_url, search, sortByDate, sortByPrice]);

  // for reset function
  const handleReset = () => {
    setSearch("");
    setSortByDate("");
    setSortByPrice("");
  };

  return (
    <div className="bg-[#f9f9f9] dark:bg-black">
      <div className="mx-auto w-11/12 max-w-[1400px] py-12 space-y-6 lg:space-y-0 lg:flex gap-8">
        <div className="w-full lg:w-3/12 h-max grid place-content-stretch bg-white rounded-xl shadow px-4 pt-4 pb-6 dark:bg-[#1b1b1b]">
          {/* Layout toggle */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-[#2a2a2a] dark:text-white my-2">
              Layout
            </h1>
            <div className="flex items-center gap-2 bg-[#f9f9f9] p-2 border rounded-lg">
              <button
                onClick={() => setLayout(true)}
                className={` rounded-md ${
                  layout ? "bg-primary dark:bg-[#1b1b1b] text-white" : ""
                } p-1`}
              >
                <IoGrid className="text-xl" />
              </button>
              <button
                onClick={() => setLayout(false)}
                className={` rounded-md ${
                  !layout ? "bg-primary dark:bg-[#1b1b1b] text-white" : ""
                } p-1`}
              >
                <FaList className="text-xl" />
              </button>
            </div>
          </div>
          {/* Search */}
          <div>
            <h1 className="text-xl font-bold text-[#2a2a2a]  dark:text-white  my-2">
              Search
            </h1>
          </div>
          <div>
            <input
              className="px-4 py-3 text-gray-500 placeholder-gray-500 bg-red-100/20 outline-none  dark:text-black dark:placeholder-black dark:border-none  dark:bg-white border-primary border rounded-lg w-full focus:placeholder-transparent"
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"Search Car By Model"}
              aria-label="Enter Job Title"
            />
            <div className="flex float-end my-2 w-5/12">
              <button className="btn bg-primary dark:border-none text-lg text-white btn-sm w-full flex">
                Search
              </button>
            </div>
          </div>
          {/* Sort By Date & Price */}
          <div>
            <h1 className="text-xl font-bold text-[#2a2a2a]  dark:text-white  mt-2 mb-4">
              Sort By
            </h1>
          </div>
          {/* Sort by date */}
          <div>
            <select
              value={sortByDate}
              onChange={(e) => setSortByDate(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Sort By Added Date
              </option>
              <option value={"dsc"}>Newest First</option>
              <option value={"asc"}>Oldest First</option>
            </select>
          </div>
          {/* sort by price */}
          <div className="mt-4">
            <select
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value={""} disabled>
                Sort By Rental Price
              </option>
              <option value={"asc"}>Lowest First</option>
              <option value={"dsc"}>Highest First</option>
            </select>
          </div>
          {/* Reset Button */}
          <div>
            <button
              onClick={handleReset}
              className="mt-4 btn btn-sm w-5/12 float-end bg-black text-white text-lg font-semibold dark:bg-white dark:text-black"
            >
              Reset
            </button>
          </div>
          {/* Reset Button */}
        </div>
        {/* Car Grid Card & Car List Card div */}
        <div className="w-full lg:w-9/12">
          {layout ? (
            loader ? (
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                {[0, 1, 2, 3, 4, 5].map((_, i) => (
                  <CarCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                {cars.map((car) => (
                  <CarCard key={car._id} car={car}></CarCard>
                ))}
              </div>
            )
          ) : loader ? (
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {[0, 1, 2, 3, 4, 5].map((_, i) => (
                <CarListCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {cars.map((car) => (
                <CarListCard key={car._id} car={car}></CarListCard>
              ))}
            </div>
          )}
        </div>
        {/* Car Grid Card & Car List Card div */}
      </div>
    </div>
  );
};

export default AvailableCars;
