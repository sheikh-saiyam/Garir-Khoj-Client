import {
  FaCar,
  FaDollarSign,
  FaCalendarCheck,
  FaHeadset,
} from "react-icons/fa";
import whyChooseUs from "../../assets/WhyChooseUs.png";
const WhyChooseUs = () => {
  return (
    <div>
      <span className="font-normal text-md text-primary">
        --- OUR FEATURES ---
      </span>
      <h2 className="mb-6 md:mb-4 text-3xl font-bold mt-2 text-gray-800">
        Why Choose Us?
      </h2>
      <section className="flex flex-col-reverse lg:flex lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-4 md:grid-cols-5 gap-6">
            {/* Wide Variety of Cars */}
            <div className="bg-red-100/5 border-primary col-span-2 md:col-span-3 p-4 border rounded-lg shadow">
              <div className="text-4xl text-indigo-600 mb-4">
                <FaCar />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2">
                Wide Variety of Cars
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                From budget-friendly options to luxury vehicles, we offer a wide
                range of cars to suit all needs.
              </p>
            </div>

            {/* Affordable Prices */}
            <div className="bg-white col-span-2 p-4 border rounded-lg shadow">
              <div className="text-4xl text-green-600 mb-4">
                <FaDollarSign />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2">
                Affordable Prices
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                Competitive daily rates you can count on, ensuring you get great
                value for your money.
              </p>
            </div>

            {/* Easy Booking Process */}
            <div className="bg-white col-span-2 p-4 border rounded-lg shadow">
              <div className="text-4xl text-blue-600 mb-4">
                <FaCalendarCheck />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2">
                Easy Booking Process
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                Book your ride in just a few clicks with our simple and seamless
                booking platform.
              </p>
            </div>

            {/* Customer Support */}
            <div className="bg-red-100/5 border-primary col-span-2 md:col-span-3 p-4 border rounded-lg shadow">
              <div className="text-4xl text-purple-600 mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2">
                Customer Support
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                Get 24/7 assistance for all your queries and enjoy a smooth
                experience throughout your journey.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="h-[300px] md:h-[450px] w-full"
            src={whyChooseUs}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
