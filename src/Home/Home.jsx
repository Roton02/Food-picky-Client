import { Link } from "react-router-dom";
import FeaturedFoods from "./FeaturedFoods";
import Slide from "./Slider";

const Home = () => {
  return (
    <div>
      <Slide></Slide>
      <div className="my-5">
        <h1 className="text-3xl text-center text-black underline dark:text-white font-bold font-anton">
          Featured Foods
        </h1>
        <FeaturedFoods></FeaturedFoods>
        <div className="flex justify-center items-center my-5 ">
          <Link to='/availFood'>
          <button className="rounded-md  btn  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-white bg-[#1e847f] hover:text-black">
             Show All button
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
