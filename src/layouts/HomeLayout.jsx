import { useEffect } from "react";
import Slider from "../components/Banner/Slider";
import RecentListings from "../components/HomeSections/RecentListings";
import UserTestimonials from "../components/HomeSections/UserTestimonials";
import WhyChooseUs from "../components/HomeSections/WhyChooseUs";
import SpecialOffers from "../components/HomeSections/SpecialOffers";
import FAQ from "../components/HomeSections/FAQ";

const HomeLayout = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="dark:bg-black">
      <div className="pb-20 w-11/12 mx-auto max-w-screen-2xl">
        <Slider></Slider>
      </div>
      <div className="mx-auto w-11/12 max-w-[1400px] pb-20">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div>
        <RecentListings></RecentListings>
      </div>
      <div>
        <UserTestimonials></UserTestimonials>
      </div>
      <div className="w-11/12 mx-auto max-w-[1400px]">
        <SpecialOffers></SpecialOffers>
      </div>
      <div className="pb-20 w-11/12 md:w-10/12 mx-auto max-w-screen-xl">
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default HomeLayout;
