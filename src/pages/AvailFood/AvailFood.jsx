import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowDown } from "react-icons/fa";
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
              <form
                className="bg-white p-3   flex justify-between items-center rounded-2xl  mt-3  space-x-4"
                onSubmit={handleSubmit}
              >
                <input
                  className="input input-bordered w-full max-w-2xl"
                  type="text"
                  name="serching"
                  placeholder="Search by Foods Name And get the food details "
                  id=""
                />

                <button
                  type="submit"
                  className="btn  hover:bg-[#E21B90] text-white font-extrabold hover:scale-105 bg-[#E21B70]"
                >
                  Find Food
                </button>
              </form>
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
      <div className="max-w-screen-xl mx-auto flex my-5">
      <button
        onClick={handleStateManage}
        className="btn bg-[#E21B70] text-white hover:text-black "
      >
        Change Layout{" "}
      </button>
      <div className="  ">
          <details className="dropdown">
            <summary className="  btn  border border-[#E21B70] hover:text-black bg-[#E21B70]  transition text-white">
              Sort By Expired<FaArrowDown></FaArrowDown>
            </summary>
            <ul className="p-2 space-y-2 bg-gray-200 shadow menu dropdown-content z-[1]  rounded-box w-36">
              <li
                onClick={() => sort("recentDays")}
                className="hover:bg-black border border-black hover:text-white rounded-lg"
              >
                <button>Recent Days</button>
              </li>
              <li
                onClick={() => sort("fastDays")}
                className="hover:bg-black border border-black hover:text-white rounded-lg"
              >
                <button>Fast Days</button>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div
        className={stateManage? "grid grid-cols-1 max-w-screen-xl mx-auto md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2": " grid grid-cols-1 max-w-screen-xl mx-auto md:grid-cols-2  lg:grid-cols-3 gap-10 mt-2"}
      >
        {foods.map((food) => (
          <div key={food._id}>
            <div className=" px-0 border-2 rounded-xl ">
              <figure className=" ">
                <img
                  src={food.food_image}
                  alt="Shoes"
                  className="rounded-t-xl w-full h-64"
                />
              </figure>
              <div className="m-2 space-y-0 ">
                <h2 className="text-2xl font-bold">{food.food_name}</h2>
                <p>{food.additional_notes}</p>
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
                  <div className=" mt-2">
                    <div className="avatar">
                      <div className="w-12 rounded-xl">
                        <img src={food.donator.image} />
                      </div>
                    </div>
                    <h2 className="text-sm font-medium font-anton">
                      {food.donator.name}{" "}
                    </h2>
                  </div>
                  <div className=" mt-10 ">
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
      </div>
    </div>
  );
};

export default AvailFood;
