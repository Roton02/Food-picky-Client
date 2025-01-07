import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import Swal from "sweetalert2";

const AllFood = () => {
  const [upId, setupId] = useState(null);

  // Fetching data with React Query
  const { data: pets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axios.get("https://food-pocky01.vercel.app/Admin/AllFood");
      return res.data;
    },
  });
  console.log(pets);
  const columns = useMemo(
    () => [
      {
        accessorKey: "serialNumber",
        header: "No",
        cell: (info) => info.row.index + 1,
      },
      {
        accessorKey: "img",
        header: "Food Image",
        cell: ({ getValue }) => (
          <img src={getValue()} alt="Pet" className="w-12 h-12 object-cover" />
        ),
      },
      {
        accessorKey: "name",
        header: "Food Name",
      },
      {
        accessorKey: "type",
        header: "Food Status",
      },
      {
        accessorKey: "expired_datetime",
        header: "expired_datetime",
        cell: ({ row }) => (row.original.adopted ? "Adopted" : "Available"),
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <div className="space-x-2">
            <button
              onClick={() => handleUpdate(row.original._id)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(row.original._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => handleDelete(row.original._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Details
            </button>
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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

    axios
      .patch(`https://food-pocky01.vercel.app/update/${upId}`, foodDetails)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Update successfully !");
          refetch();
        } else {
          toast.error("No Update ");
        }
      });
  };
  const handleUp = (id) => {
    console.log(id);
    setupId(id);
  };

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
              refetch();
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

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(7);

  const table = useReactTable({
    data: pets,
    columns,
    pageCount: Math.ceil(pets.length / pageSize),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater;
      setPageIndex(newState.pageIndex);
      setPageSize(newState.pageSize);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });

  const paginatedData = useMemo(() => {
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    return pets.slice(start, end);
  }, [pets, pageIndex, pageSize]);

  return (
    <div className="max-w-7xl mx-auto   mt-7 md:mt-0">
      <h1 className="text-4xl text-center  my-10 mb-4">All Pets</h1>
      <div className="w-[90vw] md:w-full    ">
        <table className="table max-w-5xl mx-auto overflow-scroll ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="  bg-slate-800 font-bold text-xl text-white  border-l"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-4  border-l text-center text-sm font-medium"
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr
                key={row._id}
                className="border-b text-center border-gray-300"
              >
                <td className="p-3 px-2 text-sm pl-4">
                  {i + 1 + pageIndex * pageSize}
                </td>
                <td className="p-3 px-2 text-sm flex justify-center ">
                  <img
                    src={row.food_image}
                    alt="Pet"
                    className="w-14 h-14  object-cover"
                  />
                </td>
                <td className="p-3 px-2 text-sm ">{row.food_name}</td>
                <td className="p-3 px-2 text-sm ">{row.status}</td>
                <td className="p-3 px-2 text-sm ">{row.expired_datetime}</td>
                <td className=" text-sm ">
                  <div className="space-x-7 flex justify-center">
                    <button
                      onClick={() =>
                        document.getElementById(row._id).showModal()
                      }
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Update
                    </button>
                    <dialog
                      id={row._id}
                      className="modal text-start modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box relative">
                        <form onSubmit={handleUpdate}>
                          <h1 className="text-center font-anton my-5  text-2xl md:text-3xl font-bold underline">
                            Update Food
                          </h1>
                          <div className="flex mb-2 gap-2">
                            <div>
                              <label htmlFor="FoodName ">Food Name</label> <br />
                              <input
                                name="name"
                                type="text"
                                required
                                defaultValue={row.food_name}
                                placeholder="Write Food Name"
                                className="input input-bordered w-full px-6"
                              />
                            </div>
                            <div>
                              <label htmlFor="FoodName">Image URL</label> <br />
                              <input
                                name="image"
                                type="text"
                                required
                                defaultValue={row.food_image}
                                placeholder="Write Valid URL"
                                className="input input-bordered w-full px-6"
                              />
                            </div>
                          </div>
                          <div className="flex mb-2 gap-2">
                            <div>
                              <label htmlFor="quantity">Food Quantity</label>{" "}
                              <br />
                              <input
                                name="quantity"
                                type="number"
                                required
                                defaultValue={row.quantity}
                                placeholder="Write Quantity"
                                className="input input-bordered w-full px-6"
                              />
                            </div>
                            <div>
                              <label htmlFor="expired">Expired</label> <br />
                              <input
                                name="expired"
                                type="date"
                                required
                                defaultValue={row.expired_datetime}
                                placeholder=""
                                className="input input-bordered  w-full px-10"
                              />
                            </div>
                          </div>
                          <div className="mr-3 ">
                            <div>
                              <label htmlFor="Location">Location</label>
                              <br />
                              <input
                                name="location"
                                required
                                defaultValue={row.pickup_location}
                                type="text "
                                placeholder="Type here your pickup location"
                                className="input input-bordered mb-2 input-md w-full "
                              />
                            </div>
                            <div>
                              <label htmlFor="notes">Additional Notes</label>
                              <br />
                              <textarea
                                rows={3}
                                name="notes"
                                required
                                defaultValue={row.additional_notes}
                                type="text"
                                placeholder="Type here Additional Notes"
                                className="textarea textarea-bordered w-full "
                              />
                            </div>
                          </div>
                          <div className="flex justify-center mt-2">
                            <button
                              onClick={() => handleUp(row._id)}
                              type="submit"
                              className=" px-12  py-2 rounded-lg hover:bg-gray-300 font-bold  bg-[#E21B70] text-white hover:text-black"
                            >
                              Submit
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

                    <button
                      onClick={() => handleDelete(row._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Details
                    </button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle bg-slate-200 btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div className="mt-5">
                          <img
                            className="h-60 rounded-lg w-full"
                            src={row.food_image}
                            alt=""
                          />
                          <div className="text-start">
                            <h3 className="font-bold  text-2xl ml-2 mt-2 ">
                              - {row.food_name} -
                            </h3>
                          </div>
                          <p className="font-semibold py-1  text-start ml-2">
                            quantity : {row.quantity}
                          </p>
                          <p className=" font-semibold  pb-1 text-start ml-2">
                            pickup location : {row.pickup_location}
                          </p>
                          <p className=" text-start mt-3 ml-2">
                            {row.additional_notes}
                          </p>
                          <div>
                            <h5 className="font-bold  text-xl ml-2 mt-6 ">
                              - Donator Details -
                            </h5>
                            <div className="flex mt- gap-4">
                              <img
                                className=" mt- w-20 rounded-lg"
                                src={row.donator.image}
                                alt=""
                              />
                              <div className="text-start mt-12">
                                <p>{row.donator.name}</p>
                                <p>{row.donator.email}</p>
                              </div>
                            </div>
                          </div>
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
      {table.getPageCount() > 1 && (
        <div className="flex max-w-6xl mx-auto justify-center  gap-7 md:gap-0 overflow-hidden  md:justify-between md:px-12 lg:px-24 items-center mt-4">
          <button
            className="px-4 py-2 bg-gray-200  rounded"
            onClick={() => table.setPageIndex(pageIndex - 1)}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <span className="text-sm ">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <button
            className="px-4 py-2 bg-gray-200  rounded"
            onClick={() => table.setPageIndex(pageIndex + 1)}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
export default AllFood;
