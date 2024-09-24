import { useContext, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
const Header = () => {
  const {user} = useContext(AuthContext)
  const [showHeader , setShowHeader] = useState(true)
  console.log(user);
  return (
    <div className="bg-[#E21B70]">
      <div className={`${showHeader ? 'flex' : 'hidden'} h-16 flex justify-between items-center px-3 z-50   `}>
      <div className="flex justify-center">
      <TfiAnnouncement className="text-3xl text-white" />
      <p className="text-xl ml-4 font-bold text-white">
        Come here if you want to be an admin
      </p>
      </div>

      <div className="flex justify-center">
        <Link to={`${user ? '/form': '/login'}`}>
          <button className=" hover:scale-105  btn btn-sm hover:bg-[#E21B70] bg-[#E21B70] text-white  font-anton">
            Fill up Form 
          </button>
        </Link>
        <button onClick={()=>{setShowHeader(false)}} className="ml-7 ">
          <MdOutlineCancel className="text-white text-3xl hover:scale-125 transition-transform delay-100" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
