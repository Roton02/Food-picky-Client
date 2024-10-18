import { BiVerticalBottom } from "react-icons/bi";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const AddFood = () => {
  const { user } = useAuth();

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.name.value;
    const food_image = form.image.value;
    const expired_datetime = form.expired.value;
    const quantity = form.quantity.value;
    const additional_notes = form.notes.value;
    const image = user.photoURL;
    const name = user.displayName;
    const email = user.email;
    const status = "available";

    const foodDetails = {
      food_name,
      food_image,
      expired_datetime,
      quantity,
      additional_notes,
      donator: { image, name, email },
      status,
    };
    console.log(foodDetails);

    axios.post("https://food-pocky01.vercel.app/addFood", foodDetails).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Added!",
          text: "Your food has been added successfully.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Food Picky || Add Food</title>
      </Helmet>

      <div className="relative bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-12 min-h-screen flex items-center justify-center">
        <div className="max-w-screen-lg px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto rounded-lg shadow-lg bg-white relative z-10">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section */}
            <div className="md:pr-8">
              <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text">
                Add Your Unique Food Here!
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Share your extra food with others by adding details here. Manage
                it in your dashboard and help make a difference!
              </p>
            </div>

            {/* Form Section */}
            <div>
              <form
                onSubmit={handleAdd}
                className="bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50 p-6 rounded-lg shadow-xl"
              >
                <h2 className="text-center text-2xl font-semibold text-indigo-600">
                  Add New Food
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {/* Food Name */}
                  <div className="col-span-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="FoodName"
                    >
                      Food Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Enter Food Name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  {/* Food Image */}
                  <div className="col-span-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="image"
                    >
                      Food Image URL
                    </label>
                    <input
                      name="image"
                      type="text"
                      required
                      placeholder="Enter Image URL"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="branch"
                    >
                      Branch
                    </label>
                    <select
                      name="quantity"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select Branch</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chottogram">Chottogram</option>
                      <option value="noakhali">Noakhali</option>
                      <option value="dinajpur">Dinajpur</option>
                      <option value="barisal">Barisal</option>
                      <option value="gazipur">Gazipur</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="narayanganj">Narayanganj</option>
                      <option value="khulna">Khulna</option>
                      <option value="feni">Feni</option>
                      <option value="pabna">Pabna</option>
                      <option value="cox_bazar">Cox{`'`}s Bazar</option>
                      <option value="jessore">Jessore</option>
                      <option value="tangail">Tangail</option>
                      <option value="sirajganj">Sirajganj</option>
                      <option value="rajshahi">Rajshahi</option>
                    </select>
                  </div>

                  {/* Expiration Date */}
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="expired"
                    >
                      Expiration Date
                    </label>
                    <input
                      name="expired"
                      type="date"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  {/* Additional Notes */}
                  <div className="col-span-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="notes"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      required
                      rows={4}
                      placeholder="Enter any additional information"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Add Food
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="bg-gradient-to-t from-purple-300 via-transparent to-transparent w-64 h-64 absolute rounded-full opacity-50 -top-20 -left-50 animate-pulse"></div>
          <div className="bg-gradient-to-t from-pink-300 via-transparent to-transparent w-64 h-64 absolute rounded-full opacity-50 top-64 right-10 animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
          <div className="bg-gradient-to-t from-purple-300 via-transparent to-transparent w-64 h-64 absolute rounded-full opacity-50 -top-20 -left-50 animate-pulse"></div>
          <div className="bg-gradient-to-t from-pink-300 via-transparent to-transparent w-64 h-64 absolute rounded-full opacity-50 top-64 right-10 animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="bg-gradient-to-t from-purple-300 via-transparent to-transparent w-64 h-64 absolute rounded-full opacity-50 -top-20 -left-50 animate-pulse"></div>
          <div className="bg-gradient-to-t from-pink-300 via-transparent to-transparent w-64 h-64 absolute rounded-full opacity-50 bottom-0 left-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
