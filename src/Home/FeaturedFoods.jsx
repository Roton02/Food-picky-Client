import axios from "axios";
import { useEffect, useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { MdTimeline } from "react-icons/md";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/featured").then((res) => {
      setFoods(res.data);
    });
  }, []);
const sortbyQuantity = [...foods].sort((a,b)=> b.quantity - a.quantity)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8" >
      {sortbyQuantity.slice(0,6).map((food) => (
        <div key={food._id}>
          <div className=" px-0 bg-gray-50 ">
            <figure className=" relative">
              <img
                src={food.food_image}
                alt="Shoes"
                className="rounded-xl w-full"
              />
              <p className="absolute w-10 h-10 bg-[#1e847f] text-white top-2 rounded-full text-3xl right-3 flex items-center justify-center ">{food.quantity}</p>
            </figure>
            <div className="card-body space-y-0 ">
              <h2 className="card-title font-bold">{food.food_name}</h2>
              <p>{food.additional_notes}</p>
              <p className="flex items-center gap-5"> <ImLocation2 />{food.pickup_location}</p>
              <p className="flex items-center gap-5"> <MdTimeline />{food.expired_datetime}</p>
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
              <div className="card-actions justify-end ">
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
  );
};

export default FeaturedFoods;
