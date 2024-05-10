import FeaturedFoods from "./FeaturedFoods";
import Slide from "./Slider";

const Home = () => {
    return (
        <div>
            <Slide></Slide>
          <div className="my-5">
            <h1 className="text-3xl text-center text-black underline dark:text-white font-bold font-anton">Featured Foods</h1>
          <FeaturedFoods></FeaturedFoods>
          </div>
        </div>
    );
};

export default Home;