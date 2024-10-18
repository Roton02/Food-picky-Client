import axios from "axios";
import {  useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const ManageMyFoods = () => {
  // const [manageF, setManageF] = useState([]);
  const { user } = useAuth()
  const [upId , setupId] = useState(null)
  // useEffect(() => {
  //   // axios
  //   //   .get(`https://food-pocky01.vercel.app/featured/?email=${user?.email}`)
  //   //   .then((res) => {
  //   //     setManageF(res.data);
  //   //   });
  // }, [user,axiosSecure]);
    const { data: manageF = [], isLoading, refetch } = useQuery({
      queryFn: () => getData(),
      queryKey: ['manageFoods', user?.email]   // 2nd index a jodi dependency dita pari. mane user?.email asle abar refetch hobe. ex:  queryKey: ['rooms', user?.email] 
  })
  console.log(manageF)
  const getData = async () => {
      const { data } = await axios(`https://food-pocky01.vercel.app/featured-info/${user?.email}`)
      return data;
  }
  console.log(manageF);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          axios.delete(`https://food-pocky01.vercel.app/delete/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              // const remaining = manageF.filter((manage) => manage._id !== id);
              // setManageF(remaining);
              refetch()
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.name.value;
    const food_image = form.image.value;
    const pickup_location = form.location.value;
    const expired_datetime = form.expired.value;
    const quantity = form.quantity.value;
    const additional_notes = form.notes.value;
    const foodDetails = {
      food_name,
      food_image,
      pickup_location,
      expired_datetime,
      quantity,
      additional_notes,
    };
    console.log(foodDetails);
    
    axios.patch(`https://food-pocky01.vercel.app/update/${upId}`, foodDetails)
    .then(res=>{
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Update successfully !");
          refetch()
        }else{
          toast.error("No Update ");
        }
    })
}
const handleUp = id =>{
  console.log(id);
  setupId(id)
};
  // console.log(upId);
if (isLoading) {
  return<div className="flex min-h-screen my-auto items-center justify-center">
  <span className="loading loading-bars loading-xs"></span>
  <span className="loading loading-bars loading-lg"></span>
  <span className="loading loading-bars loading-lg"></span>
  <span className="loading loading-bars loading-lg"></span>

  {/* <video src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/loading-lines-6747317-5601928.mp4" autoPlay="muted" loop="loop" playsInline type="video/mp4"></video> */}
</div>
   
}
  return (
    <div>
       <Helmet>
        <title>Food Picky || Manage Food</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div>
        <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="text-4xl text-center font-medium mt-">
          My added food 
        </h1>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className=" overflow-hidden ">
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center ">
                    <div>
                      <h2 className="text-xl font-semibold ">
                        Foods Collection
                      </h2>
                      <p className="text-sm ">
                        Add Foods, edit and more.
                      </p>
                    </div>

                    <div>
                      <div className="inline-flex gap-x-2">
                        <Link to="/Admin/allFood">
                          <button
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                            href="#"
                          >
                            View all 
                          </button>
                        </Link>

                        <Link to="/addFood">
                          <button
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#1e847f] text-white  disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                          >
                            <svg
                              className="flex-shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                            Add new food
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                        >
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs ml-6 font-semibold uppercase tracking-wide ">
                              Food Name
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-3 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide ">
                              Quantity
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-3 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide ">
                              Status
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-3 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide ">
                              Pickup Location
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-3  py-3 text-center"> Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                      {manageF.map((manage) => (
                        <tr key={manage._id}>
                          <td className="size-px whitespace-nowrap">
                            <div className="ps-6 lg:ps-3 xl:ps-0 ml-10 pe-6 py-3">
                              <div className="flex items-center  gap-x-3">
                                <div>
                                  <span className="block text-sm font-semibold ">
                                    {manage.food_name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="pl-6 py-3">
                              <span className="block text-sm font-semibold ">
                                {manage.quantity}
                              </span>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <div className=" pr-6 py-3">
                              {manage.status == "available" ? (
                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                  <svg
                                    className="size-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                  </svg>
                                  Available
                                </span>
                              ) : (
                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-slate-200 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                  <svg
                                    className="size-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                  </svg>
                                  Requested
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            {manage.pickup_location}
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <button
                                onClick={() => handleDelete(manage._id)}
                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                                href="#"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-1.5">
                              <button
                                onClick={() =>
                                  document
                                    .getElementById(manage._id)
                                    .showModal()
                                }
                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                                href="#"
                              >
                                Edit
                              </button>

                              <dialog 
                                id={manage._id}
                                className="modal modal-bottom sm:modal-middle"
                              >
                                <div className="modal-box relative">
                                  <form onSubmit={handleUpdate}>
                                    <h1 className="text-center font-anton my-5  text-2xl md:text-3xl font-bold underline">
                                      Update Food
                                    </h1>
                                    <div className="flex gap-5">
                                      <div>
                                      <label htmlFor="FoodName">
                                        Food Name
                                      </label>{" "}
                                      <br />
                                      <input
                                        name="name"
                                        type="text"
                                        required
                                        defaultValue={manage.food_name}
                                        placeholder="Write Food Name"
                                        className="input input-bordered w-full"
                                      />
                                      </div>
                                      <div>
                                      <label htmlFor="FoodName">
                                        Image URL
                                      </label>{" "}
                                      <br />
                                      <input
                                        name="image"
                                        type="text"
                                        required
                                        defaultValue={manage.food_image}
                                        placeholder="Write Valid URL"
                                        className="input input-bordered w-full"
                                      />
                                      </div>
                                    </div>
                                    <div className="flex gap-5">
                                      <div>
                                      <label htmlFor="quantity">
                                        Food Quantity
                                      </label>{" "}
                                      <br />
                                      <input
                                        name="quantity"
                                        type="number"
                                        required
                                        defaultValue={manage.quantity}
                                        placeholder="Write Quantity"
                                        className="input input-bordered w-full"
                                      />
                                      </div>
                                      <div>
                                      <label htmlFor="expired">
                                      Expired
                                      </label>{" "}
                                      <br />
                                      <input
                                        name="expired"
                                        type="date"
                                        required
                                        defaultValue={manage.expired_datetime}
                                        placeholder=""
                                        className="input input-bordered w-full"
                                      />
                                      </div>
                                    </div>
                                    <div>
                                   <div>
                                   <label htmlFor="Location">Location</label><br />
                            <input
                              name="location"
                              required
                              defaultValue={manage.pickup_location}
                              type="text"
                              placeholder="Type here your pickup location"
                              className="input input-bordered input-md w-full "
                            />
                                   </div>
                             <div>
                             <label htmlFor="notes">Additional Notes</label><br />
                            <input
                              name="notes"
                              required
                              defaultValue={manage.additional_notes}
                              type="text"
                              placeholder="Type here Additional Notes"
                              className="input input-bordered input-md w-full "
                            />
                             </div>
                                    </div>
                                  <div className="flex justify-center my-5">
                                  <button onClick={()=>handleUp(manage._id)} type="submit" className="btn  bg-[#1e847f] text-white hover:text-black">Update Info</button>
                                  </div>
                                  </form>
                                  <div className="modal-action absolute
                                  top-0 right-6
                                  flex justify-center">
                                    <form method="dialog">
                                      <button type="submit" className="btn ">X</button>
                                    </form>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMyFoods;
