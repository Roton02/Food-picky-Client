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
import { Link } from "react-router-dom";

const AllFood = () => {
//   const { data: users = [], refetch } = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       const { data } = await axios.get("http://localhost:5000/Admin/AllFood");
//       return data;
//     },
//   });

//   console.log(users);
//   const handleMakeAdmin = (id) => {
//     axios.patch(`http://localhost:5000/users/admin/${id}`).then((res) => {
//       console.log(res.data);
//       if (res.data.modifiedCount > 0) {
//         refetch();
//         toast.success("succesfully change the user Role", {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//       }
//     });
//   };
//   return (
//     <div className="max-w-6xl mx-auto ">
//       <div className="w-1/5 pt-10">
//         <h1 className="text-4xl  font-medium mt-10 border-user ">
//           All User Collection 
//         </h1>
//       </div>
//       <div className="relative overflow-x-auto  mt-10">
        
//         <table className="w-full text-sm text-left rtl:text-right ">
//           <thead className="text-xs bg-slate-100  uppercase ">
//             <tr>
//               <th scope="col" className="px-3 py-2">
//                 No
//               </th>
//               <th scope="col" className="px-3 py-2">
//                 Profile
//               </th>
//               <th scope="col" className="px-3 py-2">
//               Food name
//               </th>
//               <th scope="col" className="px-3 py-2">
//               status
//               </th>
             

//               <th scope="col" className="px-3 py-2">
//                 Action
//               </th>
//               <th scope="col" className="px-3 py-2">
                
//               </th>
//               <th scope="col" className="px-3 py-2">
                
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, i) => (
//               <tr key={i} className="b ">
//                 <th scope="row" className="px-3 py-2   whitespace-nowrap ">
//                   {i + 1}
//                 </th>
//                 <th
//                   scope="row"
//                   className="px-3 py-2 font-medium  whitespace-nowrap "
//                 >
//                   <img
//                     className="w-14 h-14  object-cover rounded-full"
//                     src={user.food_image}
//                     alt=""
//                   />
//                 </th>
//                 <th
//                   scope="row"
//                   className="px-3 py-2 font-medium  whitespace-nowrap "
//                 >
//                   {user.food_name}
//                 </th>

//                 <th className=" py-2 px-3 ">{user.status}</th>
                
//                 <th className="px- py-2">
//                   <button
//                     onClick={() => {
//                       handleMakeAdmin(user._id);
//                     }}
//                     href="#"
//                     className="font-medium bg-green-200 px-2 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     Update
//                   </button>
//                 </th>
//                 <th className="px- py-2">
//                   <button
//                     onClick={() => {
//                       handleMakeAdmin(user._id);
//                     }}
//                     href="#"
//                     className="font-medium bg-green-200 px-2 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </th>
//                 <th className="px- py-2">
//                   <button
//                     onClick={() => {
//                       handleMakeAdmin(user._id);
//                     }}
//                     href="#"
//                     className="font-medium bg-green-200 px-2 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     Details
//                   </button>
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };




  // Fetching data with React Query
  const { data: pets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/Admin/AllFood");
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

  const handleUpdate = (_id) => {
    console.log(`Update pet with ID: ${_id}`);
  };

  const handleDelete = async (_id) => {
    console.log(`Delete pet with ID: ${_id}`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`allcategory/admin/delete/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  const handleChangeStatusByNotAdopted = async (id) => {
    await axios
      .patch(`/AdminChangeStatusByNotAdopted/${id}`)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("pet  status changed by Not Adopted", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          refetch();
        }
      });
  };
  const handleChangeStatusByAdopted = async (id) => {
    await axios.patch(`/AdminChangeStatusByAdopted/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("pet  status changed by Adopted", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        refetch();
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
              <tr key={row._id} className="border-b text-center border-gray-300">
                <td className="p-3 px-2 text-sm pl-4">{i + 1 + pageIndex * pageSize}</td>
                <td className="p-3 px-2 text-sm flex justify-center ">
                  <img
                    src={row.food_image}
                    alt="Pet"
                    className="w-14 h-14  object-cover"
                  />
                </td>
                <td className="p-3 px-2 text-sm ">{row.food_name}</td>
                <td className="p-3 px-2 text-sm ">{row.status}</td>
                <td className="p-3 px-2 text-sm ">
                 {row.expired_datetime}
                </td>
                <td className=" text-sm ">
                  <div className="space-x-7 flex justify-center">
                    <Link to={`updatepets/${row._id}`}>
                      <button className="bg-blue-500 text-white px-2 py-1 rounded">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(row._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleDelete(row._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Details
                    </button>
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
  );}
export default AllFood;