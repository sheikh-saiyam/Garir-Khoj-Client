import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import RecentListingsCars from "./RecentListingsCars";

const RecentListings = () => {
  const [cars, setCars] = useState([]);
  const api_url = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axios.get(`${api_url}/recent-listings`);
        setCars(data);
      } catch {
        toast.error("Something Went Wrong");
      }
    };
    fetchCars();
  }, [api_url]);
  return (
    <div className="pb-20 w-11/12 mx-auto max-w-[1400px]">
      <div className="text-center">
        <button className="dark:text-primary dark:bg-white dark:border-none dark:font-bold text-base md:text-xl font-semibold py-3 px-6 rounded-full text-primary bg-red-100/60 border-primary border-2">
          Recent Listings
        </button>
        <p className="mt-6 font-medium mx-auto text-[#393939] dark:text-white text-sm md:text-lg max-w-3xl">
          Explore the newest additions to our platform! Browse through 6-8
          handpicked cars, each with a sleek design, detailed specs, and
          competitive pricing. Don’t miss out on the latest arrivals . your
          perfect car might just be here!
        </p>
      </div>
      <div className="mt-10">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <RecentListingsCars key={car._id} car={car}></RecentListingsCars>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentListings;
