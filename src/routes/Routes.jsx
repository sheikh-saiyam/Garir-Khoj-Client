import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import PrivateRoute from "./PrivateRoute";
import AvailableCars from "../pages/AvailableCars";
import AddCar from "../pages/AddCar";
import MyCars from "../pages/MyCars";
import CarDetails from "../pages/CarDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MyBookings from "../pages/MyBookings";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      // Car Related Routes -->
      {
        path: "/available-cars",
        element: <AvailableCars />,
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cars",
        element: (
          <PrivateRoute>
            <MyCars />
          </PrivateRoute>
        ),
      },
      {
        path: "/car-details/:id",
        element: <CarDetails />,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      // Authentication Route --->
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // Public Route --->
      {
        path: "/service",
        element: <Services />,
      },
    ],
  },
]);

export default router;
