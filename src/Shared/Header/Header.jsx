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
        <div>
        
        </div>
        <button className="rounded-md  btn-sm  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-[#1e847f]hover:text-white">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1e847f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative my-auto  text-[#1e847f] transition duration-300 group-hover:text-white ease">
            Contract Us
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
