import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logoWhite.png";

const Footer = () => {
  return (
    <footer className="text-white py-12 mx-auto w-11/12 md:w-10/12 max-w-screen-2xl">
      <div className="mb-12">
        <div className="text-center">
          <img className="w-52 h-44 mx-auto" src={logo} alt="" />
        </div>
        <div className="text-center w-11/12 md:w-10/12 mx-auto">
          <h1 className="mt-3 text-xl md:text-2xl lg:text-3xl font-bold ">
            Your Trusted <span className="text-primary">Car Rental</span>{" "}
            Solution in Bangla<span className="text-primary">desh</span>
          </h1>
          <p className="mt-4 text-gray-200">
            GarirKhoj.com is Bangladesh’s go-to car rental platform, offering a
            wide range of affordable, reliable, and convenient vehicles for
            business trips, family vacations, or daily commutes.
            <span className="hidden md:inline">
              With seamless booking and top-notch customer support, we make
              every journey stress-free. Rent your ride, your way!
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-8 flex-wrap justify-between">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Information</h3>
          <div className="flex items-center space-x-4">
            <div className="bg-primary p-2 text-xl rounded-full">
              <IoCall />
            </div>
            <p className="text-lg font-medium">+880100-0101010</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-primary p-2 text-xl rounded-full">
              <MdEmail />
            </div>
            <p className="text-lg font-medium">info@garirkhoj.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-primary p-2 text-xl rounded-full">
              <FaMapMarkerAlt />
            </div>
            <p className="text-lg font-medium">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">All Cars</li>
            <li className="hover:text-white cursor-pointer">Our Team</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="lg:w-4/12">
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <p className="mb-4 text-gray-200">
            Want to be notified about our services? Just sign up and we&apos;ll
            send you a notification by email.
          </p>
          <div className="flex items-center border-2 border-primary rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-white w-fit px-4 py-2 outline-none flex-grow placeholder-gray-200 font-semibold"
            />
            <button className="bg-primary btn rounded-none border-none py-2 px-4 text-xl  hover:bg-accent transition">
              <IoMdSend />
            </button>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-center space-x-6 mt-8">
        <div className="bg-primary p-2 text-2xl rounded-full cursor-pointer hover:bg-accent">
          <FaYoutube />
        </div>
        <div className="bg-primary p-2 text-2xl rounded-full cursor-pointer hover:bg-accent">
          <FaFacebook />
        </div>
        <div className="bg-primary p-2 text-2xl rounded-full cursor-pointer hover:bg-accent">
          <FaInstagram />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-200 font-semibold text-sm">
        <p>©2024 GarirKhoj.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
