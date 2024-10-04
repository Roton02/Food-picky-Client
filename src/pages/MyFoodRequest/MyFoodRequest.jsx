import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyFoodRequest = () => {
  const { user } = useAuth();
  // const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/requested/${user.email}, {withCredentials:true}`).then((res) => {
  //     setFoods(res.data);
  //   });
  // }, [user]);
  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["manageFoods", user?.email], // 2nd index a jodi dependency dita pari. mane user?.email asle abar refetch hobe. ex:  queryKey: ['rooms', user?.email]
  });
  console.log(foods);
  const getData = async () => {
    const { data } = await axiosSecure(`/requested/${user.email}`);
    return data;
  };
  console.log(foods);

  console.log(foods);
  return (
    <div>
      <Helmet>
        <title>Food Picky || My Food</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Requested Foods Collection
            </h2>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Add Foods, edit and more.
            </p>
          </div>

          <div>
            <div className="inline-flex gap-x-2">
              <Link to="/availFood">
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
          <thead className="bg-gray-50 dark:bg-neutral-800">
            <tr>
              <th
                scope="col"
                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-xs ml-6 font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    Donator
                  </span>
                </div>
              </th>
              <th
                scope="col"
                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-xs ml-6 font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    Food Name
                  </span>
                </div>
              </th>

              <th scope="col" className="px-3 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    Quantity
                  </span>
                </div>
              </th>

              <th scope="col" className="px-3 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    Status
                  </span>
                </div>
              </th>

              <th scope="col" className="px-3 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    Pickup Location
                  </span>
                </div>
              </th>
              <th scope="col" className="px-3 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    expired_datetime
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {foods.map((manage) => (
              <tr key={manage._id}>
                <td className="size-px px-6 py-3 whitespace-nowrap">
                  <div className="">
                    <div className="avatar">
                      <div className="w-12 rounded-xl">
                        <img src={manage.donator?.image} />
                      </div>
                    </div>
                    <h2 className="text-sm font-medium font-anton">
                      {manage.donator?.name}{" "}
                    </h2>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 lg:ps-3 xl:ps-0 px-6 pe-6 py-3">
                    <div className="flex items-center  gap-x-3">
                      <div>
                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                          {manage.food_name}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h-px w-72 whitespace-nowrap">
                  <div className="pl-6 py-3">
                    <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
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
                <td className="size-px px-6 py-1.5 whitespace-nowrap">
                  {manage.expired_datetime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
          <div>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              <span
                className="font-semibold text-gray-800
                 dark:text-neutral-200"
              >
                Total results
              </span>{" "}
              {foods.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
