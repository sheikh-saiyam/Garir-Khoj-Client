import { useState } from "react";
import logo from "../assets/logoWhite.png";
import { LuLogIn } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineError } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
const Register = () => {
  const { setUser, createNewUser, googleLogin, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // validation
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password Must have a Lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password Must have a Uppercase letter");
      return;
    }
    // validation

    createNewUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser({
            ...currentUser,
            displayName: name,
            photoURL: photo,
          });
        });
        navigate("/");

        // for account create modal
        Swal.fire({
          icon: "success",
          title: `Account created successfully , Welcome, ${name}!`,
          text: "We're so glad to have you here. Enjoy exploring our site!",
          showConfirmButton: false,
          background: "#f0f8ff",
          color: "#4B0082",
          timer: 3000,
        });
      })
      .catch((error) => {
        if (error.message) {
          setError("Email Already Used");
        }
      });
  };

  // function for google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate("/");

        // for welcome modal
        Swal.fire({
          icon: "success",
          title: `Welcome, ${currentUser.displayName}!`,
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
    <div>
      <div className="bg-base-200">
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-12 flex flex-col-reverse md:flex md:flex-row">
          <div className="bg-white py-12 px-8 md:w-7/12">
            <div className="mb-4">
              <h1 className="flex items-center gap-2 text-3xl font-bold">
                <LuLogIn />
                Register Page
              </h1>
            </div>
            <div>
              <button
                onClick={handleGoogleLogin}
                className="btn bg-yellow-400 border-none w-full rounded-full 
               flex gap-3 items-center text-lg text-white font-semibold"
              >
                <FaGoogle className="text-xl"></FaGoogle> Register By Google
              </button>
            </div>
            <div className="divider font-semibold">Or</div>
            <form onSubmit={handleRegister} className="card-body p-0 gap-0">
              {/* name & photo */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="form-control">
                  <label className="label px-0">
                    <span className="font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label px-0">
                    <span className="font-semibold">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo Url"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* name & photo */}
              {/* email & password */}
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
              </div>
              {error && (
                <label className=" flex justify-center items-center gap-2 mt-6 text-red-500 bg-red-100 p-2 rounded-lg text-center mb-2 text-lg font-semibold">
                  <MdOutlineError className="text-xl" />
                  {error}
                </label>
              )}
              {/* button div */}
              <div className="form-control mt-4">
                <button className="btn w-full text-lg font-bold text-white bg-primary">
                  Register
                </button>
              </div>
              {/* button div */}
            </form>
          </div>
          <div className="bg-primary py-12 px-6 md:w-5/12 flex flex-col justify-center items-center text-center">
            <div className="text-white space-y-2 md:space-y-4">
              <div>
                <img className="mx-auto h-44 w-fit" src={logo} alt="" />
              </div>
              <h1 className="font-bold text-3xl md:text-4xl">
                Welcome to Register Page
              </h1>
              <div className="w-full flex flex-wrap gap-2 items-center justify-center">
                <h3 className="font-semibold text-lg md:text-xl">
                  Already have an account
                </h3>
                <Link
                  to={"/Login"}
                  className=" bg-transparent border-2  border-white btn w-fit text-lg font-bold rounded-full text-white"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
