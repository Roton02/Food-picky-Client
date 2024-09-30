import ReactStars from "react-rating-stars-component";
import axios from "axios";
import BannerByAllPage from "../../Component/BannerByAllPage/BannerByAllPage";
import Swal from "sweetalert2";
import { useContext } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const Reviews = () => {
  const dateString = new Date().toISOString();
  const { user } = useContext(AuthContext);
  const [rating, setRatings] = useState();

  const { data = [], refetch } = useQuery({
    queryKey: ["rating"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/reviewsCollection")
        .then((res) => res.data),
  });

  const ratingChanged = (newRating) => {
    setRatings(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const ratings = rating;
    const description = form.description.value;
    const client_name = user.displayName;
    const image = user.photoURL;
    const addRatings = {
      ratings,
      description,
      client_name,
      image,
      dateString,
    };
    axios.post("http://localhost:5000/reviews", addRatings).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Add your Review!",
          text: "Thank you for giving review in our !",
          icon: "success",
        });
        form.reset();
        refetch();
      }
    });
    console.log(addRatings);
  };
  return (
    <div>
      <BannerByAllPage
        text={"Home / Reviews"}
        p={"Read trusted reviews from our customers"}
      ></BannerByAllPage>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start  border-b-2     py-2">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className=""
            >
              <a
                href="#_"
                className="py-3 mb-1 rounded-r-2xl hover:bg-secondary  px-20 hover:cursor-pointer bg-[#E21B70] text-white font-bold "
              >
                Add Your Personal Opinion
              </a>
            </button>
          </div>
        </div>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center py-6  space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <ReactStars
                    required
                    count={5}
                    onChange={ratingChanged}
                    size={45}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  className="input input-bordered w-full max-w-2xl mb-2"
                  name=""
                  value={user?.displayName}
                  id=""
                />
                <input
                  type="text"
                  className="input input-bordered w-full max-w-2xl mb-2"
                  name=""
                  value={user?.email}
                  id=""
                />
                <textarea
                  required
                  rows="3"
                  name="description"
                  placeholder="Message..."
                  className="p-4 border-2 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 rounded-lg transition duration-300"
                >
                  <a
                    href="#_"
                    className="relative inline-block mt-2 px-14 py-2 font-medium group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">
                      Submit Feedback
                    </span>
                  </a>
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

        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 ">
          <div className=" [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <ReactStars edit={false} value={5} size={24} activeColor="#ffd700" />
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                  illo est quia obcaecati neque quibusdam eius accusamus error
                  officiis atque voluptates magnam!
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <ReactStars edit={false} value={5} size={24} activeColor="#ffd700" />
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  mollitia rerum quo unde neque atque molestias quas pariatur!
                  Sint, maxime?
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <ReactStars edit={false} value={5} size={24} activeColor="#ffd700" />
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit esse delectus, maiores fugit, reiciendis culpa
                  inventore sint accusantium libero dolore eos quasi a ex
                  aliquam molestiae. Tenetur hic delectus maxime.
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <ReactStars edit={false} value={5} size={24} activeColor="#ffd700" />
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, fuga?
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <ReactStars edit={false} value={5} size={24} activeColor="#ffd700" />
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate officia natus blanditiis rerum incidunt ex autem
                  repudiandae doloribus eveniet quia? Culpa commodi quae atque
                  perspiciatis? Provident, magni beatae saepe porro aspernatur
                  facere neque sunt possimus assumenda perspiciatis aperiam
                  quisquam animi libero voluptatem fuga. Repudiandae, facere?
                  Nemo reprehenderit quas ratione quis.
                </p>
              </blockquote>
            </div>

        

         

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <ReactStars edit={false} value={5} size={24} activeColor="#ffd700" />
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                  modi!
                </p>
              </blockquote>
            </div>

            {data.map((review, i) => (
              <div key={i} className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src={review.image}
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <ReactStars edit={false} value={review.ratings} size={24} activeColor="#ffd700" />
                    </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        {review.client_name}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">{review.description}</p>
                </blockquote>
              </div>
            ))}
                <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <ReactStars edit={false} value={5} size={24} activeColor="#ffd700" />
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  rerum. Nobis laborum praesentium necessitatibus vero.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
