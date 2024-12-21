import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link>
          <img className="w-28 h-24" src={logo} alt="GarirKhoj.com" />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {/* Navbar for larger screens */}
        <ul className="menu menu-horizontal items-center space-x-6 hidden md:flex">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "font-extrabold tracking-wider text-base text-primary flex gap-1 rounded-xl"
                : "text-base font-semibold hover:text-primary hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/available-cars"}
            className={({ isActive }) =>
              isActive
                ? "font-extrabold tracking-wider text-base text-primary flex gap-1 rounded-xl"
                : "text-base font-semibold hover:text-primary hover:underline"
            }
          >
            Available Cars
          </NavLink>

          {/* Private Routes */}
          {user && user.email && (
            <>
              <NavLink
                to={"/add-car"}
                className={({ isActive }) =>
                  isActive
                    ? "font-extrabold tracking-wider text-base text-primary flex gap-1 rounded-xl"
                    : "text-base font-semibold hover:text-primary hover:underline"
                }
              >
                Add Car
              </NavLink>
              <NavLink
                to={"/my-cars"}
                className={({ isActive }) =>
                  isActive
                    ? "font-extrabold tracking-wider text-base text-primary flex gap-1 rounded-xl"
                    : "text-base font-semibold hover:text-primary hover:underline"
                }
              >
                My Cars
              </NavLink>
              <NavLink
                to={"/my-bookings"}
                className={({ isActive }) =>
                  isActive
                    ? "font-extrabold tracking-wider text-base text-primary flex gap-1 rounded-xl"
                    : "text-base font-semibold hover:text-primary hover:underline"
                }
              >
                My Bookings
              </NavLink>
            </>
          )}
          {/* Private Routes */}
        </ul>

        {/* Conditional login btn & user dropdown with logout */}
        <div className="hidden md:flex">
          {user && user.email && user?.photoURL ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-4 shadow"
              >
                <div>
                  <img
                    className="mx-auto w-20 h-20 rounded-full my-4"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <li>
                  <a className="font-semibold">Name: {user.displayName}</a>
                </li>
                <li>
                  <a className="font-semibold">Email: {user.email}</a>
                </li>
                <div className="mt-2">
                  <button
                    onClick={logOut}
                    className="btn w-full btn-sm bg-transparent hover:bg-primary hover:text-white hover:bg-transparent text-primary border-primary border-2 hover:border-none tracking-wide text-lg font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </ul>
            </div>
          ) : (
            <div>
              <NavLink
                to={"/login"}
                className="btn bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary hover:border-2 tracking-wide text-lg font-semibold"
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
      {/* Conditional login btn & user dropdown with logout */}

      {/* Navbar for mobile (md and below) */}
      <div className="dropdown dropdown-end md:hidden">
        <div>
          <label tabIndex={0} className="btn btn-primary btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box w-fit p-4 shadow"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg text-primary flex gap-1 rounded-xl"
                  : "text-base font-semibold hover:text-primary hover:underline"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/available-cars"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg text-primary flex gap-1 rounded-xl"
                  : "text-base font-semibold hover:text-primary hover:underline"
              }
            >
              Available Cars
            </NavLink>

            {/* Private Routes */}
            {user && user.email && (
              <>
                <NavLink
                  to={"/add-car"}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-lg text-primary flex gap-1 rounded-xl"
                      : "text-base font-semibold hover:text-primary hover:underline"
                  }
                >
                  Add Car
                </NavLink>
                <NavLink
                  to={"/my-cars"}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-lg text-primary flex gap-1 rounded-xl"
                      : "text-base font-semibold hover:text-primary hover:underline"
                  }
                >
                  My Cars
                </NavLink>
                <NavLink
                  to={"/my-bookings"}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-lg text-primary flex gap-1 rounded-xl"
                      : "text-base font-semibold hover:text-primary hover:underline"
                  }
                >
                  My Bookings
                </NavLink>
              </>
            )}
            {/* Private Routes */}

            {/* Login button for mobile view */}
            {user && user.email && user?.photoURL ? (
              <div>
                <div className="dropdown dropdown-end">
                  <div>
                    <img
                      className="mx-auto w-20 h-20 rounded-full my-4"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <li>
                    <a className="font-semibold">Name: {user.displayName}</a>
                  </li>
                  <li>
                    <a className="font-semibold">Email: {user.email}</a>
                  </li>
                </div>
                <button className="btn w-full btn-sm hover:bg-primary hover:text-white hover:bg-transparent text-primary border-primary border-2 hover:border-none tracking-wide text-lg font-semibold">
                  Logout
                </button>
              </div>
            ) : (
              <NavLink className="btn bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary hover:border-2 tracking-wide text-lg font-semibold">
                Login
              </NavLink>
            )}
          </ul>
        </div>
      </div>
      {/* Navbar for mobile (md and below) */}
    </div>
  );
};

export default Navbar;
