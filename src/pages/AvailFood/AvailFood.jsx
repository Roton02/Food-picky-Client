import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const AvailFood = () => {
  const { user } = useAuth();
  const [sorts, setSorts] = useState("");
  const [search, setSearch] = useState("");
  const [stateManage, setStateManage] = useState(true);
  const [foods, setFoods] = useState([]);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState("");
  const { count } = useLoaderData();
  const productPerpage = 10;
  const numberOfPage = Math.ceil(count / productPerpage);
  const pages = [...Array(numberOfPage)];

  console.log(brands);
  // console.log(count);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/featured/avilable?sorts=${sorts}&search=${search}&priceRange=${priceRange}&brands=${brands.join(
          ","
        )}`
      )
      .then((res) => {
        setFoods(res.data);
        if (res.data.length < 1) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Data is not found ",
          });
        }
      });
  }, [sorts, search, priceRange, brands]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearch(form.serching.value);
  };

  // console.log(search);
  const sort = (expired) => {
    // console.log(cost);
    if (expired == "recentDays") {
      setSorts("recentDays");
    }
    if (expired == "fastDays") {
      setSorts("fastDays");
    }
  };

  const handleStateManage = () => {
    setStateManage(!stateManage);
  };
  // console.log(stateManage);
  const handleBrandChange = (brand) => {
    console.log(brand);
    if (brands.includes(brand)) {
      setBrands(brands.filter((b) => b !== brand));
    } else {
      setBrands([...brands, brand]);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Food Picky || Available Food</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div>
        <div className="bg-gradient-to-b from-gray-50 to-white   min-h-[450px] overflow-hidden">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="w-1/2">
              {" "}
              <h1 className="text-4xl ml-4 font-extrabold">
                Home / Available Food
              </h1>
              <p className="text-lg ml-4 mt-2">
                Explore our products. Click on details button to order.
              </p>
            </div>
            <div className="w-1/2 ">
              <img
                className="w-full h-[450px] ml-32 "
                src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-bd.png?width=2560"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-screen-xl mx-auto mb-5">
        <div className="max-w-screen-xl mx-auto  w-1/4    mt-4  ">
          <div className="  shadow-2xl shadow-zinc-400 py-3 px-4 rounded-lg">
            <h1 className="bg-slate-200 lg:text-2xl  text-center py-1">
              Query by Food Name
            </h1>
            <form
              className=" mt-2   flex justify-between items-center rounded-2xl  mt-  space-x-1"
              onSubmit={handleSubmit}
            >
              <input
                className="input input-bordered w-full "
                type="text"
                name="serching"
                placeholder="Search by Foods Name  "
                id=""
              />

              <button
                type="submit"
                className="btn  hover:bg-[#E21B90] text-white font-extrabold hover:scale-95 bg-[#E21B70]"
              >
                <FaSearch />
              </button>
            </form>

            <div className="my-3 space-y-2">
              <ul>
                <li
                  onClick={handleStateManage}
                  className={
                    stateManage
                      ? "border-b-2 mb-3 border-[#E21B70] font-bold  bg-[#E21B70] transition  text-white w-full p-2 rounded-b-lg hover:bg-black hover:cursor-pointer hover:scale-95 "
                      : "border-b-2 mb- border-black font-bold  bg-black transition text-white w-full p-2 hover:bg-[#E21B70] rounded-b-lg hover:cursor-pointer hover:scale-95 "
                  }
                >
                  Change Layout{" "}
                </li>
              </ul>
              <h1 className="bg-slate-200 lg:text-2xl text-center w-full py-1 mt-">
                Sort by Product Price
              </h1>
              <ul className="mt-">
                <li
                  onClick={() => setPriceRange("HtO")}
                  className={
                    "border-b-2 mb-1  hover:bg-black hover:cursor-pointer hover:scale-95  border-[#E21B70] font-bold  bg-[#E21B70] transition text-white w-full p-2 rounded-b-lg  "
                  }
                >
                  Price Low To High
                </li>
                <li
                  onClick={() => setPriceRange("LtO")}
                  className={
                    "border-b-2 mb-3 border-[#E21B70] font-bold  bg-[#E21B70] transition text-white w-full p-2 rounded-b-lg  hover:bg-black hover:cursor-pointer hover:scale-95 "
                  }
                >
                  Price High To Low
                </li>
              </ul>
            </div>
          </div>

          <div className="shadow-xl scale-105  shadow-zinc-400 py-3 px-4 mt-12 rounded-lg ">
            <div className="py-3">
              <h1 className="bg-slate-200 lg:text-2xl text-center w-full py-1">
                Sort by Area Name
              </h1>
              <div className="grid px-4 grid-cols-1 lg:grid-cols-2 text-center  gap-2 mt-3">
                {[
                  "Dhaka",
                  "Noakhali",
                  "chottogram",
                  "Sylhet",
                  "Rajshahi",
                  "Khulna",
                  "Barishal",
                  "Rangpur",
                  "Cumilla",
                  "Jassore",
                ].map((brand) => (
                  <div className="form-control" key={brand}>
                    <label className="cursor-pointer label px-4">
                      <h1 className="label-text text-xl text-black">{brand}</h1>
                      <input
                        type="checkbox"
                        onChange={() => handleBrandChange(brand)}
                        className="checkbox checkbox-secondary"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <h1 className="bg-slate-200 lg:text-2xl text-center w-full py-1">
              Sort by Date
            </h1>
            <ul className="mt-2 space-y-2">
              <li
                onClick={() => sort("recentDays")}
                className="border-b-2 border-[#E21B70]  hover:bg-black hover:cursor-pointer hover:scale-95 font-bold  bg-[#E21B70] transition text-white w-full p-2 rounded-b-lg "
              >
                <span className="ml-5  font-extrabold"> Recent Post</span>
              </li>
              <li
                onClick={() => sort("fastDays")}
                className=" border-b-2 border-[#E21B70]  hover:bg-black hover:cursor-pointer hover:scale-95 font-bold bg-[#E21B70] transition text-white w-full p-2 rounded-b-lg "
              >
                <span className="ml-5  font-extrabold"> Previous Post</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmG0iaS1Bw8sSn36ZLqDC1VS9CtvZnK44xzlnZVyuy-R2CGgQQm90lIlLmc54GdC3Hows&usqp=CAU')] text-white ">
            <div className="bg-black opacity-75 p-5">
              <h1 className="text-4xl font-bold mb-5">
                Join Our Dynaminc Team!
              </h1>
              <p className="mb-5">
                Explore the profound connection between food and social
                gatherings, from evolutionary roots to cultural identity.
                Discover how shared meals.
              </p>
              <div className="z-50">
                <div>
                  <a
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    href="#_"
                    className="relative border-2   inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-pink-500 transition duration-300 ease-out  border-pink-500 shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
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
                    <span className="absolute flex items-center justify-center w-full h-full text-pink-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Request to Join
                    </span>
                    <span className="relative invisible">Request to Join</span>
                  </a>
                </div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_3" className="modal text-black">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        X
                      </button> */}
                      <p className="font-bold text-center px-20">If you want to join our dynamic team , then click on  <span className="text-green-600 font-extrabold underline">confirm</span> </p>
                    <div className="mt-4 space-x-10 text-center">
                    <button className="btn btn-sm btn-success ">
                        Confirm
                      </button>
                      <button className="btn btn-sm  btn-error ">
                        Decline
                      </button>
                    </div>
                    </form>
                    
                  </div>
                </dialog>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl mb-3 font-semibold"> Find On Us </h2>
            <div>
              <a href="http://facebook.com/roton.choudury" target="_blank">
                <h1 className="w-full border-2 flex  p-4 rounded-t-lg ">
                  <a
                    className="bg-gray-200 p-2 mr-3 rounded-full"
                    href=""
                    target="_blank"
                  >
                    <FaFacebook></FaFacebook>
                  </a>
                  Facebook
                </h1>
              </a>
              <a href="https://x.com/MdSanaulla75762" target="_blank">
                <h1 className="w-full border-x-2 flex p-4  ">
                  <a
                    className="bg-gray-200 p-2 mr-3 rounded-full"
                    href="https://x.com/MdSanaulla75762"
                    target="_blank"
                  >
                    <FaTwitter></FaTwitter>
                  </a>
                  Tiwtter
                </h1>
              </a>
              <a
                href="https://www.linkedin.com/in/md-sana-ullah12/"
                target="_blank"
              >
                <h1 className="w-full border-2  flex p-4 rounded-b-lg ">
                  <a
                    className="bg-gray-200 p-2 mr-3 rounded-full"
                    href="https://www.linkedin.com/in/md-sana-ullah12/"
                    target="_blank"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                  linked in
                </h1>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto flex-1 ">
          <div
            className={
              stateManage
                ? "grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3   lg:px-10 gap-10 mt-2"
                : " grid grid-cols-1 px-3 md:grid-cols-2  lg:grid-cols-4  gap-1 mt-2"
            }
          >
            {foods.map((p) => (
              <div key={p._id} className="   shadow-xl  h-80">
                <div className="relative p-2">
                  <figure className="flex justify-center items-center">
                    <img
                      className="w-64 h-52  hover:scale-105 transition hover:delay-75  object-cover"
                      src={p.food_image}
                    />
                  </figure>
                  <button className="absolute right-4 top-4 flex justify-center items-center bg-white p-1 hover:bg-slate-700 transition rounded-md">
                    {" "}
                    <GiSelfLove className="text-[#f81276] text-2xl" />{" "}
                  </button>
                  <p className="card-lavel bg-[#f81276] flex items-center gap-2 bg-red absolute py-3 px-7 -bottom-0 left-14 text-white">
                    <FaLocationArrow size={20} />
                    <span>
                      {" "}
                      <p>{p.pickup_location}</p>
                    </span>
                  </p>
                </div>

                <div className="md:p-4 px-2 md:px-14 lg:px-3">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="font-semibold text-xl md:text-2xl text-nowrap ">
                      {p.food_name}
                    </h2>
                    <p className="font-semibold text-red  ">{p.price} TK</p>
                  </div>

                  <div className="flex  justify-between">
                    <p className="mt-1">{p.expired_datetime}</p>
                    <div className="  ">
                      <Link to={`/singlePage/${p._id}`}>
                        <button className="rounded-md  btn btn-sm border-t-0 border-x-0  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#f81276] text-[#f81276]hover:text-white">
                          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#f81276] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                          <span className="relative my-auto  text-[#f81276] transition duration-300 group-hover:text-white ease">
                            Details
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`${
              foods.length == "9" ? "flex" : "hidden"
            } join mt-8 mb-4 px-10 flex justify-center items-center`}
          >
            <button className="join-item btn btn-sm rounded-node rounded-l-xl ">
              {" "}
              Prev{" "}
            </button>
            <button className="join-item  flex-1 ">Page No - S22</button>
            <button className="join-item btn btn-sm rounded-none rounded-r-xl ">
              {" "}
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailFood;
