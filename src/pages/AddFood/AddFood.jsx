import { BiVerticalBottom } from "react-icons/bi";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const AddFood = () => {
  const {user} = useAuth()
  const handleAdd = e => {
    e.preventDefault()
    const form = e.target;
    const food_name = form.name.value;
    const food_image = form.image.value;
    const pickup_location = form.location.value;
    const expired_datetime = form.expired.value;
    const quantity = form.quantity.value;
    const additional_notes = form.notes.value;
    const image = user.photoURL;
    const name = user.displayName;
    const email = user.email
    const status = 'available'
    const foodDetails = {
      food_name, food_image,pickup_location, expired_datetime, quantity,additional_notes,
      donator:{image, name,email},status
    }
    // console.log(foodDetails);
    axios.post('http://localhost:5000/addFood', foodDetails)
    .then(res => {
      console.log(res.data);
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Added !",
          text: "Your file has been added Successfull.",
          icon: "success"
        });
      }
    })
    
  }
  return (
    <div> 
       <Helmet>
        <title>Food Picky || Add Food</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium font-anton ">
                Food Picky 
              </p>

              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 text-3xl font-semibold font-anton ">
                You can add as you like unique needs .!
                </h1>
                <p className="">
                As a user you can add your own foods which you can view in your Manage My Foods section.
                </p>
              </div>
              <blockquote className="hidden md:block relative max-w-sm">
               

                <div className="relative z-10">
                  <p className="text-xl italic">
                  We are very happy and proud to have you as a user .
                  </p>
                </div>

                <footer className="mt-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="size-8 rounded-full"
                        src={user.photoURL}
                        alt="Image Description"
                      />
                    </div>
                    <div className="grow ms-4">
                      <div className="font-semibold ">
                       {user.displayName}
                      </div>
                      <div className="text-xs ">
                        Viewer & User of FoodPicky 
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            {/*---------------------------- Form info --------------------- */}
            <div>
              <form onSubmit={handleAdd}>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                    <div className="text-center">
                      <h1
                        className="block text-2xl font-bold text-gray-800
                 dark:text-white"
                      >
                        Add A new Food{" "}
                      </h1>
                    </div>

                    <div className="mt-5">
                      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
                        <BiVerticalBottom />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="relative">
                            <label htmlFor="FoodName">Food Name</label>
                            <input
                              name="name"
                              type="text"
                              required
                              placeholder="Write Food Name"
                              className="input input-bordered w-full max-w-xs"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <label htmlFor="image">Food Image</label>
                            <input
                              name="image"
                              type="text"
                              required
                              placeholder="Write Image URL"
                              className="input input-bordered w-full max-w-xs"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="relative">
                            <label htmlFor="quantity">Food quantity</label>
                            <input
                              name="quantity"
                              required
                              type="number"
                              placeholder="Write Valid Quantity"
                              className="input input-bordered w-full max-w-xs"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="relative">
                            <label htmlFor="expired">Expired in</label>
                            <input
                              name="expired"
                              required
                              type="date"
                              placeholder="Write pick-up Location"
                              className="input input-bordered w-full max-w-xs"
                            />
                          </div>
                        </div>
                        <div className="relative col-span-full">
                          <div className="relative">
                            <label htmlFor="Location">Location</label>
                            <input
                              name="location"
                              required
                              type="text"
                              placeholder="Type here your pickup location"
                              className="input input-bordered input-md w-full max-w-full"
                            />
                          </div>
                        </div>
                        <div className="relative col-span-full">
                          <div className="relative">
                            <label htmlFor="notes">Additional Notes</label>
                            <input
                              name="notes"
                              required
                              type="text"
                              placeholder="Type here Additional Notes"
                              className="input input-bordered input-md w-full max-w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-center ">
                        <button type="submit" className="rounded-md w-1/3  btn  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-[#1e847f]hover:text-white">
                          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1e847f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                          <span className="relative my-auto  text-[#1e847f] transition duration-300 group-hover:text-white ease">
                            Add
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
