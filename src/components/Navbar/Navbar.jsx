import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logoWhite.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { IoAddCircle } from "react-icons/io5";
import { FaBookmark, FaCarSide } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const location = useLocation();
  const theme = localStorage.getItem("theme");
  const { user, logOut, loading } = useAuth();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (location.pathname === "/login" || location.pathname === "/register")
    return null;

  return (
    <div className="mx-auto w-11/12 max-w-screen-2xl pt-4 pb-8 md:py-4 flex justify-between items-center">
      <div>
        {theme === "dark" ? (
          <Link>
            <img
              className="w-28 h-24 border-l border-dashed"
              src={logoWhite}
              alt="GarirKhoj.com"
            />
          </Link>
        ) : (
          <Link>
            <img
              className="w-28 h-24 border-l border-dashed"
              src={logo}
              alt="GarirKhoj.com"
            />
          </Link>
        )}
      </div>
      <div className="flex gap-4 items-center">
        {/* Navbar for larger screens */}
        <ul className="menu menu-horizontal items-center space-x-6 hidden md:flex">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "font-extrabold tracking-wider text-base text-primary rounded-xl"
                : "text-base font-semibold hover:text-primary dark:text-white hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/available-cars"}
            className={({ isActive }) =>
              isActive
                ? "font-extrabold tracking-wider text-base text-primary rounded-xl"
                : "text-base font-semibold hover:text-primary dark:text-white hover:underline"
            }
          >
            Available Cars
          </NavLink>
          <NavLink
            to={"/service"}
            className={({ isActive }) =>
              isActive
                ? "font-extrabold tracking-wider text-base text-primary rounded-xl"
                : "text-base font-semibold hover:text-primary dark:text-white hover:underline"
            }
          >
            Services
          </NavLink>
        </ul>

        {/* private routes */}
        {user && user.email && (
          <div className="hidden md:block relative group z-10">
            <button className="flex gap-1 items-center text-base font-semibold hover:text-primary dark:text-white hover:underline">
              Dashboard
              <IoIosArrowDropdown className="text-xl" />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 ease-in-out z-50 text-center tracking-wider font-medium border-2 border-primary">
              <NavLink
                to={"/add-car"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center justify-center py-2 px-4 gap-1 bg-primary text-white font-bold"
                    : "bg-bgPrimary flex items-center justify-center py-2 px-4 gap-1 hover:bg-[#fff] hover:underline underline-offset-[3px] hover:text-primary dark:text-black hover:font-semibold duration-300 "
                }
              >
                <IoAddCircle />
                Add A Car
              </NavLink>
              <NavLink
                to={"/my-cars"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center justify-center py-2 px-4 gap-1 bg-primary text-white font-bold"
                    : "bg-bgPrimary flex items-center justify-center py-2 px-4 gap-1 hover:bg-[#fff] hover:underline underline-offset-[3px] hover:text-primary dark:text-black hover:font-semibold duration-300 "
                }
              >
                <FaCarSide />
                My Added Cars
              </NavLink>
              <NavLink
                to={"/my-bookings"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center justify-center py-2 px-4 gap-1 bg-primary text-white font-bold"
                    : "bg-bgPrimary flex items-center justify-center py-2 px-4 gap-1 hover:bg-[#fff] hover:underline underline-offset-[3px] hover:text-primary dark:text-black hover:font-semibold duration-300 "
                }
              >
                <FaBookmark />
                My Bookings
              </NavLink>
            </div>
          </div>
        )}
        {/* private routes */}

        {/* Conditional login btn & user dropdown with logout */}
        <div className="hidden md:flex gap-x-3">
          {user && user.email ? (
            <div className="dropdown hover:dropdown-open dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt={user?.displayName}
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded mt-1 z-10 w-max p-4 shadow border"
              >
                <div>
                  <img
                    referrerPolicy="no-referrer"
                    className="mx-auto w-20 h-20 rounded-full my-4"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                </div>
                <p className="font-semibold text-center my-1">
                  {user?.displayName}
                </p>
                <p className="font-semibold text-center my-1">{user.email}</p>
                <div className="mt-2">
                  {location.pathname === "/my-cars" ||
                  location.pathname === "/my-bookings" ? (
                    <></>
                  ) : (
                    <button
                      onClick={logOut}
                      className="btn rounded w-full btn-sm bg-primary text-white hover:bg-transparent hover:text-primary dark:text-white hover:border-primary hover tracking-wide text-lg font-semibold dark:hover:text-primary"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </ul>
            </div>
          ) : loading ? (
            <span className="loading loading-spinner loading-md text-primary"></span>
          ) : (
            <div>
              <NavLink
                to={"/login"}
                className="btn bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary dark:text-white hover:border-primary hover:border-2 tracking-wide text-lg font-semibold dark:border-none dark:hover:bg-white dark:hover:text-primary"
              >
                Login
              </NavLink>
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>
      {/* Conditional login btn & user dropdown with logout */}

      {/* Navbar for mobile (md and below) */}
      <div className="flex md:hidden gap-2 items-center">
        <MobileNavbar
          user={user}
          logOut={logOut}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />
        <ThemeToggle />
      </div>
      {/* Navbar for mobile (md and below) */}
    </div>
  );
};

export default Navbar;
