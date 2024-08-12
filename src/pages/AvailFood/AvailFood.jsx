import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowDown } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdTimeline } from "react-icons/md";
import { Link  } from "react-router-dom";
import Swal from "sweetalert2";

const AvailFood = () => {
  const [sorts , setSorts] = useState('')
  const [search , setSearch] = useState('')
  const [stateManage , setStateManage] = useState(true)
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get(`https://food-pocky01.vercel.app/featured/avilable?sorts=${sorts}&search=${search}`).then((res) => {
      setFoods(res.data);  
      if (res.data.length < 1) {
        Swal.fire({
           icon: "error",
           title: "Oops...",
           text: "Data is not found ",
           
         });
   }
    });
  }, [sorts,search]);
  // 
  // 
  // const filterByStatus = [...foods];
  // setFoods([...filterByStatus]);
// console.log(foods);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearch(form.serching.value)
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
     setSorts('recentDays')
    }
    if (expired == "fastDays") {
    setSorts('fastDays')
    }
  };
  


const handleStateManage = ()=>{
  setStateManage(!stateManage)
}
console.log(stateManage);
  return (
    <div>
       <Helmet>
        <title>Food Picky || Available Food</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div>
        <div className="w-full  h-[28rem] rounded-md bg-[url('https://i.ibb.co/Th725HY/Lovepik-com-400155932-crayfish-food-background.jpg')] bg-center bg-cover bg-no-repeat ">
          <div className="flex items-center justify-center w-full h-full rounded-md bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl bg-gradient-to-r from-slate-400 to-zinc-50 bg-clip-text text-transparent mb-10 mx-auto font-semibold  lg:text-5xl">
                Search by Foods Name
              </h1>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="relative z-10 flex space-x-3 bg-slate-400 p-3  rounded-lg  text-neutral-200">
                    <div className="flex-[1_0_0%] ">
                      <label className="block text-sm text-gray-700 font-medium dark:text-white">
                        <span className="sr-only">Search article</span>
                      </label>
                      <input
                        type="text"
                        name="serching"
                        className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-neutral-900 dark:border-transparent text-neutral-400 placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Search by Foods Name And get the food details !"
                      />
                    </div>

                    <div className="flex-[0_0_auto] ">
                      <button
                        type="submit"
                        className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <svg
                          className="flex-shrink-0 size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex justify-center m-2 mr-20 mx-auto  ">
                <details className="dropdown">
                  <summary className="m-1  btn  border border-[#1e847f] hover:text-black bg-[#1e847f]  transition text-white">
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
          </div>
        </div>
      </div>
    <button onClick={handleStateManage} className="btn bg-[#1e847f] text-white hover:text-black ml-14 my-5">Change Layout </button>
      <div className={stateManage?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2':' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-2'}>
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
              <div className="card-body space-y-0 ">
                <h2 className="card-title font-bold">{food.food_name}</h2>
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
                <div className="flex justify-between">
                  <div className="">
                    <div className="avatar">
                      <div className="w-12 rounded-xl">
                        <img src={food.donator.image} />
                      </div>
                    </div>
                    <h2 className="text-sm font-medium font-anton">
                      {food.donator.name}{" "}
                    </h2>
                  </div>
                  <div className=" mt-12 ">
                    <Link to={`/singlePage/${food._id}`}>
                      <button className="rounded-md  btn   overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-[#1e847f]hover:text-white">
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
