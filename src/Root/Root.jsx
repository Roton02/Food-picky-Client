import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Shared/Navber/Navbar";
import Footer from "../Shared/Navber/Footer/Footer";
import Header from "../Shared/Header/Header";
AOS.init();

const Root = () => {
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <div className="">
        <div className="max-w-7xl mx-auto ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
