import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          // If error caught then logout
          await logOut().then(() => {
            // Display a message after logout
            toast.error(
              `(${error.response.status}), Your session has expired. Please log in again.`,
              { autoClose: 3000 }
            );
          });
          // After logout navigate to login page
          navigate("/login");
        }
      }
    );
  }, [logOut, navigate]);
  return axiosInstance;
};

export default useAxiosSecure;
