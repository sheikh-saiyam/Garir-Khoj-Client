import Slider from "../components/Banner/Slider";
import RecentListings from "../components/HomeSections/RecentListings";

const HomeLayout = () => {
  return (
    <div>
      <div className="pb-12">
        <Slider></Slider>
      </div>
      <RecentListings></RecentListings>
    </div>
  );
};

export default HomeLayout;
