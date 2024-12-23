import { Link } from "react-router-dom";
import errorLogo from "../../assets/errorLogo.webp";
const ErrorPage = () => {
  return (
    <div>
      <div className="bg-primary">
        <div className="mx-auto w-11/12 flex flex-col items-center text-center justify-center min-h-screen py-12">
          {/* Error Image */}
          <img src={errorLogo} className="w-72 h-72 border-2 rounded-xl" />
          {/* Error Text */}
          <h1 className="text-5xl font-bold text-white mt-6">
            Oops! Page Not Found
          </h1>
          <p className="text-white mt-4 text-center font-semibold">
            It seems like the page you’re looking for doesn’t exist.{" "}
            <br className="hidden md:block" /> Don’t worry, we’ll help you get
            back on track!
          </p>
          {/* Back to Home Button */}
          <Link
            to={"/"}
            className="mt-6 btn btn-wide text-lg font-bold text-primary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
