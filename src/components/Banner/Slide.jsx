import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat h-[450px] md:h-[500px] lg:h-[550px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex px-8 items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-5xl sm:mb-3">
            {text}
          </h1>
          <br />
          <Link
            to="/available-cars"
            className="w-full p-3 sm:px-5 sm:py-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-opacity-30 backdrop-blur-md bg-white rounded-md lg:w-auto hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            View Available Cars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
