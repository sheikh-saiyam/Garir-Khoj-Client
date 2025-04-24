import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const navigate = useNavigate();
  const location = useLocation();
  const navigatePath = location.state?.pathname || "/";

  const { setUser, userLogin, googleLogin } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate(navigatePath);
        // for login modal
        Swal.fire({
          icon: "success",
          title: `Congratulation Login Success, Welcome, ${currentUser.displayName}!`,
          text: "We're so glad to have you here. Enjoy exploring our site!",
          showConfirmButton: false,
          background: "#f0f8ff",
          color: "#4B0082",
          timer: 3000,
        });
      })
      .catch((err) => {
        if (err.message) {
          setError("Incorrect Email Or Password");
        }
      });
  };

  // function for google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate(navigatePath);
        // for login modal
        Swal.fire({
          icon: "success",
          title: `Congratulation Login Success, Welcome, ${currentUser.displayName}!`,
          text: "We're so glad to have you here. Enjoy exploring our site!",
          showConfirmButton: false,
          background: "#f0f8ff",
          color: "#4B0082",
          timer: 3000,
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  // for toggle password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // for toggle password
  return (
    <div className="bg-base-200 dark:bg-black">
      <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-7 flex flex-col-reverse md:flex md:flex-row justify-center items-center h-screen">
        <div className="bg-white border-2 dark:bg-[#1b1b1b] py-7 px-8 w-full md:w-10/12 lg:w-6/12">
          <div className="mb-4">
            <Link
              to={"/"}
              className="flex btn btn-sm w-fit rounded border border-gray-300 items-center gap-2 font-semibold text-lg text-[#494949] hover:bg-gray-200 hover:underline duration-700"
            >
              <IoMdArrowRoundBack size={30} />
              Back To Home
            </Link>
            <h1 className="mt-4 flex items-center gap-2 text-3xl font-bold text-text dark:text-white">
              <LuLogIn />
              Login To Start!
            </h1>
          </div>
          <div className="bg-white ">
            <div>
              <button
                onClick={handleGoogleLogin}
                className="btn bg-yellow-400 border-none w-full rounded-full 
                flex gap-3 items-center text-lg text-white font-semibold"
              >
                <FaGoogle className="text-xl"></FaGoogle> Log in Google
              </button>
            </div>
            <div className="divider font-semibold">
              Or Login with Email & Password
            </div>
            <form onSubmit={handleLogin} className="card-body p-0 gap-0">
              <div className="form-control">
                <label className="label px-0">
                  <span className="font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label px-0">
                  <span className="font-semibold">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <label
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-xl"
                    aria-label="Toggle password visibility"
                  >
                    {passwordVisible ? <IoEyeSharp /> : <IoEyeOffSharp />}
                  </label>
                </div>
                <label className="label">
                  <p className="font-semibold underline link link-hover my-2">
                    Forget password?
                  </p>
                </label>
              </div>
              {error && (
                <label className="block text-red-500 bg-red-100 p-2 rounded-lg text-center mb-6 text-lg font-semibold">
                  {error}
                </label>
              )}
              <div className="form-control">
                <button className="btn w-full text-lg font-bold text-white bg-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
