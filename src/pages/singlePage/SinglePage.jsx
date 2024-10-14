import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import MobileApp from "../../Home/MobileApp";

const SinglePage = () => {
  const { user } = useAuth();
  const [upId, setupId] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const loadData = useLoaderData();
  const {
    _id,
    additional_notes,
    donator,
    expired_datetime,
    food_image,
    food_name,
    pickup_location,
    quantity,
  } = loadData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const additional_notes = form.notes.value;
    const foodDetails = {
      _id,
      additional_notes,
      ...loadData,
      requsterEmail: user.email,
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

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Food Picky || Food Details</title>
      </Helmet>

      <div className="max-w-screen-xl mx-auto p-6">
        <div className="grid lg:grid-cols-8 gap-6">
          {/* Seller Information & Food Details */}
          <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-5">
              <h1 className="text-3xl font-bold text-gray-800 text-center">Seller Information</h1>
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

            <h2 className="text-4xl font-bold text-pink-600 mt-5">{food_name}</h2>
            <p className="text-gray-700 mt-2">
              Expired: <span className="font-semibold">{expired_datetime}</span>
            </p>

            {/* Additional Notes */}
            <p className="mt-4 text-gray-700">
              {showMore ? additional_notes : `${additional_notes.slice(0, 150)}...`}{" "}
              <span
                onClick={handleSeeMoreToggle}
                className="text-pink-500 cursor-pointer hover:underline"
              >
                {showMore ? "See Less" : "See More"}
              </span>
            </p>

            {/* Order Form */}
            <form onSubmit={handleUpdate} className="mt-6">
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
                  <label className="block text-gray-700">Additional Notes</label>
                  <textarea
                    name="notes"
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
            </form>
          </div>

          {/* Food Image */}
          <div className="lg:col-span-4">
            <img
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              src={food_image}
              alt={food_name}
            />
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments</h2>
          
          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <div className="flex items-center gap-4">
              <img src={user?.photoURL} alt="User" className="w-12 h-12 rounded-full" />
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
                Post
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
            <p className="text-gray-600">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="mt-10">
        <MobileApp />
      </div>
    </div>
  );
};

export default SinglePage;
