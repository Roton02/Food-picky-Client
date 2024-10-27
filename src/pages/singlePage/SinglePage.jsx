import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import MobileApp from "../../Home/MobileApp";
import Swal from "sweetalert2";
import { FaLocationArrow } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

const SinglePage = () => {
  const { user } = useAuth();
  const [upId, setupId] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const loadData = useLoaderData();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/featured/avilable`).then((res) => {
      setFoods(res.data);
      if (res.data.length < 1) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Data is not found ",
        });
      }
    });
  }, []);
  const {
    _id,
    additional_notes,
    donator,
    expired_datetime,
    food_image,
    food_name,
    pickup_location,
    price,
  } = loadData;
  console.log(loadData);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const address_notes = form.notes.value;
    const pickup_location = form.location.value;
    const quantity = form.quantity.value;
    // console.log(quantity);
    const foodDetails = {
      food_name,
      food_image,donator,
      expired_datetime,
      price,
      status:'requested',
      quantity,
      address_notes,
      pickup_location,
      requsterEmail: user.email,
      comments
    };

    axios.post("http://localhost:5000/requested", foodDetails).then((res) => {
      if (res.data.acknowledged) {
        toast.success("Added to Requested List!");
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  const handleUp = (id) => {
    setupId(id);
  };

  const handleSeeMoreToggle = () => {
    setShowMore(!showMore);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      name: user.displayName,
      image: user.photoURL,
      text: commentText,
    };
    setComments([...comments, newComment]);
    setCommentText("");
    toast.success("Comment added!");
  };
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, e.target.value); // Ensures quantity is at least 1
    setQuantity(value);
  };

  const total = quantity * price;

  return (
    <div className="bg-gray-50 min-h-screen ">
      <Helmet>
        <title>Food Picky || Food Details</title>
      </Helmet>

      <div className="max-w-screen-xl mx-auto p-6 mb-16">
        <div className="grid lg:grid-cols-8 gap-6">
          {/* Seller Information & Food Details */}
          <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-5">
              <h1 className="text-3xl font-bold text-gray-800 text-center">
                Seller Information
              </h1>
              <div className="flex items-center mt-5">
                <div className="avatar w-16 rounded-full">
                  <img src={donator?.image} alt="Seller" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Name: {donator.name}</p>
                  <p className="text-gray-600">Email: {donator.email}</p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-pink-600 mt-5">
              {food_name}
            </h2>
            <p className="text-gray-700 mt-2">
              Expired: <span className="font-semibold">{expired_datetime}</span>
            </p>

            {/* Additional Notes */}
            <p className="mt-4 text-gray-700">
              {showMore
                ? additional_notes
                : `${additional_notes.slice(0, 350)}...`}{" "}
              <span
                onClick={handleSeeMoreToggle}
                className="text-pink-500 cursor-pointer hover:underline"
              >
                {showMore ? "See Less" : "See More"}
              </span>
            </p>

            {/* Order Form */}
            {/* <form onSubmit={handleUpdate} className="mt-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-gray-700">Food Quantity</label>
                  <input
                    name="quantity"
                    type="number"
                    required
                    placeholder="Write Quantity"
                    className="input input-bordered w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Location</label>
                  <input
                    name="location"
                    required
                    value={pickup_location}
                    type="text"
                    placeholder="Enter your pickup location"
                    className="input input-bordered w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    required
                    rows={4}
                    placeholder="Enter additional notes"
                    className="textarea textarea-bordered w-full mt-2"
                  />
                </div>
              </div>

              <button
                onClick={() => handleUp(_id)}
                type="submit"
                className="btn w-full bg-pink-600 hover:bg-pink-700 text-white mt-6 py-3 font-bold uppercase rounded-lg transition-transform duration-300 transform hover:scale-105"
              >
                Confirm Order
              </button>
            </form> */}
             <form onSubmit={handleUpdate} className="mt-6  mx-auto bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Order</h2>

      <div className="grid grid-cols-1 gap-4">
        {/* Quantity and Price Calculation */}
        <div>
          <div className="flex items-center mt-2 space-x-2">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md px-3 font-bold"
            >
              -
            </button>
            <input
              name="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="input input-bordered w-16 text-center"
            />
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md px-3 font-bold"
            >
              +
            </button>
          </div>
          <p className="mt-2 text-gray-600 font-bold text-xl">Price: {quantity} x ${price} = ${total}</p>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700">Pickup Location</label>
          <input
            name="location"
            required
            // value={pickup_location}
            defaultValue={pickup_location}
            type="text"
            placeholder="Enter your pickup location"
            className="input input-bordered w-full mt-2"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-gray-700">Additional Notes</label>
          <textarea
            name="notes"
            required
            rows={4}
            placeholder="Enter additional notes"
            className="textarea textarea-bordered w-full mt-2"
          />
        </div>
      </div>

      {/* Confirm Order Button */}
      <button
        onClick={() => handleUp(_id)}
        type="submit"
        className="btn w-full bg-pink-600 hover:bg-pink-700 text-white mt-6 py-3 font-bold uppercase rounded-lg transition-transform duration-300 transform hover:scale-105"
      >
        Confirm Order
      </button>
    </form>
          </div>

          {/* Food Image */}
          <div className="lg:col-span-4">
            <img
              className="w-full h-auto mt-5 shadow-lg object-cover"
              src={food_image}
              alt={food_name}
            />
            <div>
              <div
                className={
                  "grid grid-cols-1 px-3  max-w-screen-xl mx-auto md:grid-cols-2 gap-1 md:gap-10 mt-2 flex-1"
                }
              >
                {foods.slice(0,2).map((p) => (
                  <div key={p._id} className="   shadow-xl  h-80">
                    <div className="relative p-2">
                      <figure className="flex justify-center items-center">
                        <img
                          className="w-64 h-52  hover:scale-105 transition hover:delay-75  object-cover"
                          src={p.food_image}
                        />
                      </figure>
                      <button className="absolute right-4 top-4 flex justify-center items-center bg-white p-1 hover:bg-slate-700 transition rounded-md">
                        {" "}
                        <GiSelfLove className="text-[#f81276] text-2xl" />{" "}
                      </button>
                      <p className="card-lavel bg-[#f81276] flex items-center gap-2 bg-red absolute py-3 px-7 -bottom-0 left-14 text-white">
                        <FaLocationArrow size={20} />
                        <span>
                          {" "}
                          <p>{p.pickup_location}</p>
                        </span>
                      </p>
                    </div>

                    <div className="md:p-4 px-2 md:px-14 lg:px-3">
                      <div className="flex justify-between items-center gap-2">
                        <h2 className="font-semibold text-xl md:text-2xl text-nowrap ">
                          {p.food_name}
                        </h2>
                        <p className="font-semibold text-red  ">
                          1000 {p.food_price} TK
                        </p>
                      </div>

                      <div className="flex  justify-between">
                        <p className="mt-1">{p.expired_datetime}</p>
                        <div className="  ">
                          <Link to={`/singlePage/${p._id}`}>
                            <button className="rounded-md  btn btn-sm border-t-0 border-x-0  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#f81276] text-[#f81276]hover:text-white">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#f81276] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative my-auto  text-[#f81276] transition duration-300 group-hover:text-white ease">
                                Details
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments</h2>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <div className="flex items-center gap-4">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <input
                type="text"
                className="input input-bordered flex-grow"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn bg-pink-600 hover:bg-pink-700 text-white"
              >
                Do Post
              </button>
            </div>
          </form>

          {/* Display Comments */}
          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-4">
                  <img
                    src={comment.image}
                    alt={comment.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="bg-gray-100 p-4 rounded-lg shadow-sm w-full">
                    <h3 className="font-semibold">{comment.name}</h3>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="mt-32">
        <MobileApp />
      </div>
    </div>
  );
};

export default SinglePage;
