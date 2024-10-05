import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
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
      <div className="max-w-screen-lg mx-auto  overflow-hidden ">
        <h1 className="text-4xl text-center  mt-10 ">My Order History </h1>
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
          <div>
            <h2 className="text-xl font-semibold ">
              Order Foods Collection
            </h2>
            <p className="text-sm ">
              Manage Your order
            </p>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead className=" text-white bg-neutral-800">
            <tr>
              <th
                scope="col"
                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-xs text-nowrap ml-6 font-semibold uppercase tracking-wide ">
                    Food Image
                  </span>
                </div>
              </th>
              <th
                scope="col"
                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-xs text-nowrap ml-6 font-semibold uppercase tracking-wide ">
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
              <th scope="col" className="px-3 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide ">
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
                        <img src={manage.food_image} />
                      </div>
                    </div>
                  
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 lg:ps-3 xl:ps-0 px-6 pe-6 py-3">
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
                <td className="size-px px-6 py-1.5 whitespace-nowrap">
                  {manage.expired_datetime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
          <div>
            <p className="text-sm ">
              <span
                className="font-semibold "
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
