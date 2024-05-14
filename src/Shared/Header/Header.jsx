import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-16 flex justify-between items-center px-10 z-50   bg-gradient-to-r from-slate-900 via-gray-800 to-neutral-900">
      <img className="w-8 h-8" src='https://cdn.iconscout.com/icon/free/png-512/free-master-chef-3442460-2875721.png?f=webp&w=256' alt="" />
      <Marquee className="text-white">
      Flavors Around the World: Explore Culinary Delights on Our Food Journey! . 
      Feast Your Senses: Discover Exquisite Tastes from Every Corner of the Globe!
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
