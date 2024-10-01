import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const Users = () => {
  
  const {data: users = [],  refetch} = useQuery({
    queryKey: ["user"],
    queryFn: async()=>{
    const {data} = await axios.get("http://localhost:5000/Admin/user")
    return data;
    },
  });

  console.log(users);
  const handleMakeAdmin = (id) => {
    axios.patch(`/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `You Achive Admin Role !`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="relative overflow-x-auto  ">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs bg-slate-200  uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Gmail
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="b ">
                <th scope="row" className="px-6 py-4   whitespace-nowrap ">
                  {i + 1}
                </th>
                <th
                  scope="row"
                  className="px-3 py-4 font-medium  whitespace-nowrap "
                >
                  <img
                    className="w-16  object-cover rounded-full"
                    src={user.image}
                    alt=""
                  />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {user.name}
                </th>

                <td className=" py-4 ">{user.email}</td>
                <td className="px-6 py-4">Admin</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      handleMakeAdmin(user._id);
                    }}
                    href="#"
                    className="font-medium bg-green-200 px-2 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
