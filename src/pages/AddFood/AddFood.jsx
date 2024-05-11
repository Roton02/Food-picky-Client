import { useContext } from "react";
import { BiVerticalBottom } from "react-icons/bi";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
  const {user} = useContext(AuthContext)
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
      <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Preline: A vision for 2024
              </p>

              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                  Fully customizable rules to match your unique needs
                </h1>
                <p className="text-gray-600 dark:text-neutral-400">
                  We provide you with a test account that can be set up in
                  seconds. Our main focus is getting responses to you as soon as
                  we can.
                </p>
              </div>
              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-xl italic text-gray-800 dark:text-white">
                    Amazing people to work with. Very fast and professional
                    partner.
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
                      <div className="font-semibold text-gray-800 dark:text-neutral-200">
                       {user.displayName}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-neutral-500">
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
