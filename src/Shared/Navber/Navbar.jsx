import "./Navbar.css";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import img  from  '../../assets/restaurant_11251582.png'

const Navbar = () => {
  const { Logout, user } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage on component mount
    const locatTheme = localStorage.getItem("theme");
    // If no theme is found in localStorage, default to dark theme
    // return locatTheme === "dark" ? true : false;
    return locatTheme === "light" ? true : false;
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    // Store current theme in localStorage
    // localStorage.setItem("theme", theme ? "dark" : "light");
    localStorage.setItem("theme", theme ? "light" : "dark");

    // Apply theme to HTML element
    // document.querySelector('html').setAttribute('data-theme', theme ? "dark" : "light");
    document
      .querySelector("html")
      .setAttribute("data-theme", theme ? "light" : "dark");
  }, [theme]); // Re-run effect when theme changes
  console.log(user);
  return (
    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h7"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-3 shadow bg-base-100 rounded-box w-44"
    //       >
    //         <NavLink
    //           to="/"
    //           className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
    //         >
    //           Home
    //         </NavLink>
    //         <NavLink
    //           to="/availFood"
    //           className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
    //         >
    //         Available Foods
    //         </NavLink>
    //     <NavLink
    //       to="/addFood"
    //       className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
    //     >
    //       Add Food
    //     </NavLink>
    //     {user && (
    //       <>
    //       <NavLink
    //         to="/ManageMyFoods"
    //         className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
    //       >
    //         Manage My Foods
    //       </NavLink>
    //       <NavLink
    //         to="/MyFoodRequest"
    //         className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
    //       >
    //         My Food Request
    //       </NavLink>
    //       </>
    //     )}
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="navbar-center">
    //     <img className="w-8 h-8 mr-2" src={img} alt="" />
    //   <Link
    //       to="/" >
    //       <h1  className=" text-base md:text-xl lg:text-3xl mr-0 font-bold animate__animated animate__swing animate__delay-0.5s"><span className="text-[#1e847f]">Food</span> picky</h1>
    //     </Link>
         
    //   </div>
    //   <div className="navbar-end">
    //       <label className="mr-6 cursor-pointer grid place-items-center">
    //       <input
    //         type="checkbox"
    //         onClick={toggleTheme}
    //         checked={theme}
    //         className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
    //       />
    //       <svg
    //         className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="14"
    //         height="14"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <circle cx="12" cy="12" r="5" />
    //         <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    //       </svg>
    //       <svg
    //         className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="14"
    //         height="14"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    //       </svg>
    //     </label>
        
    //     <button className="btn btn-ghost btn-circle">
    //       <div className="indicator">
    //         {user ? (
    //       <div  className="flex items-center ">
    //         <div className="dropdown dropdown-end">
    //       <div tabIndex={0} role="button">
    //       <div
    //           tabIndex={0}
    //           role="button"
    //           className=" border rounded-full border-gray-300 z-50  avatar hover:tooltip tooltip-open"
    //           data-tip={user ? user.displayName : "Invalid Name"}
    //         >
    //           <div className=" rounded-full w-9 md:w-12  ">
    //             <img  alt="" src={user.photoURL} />
    //           </div>
    //         </div>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="dropdown-content hidden lg:flex  z-[100] menu p-2 gap-2 shadow bg-base-100 rounded-box w-32"
    //       >
    //         <li>
    //         <NavLink
    //       to="/profile"
    //       className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
    //     >
    //       Profile
    //     </NavLink>
    //         </li>

    //         <button
    //           onClick={Logout}
    //           className="rounded-md btn-sm md:btn-md lg:px-3.5 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border-2 p-1 font-medium border-[#1e847f]
    //           text-[#1e847f] hover:text-white"
    //         >
    //           <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1e847f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    //           <span className="relative  text-[#1e847f] transition duration-300 group-hover:text-white ease">
    //             Logout
    //           </span>
    //         </button>
    //       </ul>
    //     </div>

    //       </div>
    //     ) : (
    //       <Link data-aos="fade-left" data-aos-duration='1000'
    //         to="/login">
    //         <button className="rounded-md btn-sm md:btn-md overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-[#1e847f]hover:text-white">
    //             <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1e847f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    //         <span className="relative my-auto  text-[#1e847f] transition duration-300 group-hover:text-white ease">
    //           Login
    //         </span>
    //         </button>
    //       </Link>
    //     )}
    //       </div>
    //     </button>
    //   </div>
    // </div>
    <nav className="navbar z-[100]  w-full  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2  shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
            >
              Home
            </NavLink>
            <NavLink
              to="/availFood"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
            >
            Available Foods
            </NavLink>
        <NavLink
          to="/addFood"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
          Add Food
        </NavLink>
        {user && (
          <>
          <NavLink
            to="/ManageMyFoods"
            className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
          >
            Manage My Foods
          </NavLink>
          <NavLink
            to="/MyFoodRequest"
            className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
          >
            My Food Request
          </NavLink>
          </>
        )}
          </div>
        </div>
        <Link
          to="/" >
          <h1  className=" text-base md:text-xl lg:text-3xl mr-0 font-bold animate__animated animate__swing animate__delay-0.5s"><span className="text-[#1e847f]">Food</span> picky</h1>
          <p className="text-sm ml-7">online food order !</p>
        </Link>
      </div>
        <div className="navbar-center">
        <div className=" space-x-2  ml-20 hidden lg:flex ">
      <NavLink
              to="/"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
            >
              Home
            </NavLink>
            <NavLink
              to="/availFood"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
            >
            Available Foods
            </NavLink>
        <NavLink
          to="/addFood"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
          Add Food
        </NavLink>
        {user && (
          <>
          <NavLink
            to="/ManageMyFoods"
            className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
          >
            Manage My Foods
          </NavLink>
          <NavLink
            to="/MyFoodRequest"
            className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
          >
            My Food Request
          </NavLink>
          </>
        )}

      </div>
        </div>
      <div className="navbar-end ">
      <label className="mr-6 cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            onClick={toggleTheme}
            checked={theme}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {user ? (
          <div  className="flex items-center ">
            <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
          <div
              tabIndex={0}
              role="button"
              className=" border rounded-full border-gray-300  avatar hover:tooltip tooltip-open"
              data-tip={user ? user.displayName : "Invalid Name"}
            >
              <div className=" rounded-full w-9 md:w-12  ">
                <img  alt="" src={user.photoURL} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content hidden lg:flex  z-[100] menu p-2 gap-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
            <NavLink
          to="/profile"
          className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
        >
          Profile
        </NavLink>
            </li>

            <button
              onClick={Logout}
              className="rounded-md btn-sm md:btn-md lg:px-3.5 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border-2 p-1 font-medium border-pink-700 text-pink-700 hover:text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-pink-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative  text-pink-700 transition duration-300 group-hover:text-white ease">
                Logout
              </span>
            </button>
          </ul>
        </div>

          </div>
        ) : (
          <Link data-aos="fade-left" data-aos-duration='1000'
            to="/login"
            className="rounded-md btn-sm md:btn-md p-1 md:p-2 lg:px-3.5 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ad1199] text-[#ad1199] hover:text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ad1199] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#ad1199] transition duration-300 group-hover:text-white ease">
              Login
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
