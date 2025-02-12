import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-[#fffbfb] border-[#ffdfe4] dark:bg-[#1b1b1b] border-b-2 dark:border-white">
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
