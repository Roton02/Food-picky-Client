import home from "../assets/home-.png";
const PrepareFood = () => {
  return (
    <div className="w-screen mt-6 mb-52  relative  ">
      <img className=" w-full" src={home} alt="" />
      <div className="w-[450px] absolute -bottom-32 left-10 bg-white shadow-xl   rounded-xl p-5">
        <h1 className="text-2xl ">List your restaurant or shop on Food Picky</h1> <br />
        <p>
          Would you like millions of new customers to enjoy your amazing food
          and groceries? So would we! <br /> 
          It{`'`}s simple: we list your menu and product lists online, help you
          process orders, pick them up, and deliver them to hungry pandas in a
          heartbeat! <br />  Interested? Let{`'`}s start our partnership today!
        </p>
        <button className="btn px-7 hover:bg-[#E21B90] text-white font-extrabold hover:scale-105 bg-[#E21B70]">Get Start</button>
      </div>
    </div>
  );
};

export default PrepareFood;
