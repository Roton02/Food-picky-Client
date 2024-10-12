import "./Navbar.css";
import "animate.css";
import { useContext,  useEffect,  useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  const { Logout, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(false);
  // const {isAdmin} = useAdmin()
  // console.log(isAdmin);
  useEffect(() => {
    console.log(user?.email);
    if (user?.email) {
      console.log(user.email); 
      axios
        .get(`http://localhost:5000/users/admins/${user.email}`)
        .then((res) => {
          console.log("admin form navbar ", res.data);
          setUserRole(res.data.role && true)
        });
    }
  }, [user,userRole,Logout]);

//   const { data: isAdmin, } = useQuery({
//     queryKey: ['isAdmin'],
//     queryFn: async () => {
//         try {
//             // Use async/await to fetch the admin status
//             const res = await axios.get(`http://localhost:5000/users/admins/${user?.email}`);
//             console.log("admin from navbar", res.data);
//             // Return the admin status from the response
//            if (res.data) {
//             return res.data.role == 'admin'? true : false ;
//            }
//         } catch (error) {
//             console.error('Error fetching admin status:', error);
//             return false; // Return false if there's an error
//         }
//     },
// });

// console.log(isAdmin);


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // console.log(user);

  return (
    <div className=" w-full   bg-white shadow-xl  ">
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
              {userRole ? (
                
                <>
                <NavLink
                  className={
                    "p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
                  }
                  to="/"
                >
                  Home
                </NavLink>

                <NavLink
                  className={
                    "p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
                  }
                  to="/Users"
                >
                  All User / Admin
                </NavLink>
                <NavLink
                  className={
                    "p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
                  }
                  to="/addFood"
                >
                  Add New
                </NavLink>
                <NavLink
                  className={
                    "p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
                  }
                  to="/Admin/allFood"
                >
                  Manage All Food
                </NavLink>
                <NavLink
                  className={
                    "p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
                  }
                  to="/ManageMyFoods"
                >
                  My Added Food
                </NavLink>
                <NavLink
                  className={
                    "p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
                  }
                  to="/AllFoodRequest"
                >
                  All Order
                </NavLink>
              </>
              ) : (
                <>
                {" "}
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
                  to="/MyFoodRequest"
                  className=" p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150 "
                >
                  My Order
                </NavLink>
                <NavLink
                  to="/blogs"
                  className=" p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150"
                >
                  Blog
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
                <NavLink
                  to="/contract"
                  className=" p-2 px-2 font-medium  hover:scale-105 hover:transition-transform delay-150 "
                >
                  Contract
                </NavLink>{" "}
              </>
              )}
            </div>
          </div>
          <div className="navbar-end ">
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
                        className="rounded-full w-20 h-20 text-center"
                        src={user?.photoURL || ""}
                        alt=""
                      />
                    </div>
                    <li className="  rounded-lg bg-black text-white font-bold  text-start ">
                      <span>{user?.displayName}</span>
                    </li>
                    <li>
                      <NavLink
                        to="/profile"
                        className=" border-b-2 font-bold border-gray-300 hover:bg-black hover:text-white"
                      >
                        Profile
                      </NavLink>
                    </li>

                    <li className="pb-6 mt-3">
                      <button
                        onClick={Logout}
                        className="border-b-2 font-bold  border-gray-300 hover:bg-black hover:text-white"
                      >
                        Logout
                      </button>
                    </li>
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
