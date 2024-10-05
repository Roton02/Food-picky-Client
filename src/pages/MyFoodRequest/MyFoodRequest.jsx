import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../../Component/JobCard/JobCard";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

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
    setTimeout(() => setLoading(false), 1200);
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
            <h2 className="text-xl font-semibold ">Order Foods Collection</h2>
            <p className="text-sm ">Manage Your order</p>
          </div>
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center ">
            <div>
              <p className="text-sm ">
                <span className="font-semibold ">Total results</span>{" "}
                {foods.length}
              </p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-9 md:gap-16 mt-10">
            {foods.map((item) => (
              <JobCard
                key={item._id}
                img={item.food_image}
                postedBy={item.donator.name}
                jobTitle={item.food_name}
                postedDate={item.expired_datetime}
                type={item.status}
                salery={item.quantity}
                deadLine={item.expired_datetime}
                id={item._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFoodRequest;
