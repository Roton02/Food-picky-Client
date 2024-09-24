import featuredImg from "../../assets/four.jpg";
import "./Featured.css";

const MenuFeatured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-10">
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-80 py-20 px-36">
        <div className="w-1/2">
          <img className="w-full mr-14 px-10" src={featuredImg} alt="" />
        </div>
        <div className="w-1/2">
          <p>Sep 24, 2024</p>
          <p className="uppercase text-2xl font-bold">Where can i get some?</p>
          <p>
            doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia
            similique quam nisi reprehenderit numquam magnam nemo vitae
            cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis
            vero quas?
          </p>
          <button className="btn btn-outline border-0 border-[#E21780] border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuFeatured;
