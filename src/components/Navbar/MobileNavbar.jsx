import { FaBookmark, FaCarSide } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({
  user,
  logOut,
  isOpen,
  setIsOpen,
  isOpenMenu,
  setIsOpenMenu,
}) => {
  return (
    <div className="dropdown dropdown-end md:hidden">
      <div>
        <label
          tabIndex={0}
          className="btn bg-primary text-white  dark:border-none font-bold rounded duration-500"
          onClick={() =>
            isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true)
          }
        >
          {isOpenMenu ? <MdClose size={25} /> : <GiHamburgerMenu size={25} />}
        </label>
        <ul
          tabIndex={0}
          className={` ${
            isOpenMenu
              ? "dropdown-content menu menu-vertical text-center bg-base-100 rounded z-10 w-64 p-4 mt-2 border shadow duration-500"
              : "hidden"
          }`}
        >
          <NavLink
            to={"/"}
            onClick={() => setIsOpenMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-base py-1 text-white rounded bg-primary border my-[5px] border-primary"
                : "text-base font-semibold py-1 text-primary rounded bg-transparent border my-[5px] border-primary hover:text-white hover:bg-primary hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/available-cars"}
            onClick={() => setIsOpenMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-base py-1 text-white rounded bg-primary border my-[5px] border-primary"
                : "text-base font-semibold py-1 text-primary rounded bg-transparent border my-[5px] border-primary hover:text-white hover:bg-primary hover:underline"
            }
          >
            Available Cars
          </NavLink>

          {/* Private Routes */}

          {user && user.email && (
            <>
              <button
                onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
                className="my-2 flex justify-center gap-1 items-center text-base font-semibold hover:text-primary duration-200 hover:underline underline-offset-[2px]"
              >
                Dashboard
                <IoIosArrowDropdown className="text-xl" />
              </button>
              <div
                className={`${
                  isOpen ? "flex flex-col duration-500" : "hidden"
                }`}
              >
                <NavLink
                  to={"/add-car"}
                  onClick={() => setIsOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-base py-1 text-white rounded bg-primary border my-[5px] border-primary flex items-center gap-1 justify-center"
                      : "text-base font-semibold py-1 text-primary rounded bg-transparent border my-[5px] border-primary hover:text-white hover:bg-primary hover:underline flex items-center gap-1 justify-center"
                  }
                >
                  <IoAddCircle /> Add A Car
                </NavLink>
                <NavLink
                  to={"/my-cars"}
                  onClick={() => setIsOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-base py-1 text-white rounded bg-primary border my-[5px] border-primary flex items-center gap-1 justify-center"
                      : "text-base font-semibold py-1 text-primary rounded bg-transparent border my-[5px] border-primary hover:text-white hover:bg-primary hover:underline flex items-center gap-1 justify-center"
                  }
                >
                  <FaCarSide /> My Added Cars
                </NavLink>
                <NavLink
                  to={"/my-bookings"}
                  onClick={() => setIsOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-base py-1 text-white rounded bg-primary border my-[5px] border-primary flex items-center gap-1 justify-center"
                      : "text-base font-semibold py-1 text-primary rounded bg-transparent border my-[5px] border-primary hover:text-white hover:bg-primary hover:underline flex items-center gap-1 justify-center"
                  }
                >
                  <FaBookmark /> My Bookings
                </NavLink>
              </div>
            </>
          )}
          {/* Private Routes */}

          {/* Login button for mobile view */}
          {user && user.email && user?.photoURL ? (
            <div>
              <div className="dropdown dropdown-end">
                <div>
                  <img
                    className="mx-auto w-14 h-14 rounded-full my-4"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <p className="text-center font-semibold my-1">
                  {user.displayName}
                </p>
                <p className="text-center font-semibold my-1">{user.email}</p>
              </div>
              <button
                onClick={logOut}
                className="btn mt-2 w-full btn-sm rounded bg-white border border-primary text-primary hover:bg-primary hover:text-white tracking-wide text-lg font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              onClick={() => setIsOpenMenu(false)}
              className="btn mt-2 btn-sm rounded bg-white text-primary text-base border-primary hover:bg-primary hover:text-white"
            >
              Login
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
