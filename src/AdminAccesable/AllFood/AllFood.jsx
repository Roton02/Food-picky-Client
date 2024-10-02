import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const AllFood = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/Admin/AllFood");
      return data;
    },
  });

  console.log(users);
  const handleMakeAdmin = (id) => {
    axios.patch(`http://localhost:5000/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("succesfully change the user Role", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    });
  };
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="w-1/5 pt-10">
        <h1 className="text-4xl  font-medium mt-10 border-user ">
          All User Collection 
        </h1>
      </div>
      <div className="relative overflow-x-auto  mt-10">
        
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs bg-slate-100  uppercase ">
            <tr>
              <th scope="col" className="px-3 py-2">
                No
              </th>
              <th scope="col" className="px-3 py-2">
                Profile
              </th>
              <th scope="col" className="px-3 py-2">
              Food name
              </th>
              <th scope="col" className="px-3 py-2">
              status
              </th>
             

              <th scope="col" className="px-3 py-2">
                Action
              </th>
              <th scope="col" className="px-3 py-2">
                
              </th>
              <th scope="col" className="px-3 py-2">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="b ">
                <th scope="row" className="px-3 py-2   whitespace-nowrap ">
                  {i + 1}
                </th>
                <th
                  scope="row"
                  className="px-3 py-2 font-medium  whitespace-nowrap "
                >
                  <img
                    className="w-14 h-14  object-cover rounded-full"
                    src={user.food_image}
                    alt=""
                  />
                </th>
                <th
                  scope="row"
                  className="px-3 py-2 font-medium  whitespace-nowrap "
                >
                  {user.food_name}
                </th>

                <th className=" py-2 px-3 ">{user.status}</th>
                
                <th className="px- py-2">
                  <button
                    onClick={() => {
                      handleMakeAdmin(user._id);
                    }}
                    href="#"
                    className="font-medium bg-green-200 px-2 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Update
                  </button>
                </th>
                <th className="px- py-2">
                  <button
                    onClick={() => {
                      handleMakeAdmin(user._id);
                    }}
                    href="#"
                    className="font-medium bg-green-200 px-2 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </th>
                <th className="px- py-2">
                  <button
                    onClick={() => {
                      handleMakeAdmin(user._id);
                    }}
                    href="#"
                    className="font-medium bg-green-200 px-2 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AllFood;