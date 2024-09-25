import "./Navbar.css";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const { Logout, user } = useContext(AuthContext);

  console.log(user);
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage on component mount
    const locatTheme = localStorage.getItem("theme");
    // If no theme is found in localStorage, default to dark theme
    // return locatTheme === "dark" ? true : false;
    return locatTheme === "dark" ? false : true;
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
      .setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]); // Re-run effect when theme changes

  return (
    <div className=" w-full   bg-white shadow-2xl  ">
      <nav className="   ">
        <div className="navbar max-w-screen-xl mx-auto z-10   ">
          <div className="navbar-start ">
            <div className="block md:block lg:hidden">
              <div className="text-center">
                <button className="" type="button" onClick={toggleDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <h5
                  id="drawer-label"
                  className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                  <svg
                    className="w-4 h-4 mr-2.5n "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  Pages
                </h5>
                <button
                  type="button"
                  onClick={toggleDrawer}
                  aria-controls="drawer-example"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>

                <div className=" grid grid-cols-1 ">
                  <Link to="/">
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        Home
                      </span>
                      <span className="relative invisible">Home</span>
                    </a>
                  </Link>
                  <Link to="/listing">
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        Pet Listing
                      </span>
                      <span className="relative invisible">Pet Listing</span>
                    </a>
                  </Link>
                  <Link to="/campaign">
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        Donation Campaigns
                      </span>
                      <span className="relative invisible">
                        Donation Campaigns
                      </span>
                    </a>
                  </Link>
                  <Link to="/contract">
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        Contract
                      </span>
                      <span className="relative invisible">contract</span>
                    </a>
                  </Link>
                  <hr />
                  {user ? (
                    <div className="grid grid-cols-1">
                      <Link to="/profile">
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Profile
                          </span>
                          <span className="relative invisible">Profile</span>
                        </a>
                      </Link>
                      <Link to="/dashboard/addPet">
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            DashBoard
                          </span>
                          <span className="relative invisible">DashBoard</span>
                        </a>
                      </Link>
                      <Link to="/updateProfile">
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Settings
                          </span>
                          <span className="relative invisible">Settings</span>
                        </a>
                      </Link>

                      <div>
                        <a
                          onClick={Logout}
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Logout
                          </span>
                          <span className="relative invisible">Logout</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1">
                      <Link to="/login">
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Login
                          </span>
                          <span className="relative invisible">Login</span>
                        </a>
                      </Link>
                      <Link to="/register">
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Register
                          </span>
                          <span className="relative invisible">Register</span>
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Link to="/">
              <h1 className="text-3xl ml-2   font-bold text-[#E21B70] ">
                Food Picky{" "}
              </h1>
            </Link>
          </div>
          <div className="navbar-center">
            <div className=" space-x-2  hidden lg:flex  ">
              <NavLink
                to="/"
                className="  p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
              >
                Home
              </NavLink>
              <NavLink
                to="/availFood"
                className=" p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150 "
              >
                Our Menu
              </NavLink>
              <NavLink
                to="/blogs"
                className=" p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contract"
                className=" p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150 "
              >
                Contract
              </NavLink>
              <NavLink
                to="/reviews"
                className=" p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150 "
              >
                Reviews
              </NavLink>
              <NavLink
                to="/aboutUs"
                className=" p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150 "
              >
                About Us
              </NavLink>
            </div>
          </div>
          <div className="navbar-end ">
            <label className="mr-5 cursor-pointer grid place-items-center">
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
              <div className="flex items-center ">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" border rounded-full border-gray-300 z-[110]  avatar"
                    >
                      <div className=" rounded-full w-9 md:w-12  ">
                        <img alt="" src={user?.photoURL || ""} />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  flex  z-[100] menu p-2 gap-2 shadow bg-base-100 rounded-box w-64"
                  >
                    <div className="flex justify-center">
                      <img
                        className="rounded-full w-20 text-center"
                        src={user?.photoURL || ""}
                        alt=""
                      />
                    </div>
                    <li className="mx-auto text-xl font-bold ">
                      - {user?.displayName} -
                    </li>
                    <li>
                      <NavLink
                        to="/profile"
                        className="btn btn-sm btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addPet"
                        className="btn btn-sm btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
                      >
                        DashBoard
                      </NavLink>
                    </li>

                    <button
                      onClick={Logout}
                      className="btn btn-sm btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
                    >
                      Logout
                    </button>
                  </ul>
                </div>
              </div>
            ) : (
              <div className=" space-x-3 ">
                <Link
                  to="/login"
                  className="btn btn-sm  font-medium  hover:text-white cursor-pointer hover:bg-[#E21B70] border border-black text-black"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-sm btn-secondary hover:scale-105 font-medium bg-[#E21B70] text-white cursor-pointer"
                >
                  Register
                </Link>
              </div>
            )}
            <button className="ml-4 text-[#E21B70]">
              <FaCartArrowDown className="text-2xl ml-2" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
