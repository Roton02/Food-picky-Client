import Marquee from "react-fast-marquee";
import img from "../../assets/restaurant_11251582.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-16 flex justify-between items-center px-10   bg-gradient-to-r from-slate-900 via-gray-800 to-neutral-900">
      <img className="w-8 h-8" src={img} alt="" />
      <Marquee className="text-white">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      <Link to="/contract">
        <button className="rounded-md hover:text-black  btn btn-sm bg-[#1e847f] text-white  font-anton">
            Contract 
        </button>
      </Link>
    </div>
  );
};

export default Header;
