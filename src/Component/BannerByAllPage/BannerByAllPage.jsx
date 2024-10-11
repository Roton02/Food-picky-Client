const BannerByAllPage = ({text, p}) => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white  min-h-[450px] overflow-hidden">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className=" ml-24">
          {" "}
          <h1 className="text-4xl font-extrabold">
          {text}
          </h1>
          <p className="text-lg mt-3">{p}</p>
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

export default BannerByAllPage;
