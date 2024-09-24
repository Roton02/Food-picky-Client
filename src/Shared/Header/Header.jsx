import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Header = () => {
  const [showHeader , setShowHeader] = useState(true)
  return (
    <div className="">
      <div className={`${showHeader ? 'flex' : 'hidden'} h-14 flex justify-between items-center px-3 z-50   bg-[#E21B70]`}>
      <div className="flex justify-center">
      <TfiAnnouncement className="text-3xl text-white" />
      <p className="text-xl ml-4 font-bold text-white">
        Come here if you want to be an admin
      </p>
      </div>

      <div className="flex justify-center">
        <Link to="/register">
          <button className="  btn btn-sm bg-[#E21B70] text-white  font-anton">
            Fill up Form 
          </button>
        </Link>
        <button onClick={()=>{setShowHeader(false)}} className="ml-12 ">
          <MdOutlineCancel className="text-white text-3xl" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
