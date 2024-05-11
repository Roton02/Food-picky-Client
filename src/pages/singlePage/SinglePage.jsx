import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const loadData = useLoaderData();
  console.log(loadData);
  return (
    <div className="border-2 rounded-md">
      {loadData.map((ld) => (
        <div key={ld._id}>
          <div className="max-w-[85rem] mx-auto p-5">
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-3">
                <div className="bg-slate-100 p-5">
                  <h1 className="text-2xl underline font-anton text-center">
                    Donator information -{" "}
                  </h1>
                 <div className="flex gap-5 items-center">
                 <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src={ld.donator.image}
                      />
                    </div>
                  </div>
                  <div className="text-sm font-anton">
                    <p>{ld.donator.name}</p>
                    <p> pickup_location : {ld.pickup_location}</p>
                  </div>
                 </div>
                </div>
                <h1 className="block mt-3 ml-2 text-2xl font-anton font-bold text-gray-800  md:text-3xl lg:text-4xl dark:text-white">
                  {ld.food_name}
                </h1>
                <p className="mt-3 text-lg font-anton text-gray-800 dark:text-neutral-400">
                  expired: {ld.expired_datetime}
                </p>
                <p className=" text-lg font-anton text-gray-800 dark:text-neutral-400">
                  Quantity: {ld.quantity}
                </p>
                <p className="font-anton">{ld.additional_notes}</p>

                <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                  <button className="btn bg-[#1e847f] text-white hover:bg-[#1e547f] ">
                    Request
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4 items-center mt-10 lg:mt-0">
                <img
                  className="w-full rounded-xl"
                  src={ld.food_image}
                  alt="Image Loading..............."
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SinglePage;
