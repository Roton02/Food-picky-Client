import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Shared/Navber/Navbar";
import Footer from "../Shared/Navber/Footer/Footer";
import Header from "../Shared/Header/Header";
import Headroom from "react-headroom"
AOS.init();

const Root = () => {
  return (
    <div className="">
      <div className=" ">
        <Header></Header>
        <Headroom>
          <Navbar></Navbar>
        </Headroom>
      </div>
      <div className="">
        <div className="minh ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
