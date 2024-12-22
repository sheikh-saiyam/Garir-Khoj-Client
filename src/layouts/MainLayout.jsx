import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="mx-auto w-11/12 max-w-screen-2xl py-4">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="bg-[#1b1b1b]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
