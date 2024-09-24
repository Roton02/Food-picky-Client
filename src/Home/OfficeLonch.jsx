import home from "../assets/home-corporate-bd.png";
const OfficeLonch = () => {
  return (
    <div className="w-screen mt-6 mb-52  relative  ">
      <img className=" w-full" src={home} alt="" />
    <div className="max-w-screen-xl mx-auto ">
    <div className="max-w-[550px]   absolute -bottom-32 left-10 bg-white shadow-xl   rounded-xl p-5">
        <h1 className="text-2xl ">food Picky for business</h1> <br />
        <p>
        Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, <br /> and much more.
        </p>
        <button className="btn px-7 mt-5 hover:bg-[#E21B90] text-white font-extrabold hover:scale-105 bg-[#E21B70]">Get Start</button>
      </div>
    </div>
    </div>
  );
};

export default OfficeLonch;
