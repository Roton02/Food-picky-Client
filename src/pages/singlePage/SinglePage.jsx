import axios from "axios";
import {  useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const SinglePage = () => {
  const {user} = useAuth()
  const [upId , setupId] = useState(null)
  const loadData = useLoaderData();
  const {_id,additional_notes,donator,expired_datetime,food_image,food_name,pickup_location,quantity} = loadData;
  console.log(loadData);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const additional_notes = form.notes.value;
    const foodDetails = {
      _id,
      
      additional_notes,
      ...loadData,
      requsterEmail: user.email
    };
    console.log(foodDetails);
    axios.post('http://localhost:5000/requested', foodDetails)
    .then(res=>{
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Added Requested List !");
        }
        else{
          toast.error("something is wrong");
        }
    })
}
const handleUp = id =>{
    console.log(id);
    setupId(id)
  };
  console.log(upId);


  return (
    <div className="border-2 rounded-md">
       <Helmet>
        <title>Food Picky || Food Details</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
     
        <div>
          <div className="max-w-[85rem] mx-auto md:p-5">
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-3">
                <div className="bg-slate-100 p-5">
                  <h1 className="text-2xl underline font-anton text-center">
                    Donator information -{" "}
                  </h1>
                  <div className="flex gap-5 items-center">
                    <div className="avatar">
                      <div className="w-16 rounded">
                        <img src={donator?.image} />
                      </div>
                    </div>
                    <div className="text-sm font-anton">
                      <p>{donator?.name}</p>
                      <p> pickup_location : {pickup_location}</p>
                    </div>
                  </div>
                </div>
                <h1 className="block mt-3 ml-2 text-2xl font-anton font-bold text-gray-800  md:text-3xl lg:text-4xl dark:text-white">
                  {food_name}
                </h1>
                <p className="mt-3 text-lg font-anton text-gray-800 dark:text-neutral-400">
                  expired: {expired_datetime}
                </p>
                <p className=" text-lg font-anton text-gray-800 dark:text-neutral-400">
                  Quantity: {quantity}
                </p>
                <p className="font-anton">{additional_notes}</p>

                <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                  <button 
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="btn bg-[#1e847f] text-white hover:bg-[#1e547f] "
                  >
                    Request
                  </button>

                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box relative">
                      <form onSubmit={handleUpdate}>
                        <h1 className="text-center font-anton my-5  text-2xl md:text-3xl font-bold underline">
                          Update Food
                        </h1>
                        <div className="flex gap-5">
                          <div>
                            <label htmlFor="FoodName">Food Name</label> <br />
                            <input
                              name="name"
                              type="text"
                              required
                              value={food_name}
                              placeholder="Write Food Name"
                              className="input input-bordered w-full"
                            />
                          </div>
                          <div>
                            <label htmlFor="FoodName">Image URL</label> <br />
                            <input
                              name="image"
                              type="text"
                              required
                              value={food_image}
                              placeholder="Write Valid URL"
                              className="input input-bordered w-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-5">
                          <div>
                            <label htmlFor="quantity">Food Quantity</label>{" "}
                            <br />
                            <input
                              name="quantity"
                              type="number"
                              required
                              value={quantity}
                              placeholder="Write Quantity"
                              className="input input-bordered w-full"
                            />
                          </div>
                          <div>
                            <label htmlFor="expired">Expired</label> <br />
                            <input
                              name="expired"
                              type="text"
                              required
                              value={expired_datetime}
                              placeholder="write date"
                              className="input input-bordered w-full"
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <label htmlFor="Location">Location</label>
                            <br />
                            <input
                              name="location"
                              required
                              value={pickup_location}
                              type="text"
                              placeholder="Type here your pickup location"
                              className="input input-bordered input-md w-full "
                            />
                          </div>
                          <div>
                            <label htmlFor="notes">Additional Notes</label>
                            <br />
                            <input
                              name="notes"
                              required
                              defaultValue={additional_notes}
                              type="text"
                              placeholder="Type here Additional Notes"
                              className="input input-bordered input-md w-full "
                            />
                          </div>
                        </div>
                        <div className="flex justify-center my-5">
                          <button
                            onClick={() => handleUp(_id)}
                            type="submit"
                            className="btn  bg-[#1e847f] text-white hover:text-black"
                          >
                            Please Add
                          </button>
                        </div>
                      </form>
                      <div
                        className="modal-action absolute
                                  top-0 right-6
                                  flex justify-center"
                      >
                        <form method="dialog">
                          <button type="submit" className="btn ">
                            X
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              <div className="lg:col-span-4 items-center mt-10 lg:mt-0">
                <img
                  className="w-full rounded-xl"
                  src={food_image}
                  alt="Image Loading..............."
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SinglePage;
