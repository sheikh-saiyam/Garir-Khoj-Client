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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      // Car Related Routes
      {
        path: "/available-cars",
        element: <AvailableCars></AvailableCars>,
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cars",
        element: (
          <PrivateRoute>
            <MyCars></MyCars>
          </PrivateRoute>
        ),
      },
      {
        path: "/car-details/:id",
        element: <CarDetails></CarDetails>,
      },
      // Car Related Routes
      // Authentication
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // Authentication
    ],
  },
]);

export default router;
