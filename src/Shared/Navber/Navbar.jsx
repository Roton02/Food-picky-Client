import "./Navbar.css";
import "animate.css";
import { useContext, useState} from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const { Logout, user } = useContext(AuthContext);

  console.log(user);
  return (
    <div className=" w-full  bg-opacity-50 bg-black fixed z-50" >
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
          <h1 className="text-3xl  font-bold text-pink-700 ">Food Picky </h1>
        </Link>
      </div>
      <div className="navbar-end ">
        <div className=" space-x-2  hidden lg:flex mr-20 ">
          <NavLink
            to="/"
            className="btn btn-sm  border-b-2 border-gray-300 hover:bg-black hover:text-white "
          >
            Home
          </NavLink>
          <NavLink
            to="/availFood"
            className="btn  btn-sm border-2 border-gray-300 hover:bg-black hover:text-white "
          >
            Available Food
          </NavLink>
          <NavLink
            to="/History"
            className="btn btn-sm border-2 border-gray-300 hover:bg-black hover:text-white "
          >
            History
          </NavLink>
          <NavLink
            to="/contract"
            className="btn btn-sm border-2 border-gray-300 hover:bg-black hover:text-white "
          >
            Contract
          </NavLink>
        </div>
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
          <Link
            to="/login"
            className="rounded-md btn-sm  m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ff4880] text-[#ff4880] hover:text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff4880] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#ff4880] transition duration-300 group-hover:text-white ease">
              Login
            </span>
          </Link>
        )}
      </div>
      </div>
    </nav>
  </div>

  );
};

export default Navbar;

