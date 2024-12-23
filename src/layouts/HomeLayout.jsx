import { useEffect } from "react";
import Slider from "../components/Banner/Slider";
import RecentListings from "../components/HomeSections/RecentListings";
import UserTestimonials from "../components/HomeSections/UserTestimonials";
import WhyChooseUs from "../components/HomeSections/WhyChooseUs";

const HomeLayout = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div>
      <div className="pb-20 mx-auto max-w-screen-2xl">
        <Slider></Slider>
      </div>
      <div className="mx-auto w-11/12 max-w-[1400px] pb-20">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <RecentListings></RecentListings>
      <div>
        <UserTestimonials></UserTestimonials>
      </div>
    </div>
  );
};

export default HomeLayout;
