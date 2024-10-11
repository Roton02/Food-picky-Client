import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowDown, FaLocationArrow, FaSearch } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdTimeline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AvailFood = () => {
  const [sorts, setSorts] = useState("");
  const [search, setSearch] = useState("");
  const [stateManage, setStateManage] = useState(true);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/featured/avilable?sorts=${sorts}&search=${search}`
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
  }, [sorts, search]);
  //
  //
  // const filterByStatus = [...foods];
  // setFoods([...filterByStatus]);
  // console.log(foods);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearch(form.serching.value);
    // const filterByName = allFoods.filter( (f) => f.food_name === form.serching.value);
    // console.log(filterByName);
    // if (filterByName.length > 0) { setFoods([...filterByName]);
    // } else {
    //   // form.serching.value =' '
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Data is not found ",

    //   });
    //   setFoods([])
    // }
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
  console.log(stateManage);
  const handleBrandChange = (brand) => {
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
              <p className="text-lg ml-4 mt-2">Explore our products. Click on details button to order.</p>
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
        <div className="max-w-screen-xl mx-auto  w-1/4   bg-gray-200 mt-2  border border-black">
          <h1 className="bg-slate-400 lg:text-2xl  text-center py-1">
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
          <div className="py-3">
            <ul>
              <li
                onClick={handleStateManage}
                className={
                  stateManage
                    ? "border-b-2 mb-3 border-[#E21B70] font-bold  bg-[#E21B70] transition  text-white w-full p-2 rounded-b-lg hover:bg-black hover:cursor-pointer hover:scale-95 "
                    : "border-b-2 mb-3 border-black font-bold  bg-black transition text-white w-full p-2 hover:bg-[#E21B70] rounded-b-lg hover:cursor-pointer hover:scale-95 "
                }
              >
                Change Layout{" "}
              </li>
            </ul>
            <div>
              <h1 className="bg-slate-400 lg:text-2xl text-center w-full py-1 mt-2">
                Sort by Product Price
              </h1>
              <ul className="mt-2">
                <li
                  className={
                    "border-b-2 mb-1  hover:bg-black hover:cursor-pointer hover:scale-95  border-[#E21B70] font-bold  bg-[#E21B70] transition text-white w-full p-2 rounded-b-lg  "
                  }
                >
                  Price Low To High
                </li>
                <li
                  className={
                    "border-b-2 mb-3 border-[#E21B70] font-bold  bg-[#E21B70] transition text-white w-full p-2 rounded-b-lg  hover:bg-black hover:cursor-pointer hover:scale-95 "
                  }
                >
                  Price High To Low
                </li>
              </ul>
            </div>

            <h1 className="bg-slate-400 lg:text-2xl text-center w-full py-1">
              Sort by Area Name
            </h1>
            <div className="grid px-4 grid-cols-1 lg:grid-cols-2 text-center  gap-2 mt-3">
              {[
                "Dhaka",
                "Noakhali",
                "chattogram",
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
          <h1 className="bg-slate-400 lg:text-2xl text-center w-full py-1">
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
        {/* <div
          className={
            stateManage
              ? "grid grid-cols-1 px-3 border border-black max-w-screen-xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-1 mt-2 flex-1"
              : " grid grid-cols-1 px-3 border border-black flex-1 max-w-screen-xl mx-auto md:grid-cols-2  lg:grid-cols-2 lg:px-20 gap-10 mt-2"
          }
        >
          {foods.map((food) => (
            <div key={food._id}>
              <div className=" px-0 border-2 rounded-xl ">
                <figure className=" ">
                  <img
                    src={food.food_image}
                    alt="Shoes"
                    className=" w-full h-52"
                  />
                </figure>
                <div className="m-2 space-y-0 ">
                  <h2 className="text-2xl font-bold">{food.food_name}</h2>
                 
                  <p className="flex items-center gap-5">
                    {" "}
                    <ImLocation2 />
                    {food.pickup_location}
                  </p>
                  <p className="flex items-center gap-5">
                    {" "}
                    <MdTimeline />
                    {food.expired_datetime}
                  </p>
                 
                  <div className="flex mt-2 justify-between">
                    <div className="  ">
                      <Link to={`/singlePage/${food._id}`}>
                        <button className="rounded-md  btn btn-sm  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-[#1e847f]hover:text-white">
                          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1e847f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                          <span className="relative my-auto  text-[#1e847f] transition duration-300 group-hover:text-white ease">
                            View Details
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
     
          <div  className={
            stateManage
              ? "grid grid-cols-1 px-3 border border-black max-w-screen-xl mx-auto md:grid-cols-2 lg:grid-cols-4 gap-1 mt-2 flex-1"
              : " grid grid-cols-1 px-3 border border-black flex-1 max-w-screen-xl mx-auto md:grid-cols-2  lg:grid-cols-3 lg:px-10 gap-10 mt-2"
          }>
            {foods.map((p) => (
              <div key={p._id} className="   shadow-xl  h-80">
                <div className="relative p-2">
                  <figure className="flex justify-center items-center">
                    <img
                      className="w-64 h-52  hover:scale-105 transition hover:delay-75  object-cover"
                      src={p.food_image}
                    />
                  </figure>
                  <p className="card-lavel bg-[#f81276] flex items-center gap-2 bg-red absolute py-3 px-7 -bottom-0 left-14 text-white">
                    <FaLocationArrow size={20} />
                    <span>  <p>{p.pickup_location}</p></span>
                  </p>
                </div>

                <div className="md:p-4 px-2 md:px-14 lg:px-3">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="font-semibold text-xl md:text-2xl text-nowrap ">
                      {p.food_name}
                    </h2>
                    <p className="font-semibold text-red  ">
                     1000 {p.food_price} TK
                    </p>
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
      </div>
    </div>
  );
};

export default AvailFood;
