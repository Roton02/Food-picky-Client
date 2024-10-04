import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllRequested = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["manageFoods", user?.email],
  });

  const getData = async () => {
    const { data } = await axiosSecure(`/Admin/requested`);
    return data;
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedFoods = foods.slice(startIdx, startIdx + itemsPerPage);
  const totalPages = Math.ceil(foods.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Helmet>
        <title>Food Picky || My Food</title>
      </Helmet>

      <div className="max-w-6xl mx-auto mt-12">
        <h1 className="text-4xl text-center font-medium mt-10">
          All User Collection
        </h1>
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center">
          <div>
            <h2 className="text-xl font-semibold">Requested Foods Collection</h2>
            <p className="text-sm">Add Foods, edit and more.</p>
          </div>
          <div>
            <div className="inline-flex gap-x-2">
              <Link to="/availFood">
                <button className="btn btn-outline">View all</button>
              </Link>
              <Link to="/addFood">
                <button className="btn btn-primary">Add new food</button>
              </Link>
            </div>
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-start text-sm font-semibold">No</th>
              <th className="px-3 py-2 text-start text-sm font-semibold">Name</th>
              <th className="px-3 py-2 text-start text-sm font-semibold">Image</th>
              <th className="px-3 py-2 text-start text-sm font-semibold">Food Name</th>
              <th className="px-3 py-2 text-start text-sm font-semibold">Quantity</th>
              <th className="px-3 py-2 text-start text-sm font-semibold">Status</th>
              <th className="px-3 py-2 text-start text-sm font-semibold">Pickup Location</th>
              <th className="px-3 py-2 text-start text-sm font-semibold">Expired Date</th>
              <th className="px-3 py-2 text-start text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedFoods.map((manage,i) => (
              <tr key={manage._id} className="hover:bg-gray-50">
                <td className="px-3 py-2">{i+1}</td>
                <td className="px-3 py-2">{manage.donator?.name}</td>
                <td className="px-3 py-2">
                  <img className="w-10 h-10 rounded-full" src={manage.donator?.image} alt="donator" />
                </td>
                <td className="px-3 py-2">{manage.food_name}</td>
                <td className="px-3 py-2">{manage.quantity}</td>
                <td className="px-3 py-2">
                  {manage.status === "available" ? (
                    <span className="text-green-600">Available</span>
                  ) : (
                    <span className="text-red-600">Requested</span>
                  )}
                </td>
                <td className="px-3 py-2">{manage.pickup_location}</td>
                <td className="px-3 py-2">{manage.expired_datetime}</td>
                <td className="px-3 py-2">
                  <button className="btn btn-sm bg-green-400">Accept</button>
                  <button className="btn btn-sm bg-red-400 ml-2">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <nav className="inline-flex">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1.5 mx-1 border rounded-md ${
                  currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllRequested;
