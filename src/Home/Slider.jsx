const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white  min-h-[450px] overflow-hidden">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="w-1/2">
          {" "}
          <h1  className="text-4xl ml-3 font-extrabold">
            It{`'`}s the food and groceries you love, <br /> delivered
          </h1>
          <div className="bg-white p-3  flex justify-between items-center rounded-2xl  mt-3 space-x-4">
            <input
              className="input input-bordered w-full max-w-2xl"
              type="text"
              name=""
              placeholder="Described your Food "
              id=""
            />
            <button className="btn  hover:bg-[#E21B90] text-white font-extrabold hover:scale-105 bg-[#E21B70]">
              Find Food
            </button>
          </div>
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
  );
};

export default Banner;
