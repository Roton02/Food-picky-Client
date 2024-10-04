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
                  <button className="btn btn-sm text-nowrap bg-red-400 ml-2">Stock over</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex max-w-6xl mx-auto justify-center gap-7 md:gap-0 overflow-hidden md:justify-between md:px-12 lg:px-24 items-center mt-4">
  <button
    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>
  <span className="text-sm">
    Page {currentPage} of {totalPages}
  </span>
  <button
    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>

      </div>
    </div>
  );
};

export default AllRequested;
