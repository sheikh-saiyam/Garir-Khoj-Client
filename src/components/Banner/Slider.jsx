// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Slider = () => {
  return (
    <div className="py-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="Drive Your Dreams Today!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://images.pexels.com/photos/18231618/pexels-photo-18231618/free-photo-of-a-car-parked-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="Your Next Car Awaits You."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://images.pexels.com/photos/7144207/pexels-photo-7144207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="Turn Your Dream Ride Into Reality!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
