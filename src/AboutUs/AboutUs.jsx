import BannerByAllPage from "../Component/BannerByAllPage/BannerByAllPage";
import roton from "../assets/roton_passport_size.png";

const AboutUs = () => {
  return (
    <div>
      <BannerByAllPage text={"Home / About us"}></BannerByAllPage>
      <div className="bg-gradient-to-b md:px-20 from-white to-gray-50 min-h-screen p-8">
        {/* Header Section */}
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-5xl  text-[#E21B70] mb-6">About Food Picky</h1>
          <p className="text-md font-light ">
            Welcome to Food Picky – the go-to platform for food lovers! Whether
            you’re craving a quick bite or looking to explore a new cuisine, we
            are here to connect you with the finest restaurants in your area.
            Food Picky is a food delivery and restaurant discovery platform that
            bridges the gap between food lovers and restaurants. Our platform
            allows users to browse, order, and enjoy meals from a diverse
            selection of local and international restaurants. Founded with the
            mission to make food ordering a seamless and delightful experience,
            Food Picky is now one of the fastest-growing food services in the
            industry, offering both dine-in recommendations and delivery options
            for all your cravings.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="max-w-screen-xl mx-auto my-6 ">
          <h2 className="text-4xl font-bold text-[#E21B70] ">Our Mission</h2>
          <p className="mt-6 text-md font-light">
            At Food Picky, we aim to create a community of food enthusiasts by
            offering easy access to a variety of cuisines. We are driven by our
            passion for food and the desire to provide our customers with an
            unforgettable dining experience. Our mission is to enhance the
            dining experience by connecting people with their favorite food,
            delivering it right to their doorsteps, and supporting local
            restaurants in expanding their reach.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="my-6 mt-10 max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-[#E21B70] ">What We Offer</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-semibold text-[#E21B70]">
                Diverse Cuisines
              </h3>
              <p className="mt-2 text-gray-700">
                Whether youre in the mood for Chinese, Indian, Italian, or
                something local, we have something to satisfy every craving. Our
                platform partners with top restaurants to bring you a wide range
                of delicious options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-semibold text-[#E21B70]">
                Fast & Reliable Delivery
              </h3>
              <p className="mt-4 text-gray-700">
                We pride ourselves on delivering your food fresh and on time.
                With our fast delivery service, you can enjoy your meal without
                having to worry about long wait times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-semibold text-[#E21B70]">
                Customer-Centric Approach
              </h3>
              <p className="mt-4 text-gray-700">
                Our customers are at the heart of everything we do. From placing
                your order to receiving your meal, we ensure that the entire
                process is smooth and hassle-free, with excellent customer
                support available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-semibold text-[#E21B70]">
                Support for Local Restaurants
              </h3>
              <p className="mt-4 text-gray-700">
                We are committed to supporting small and local restaurants by
                providing them with the platform and tools they need to reach a
                larger audience and grow their business.
              </p>
            </div>
          </div>
        </section>

        {/* How We Interact with Clients */}
        <section className="mt-12 max-w-screen-xl mx-auto ">
          <h2 className="text-4xl font-bold text-[#E21B70] ">
            How We Interact With Our Clients
          </h2>
          <p className="mt-6 text-gray-700   leading-relaxed">
            At Food Picky, we believe in building strong relationships with our
            customers. From the moment you land on our platform to the time your
            order is delivered, we ensure every step is smooth and transparent.
            Our customer service team is always available to assist you with any
            queries, and we value your feedback to continuously improve our
            services.
          </p>
        </section>

        {/* Our Team Section */}
        <section className=" max-w-screen-xl mx-auto">
          <div className="  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">
            <div className="max-w-7xl mb-10 md:mx-auto  md:mb-12">
              <div>
                <h2 className="text-4xl font-bold text-[#E21B70]  mb-10">
                  Meet Our Dedicated Team
                </h2>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={roton}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Md Sana Ullah Roton
                    </p>
                    <p className="mb-4 text-xs text-gray-100">Web develper</p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Vincent Van Gogh’s most popular painting, The Starry
                      Night.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0077B5"
                        >
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.25V1.74C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.53a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.14 12.94h-3.56V14.7c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.22 1.5-2.22 3.04v5.88H9.22V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.23z" />
                        </svg>
                      </a>
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Marta Clermont
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Design Team Lead
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Amet I love liquorice jujubes pudding croissant I love
                      pudding.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0077B5"
                        >
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.25V1.74C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.53a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.14 12.94h-3.56V14.7c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.22 1.5-2.22 3.04v5.88H9.22V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.23z" />
                        </svg>
                      </a>
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Anthony Geek
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      CTO, Lorem Inc.
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Apple pie macaroon toffee jujubes pie tart cookie
                      caramels.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0077B5"
                        >
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.25V1.74C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.53a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.14 12.94h-3.56V14.7c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.22 1.5-2.22 3.04v5.88H9.22V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.23z" />
                        </svg>
                      </a>
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Alice Melbourne
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Human Resources
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Lorizzle ipsum bling bling sit amizzle, consectetuer
                      adipiscing elit.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0077B5"
                        >
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.25V1.74C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.53a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.14 12.94h-3.56V14.7c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.22 1.5-2.22 3.04v5.88H9.22V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.23z" />
                        </svg>
                      </a>
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Martin Garix
                    </p>
                    <p className="mb-4 text-xs text-gray-100">Good guy</p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Bacon ipsum dolor sit amet salami jowl corned beef,
                      andouille flank.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0077B5"
                        >
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.25V1.74C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.53a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.14 12.94h-3.56V14.7c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.22 1.5-2.22 3.04v5.88H9.22V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.23z" />
                        </svg>
                      </a>
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Andrew Larkin
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Backend Developer
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Moonfish, steelhead, lamprey southern flounder tadpole
                      fish bigeye.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0077B5"
                        >
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.25V1.74C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.53a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.14 12.94h-3.56V14.7c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.22 1.5-2.22 3.04v5.88H9.22V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.23z" />
                        </svg>
                      </a>
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Sophie Denmo
                    </p>
                    <p className="mb-4 text-xs text-gray-100">Designer</p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Veggies sunt bona vobis, proinde vos postulo esse magis
                      grape pea.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0077B5"
                        >
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.25V1.74C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.53a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.14 12.94h-3.56V14.7c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.22 1.5-2.22 3.04v5.88H9.22V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.23z" />
                        </svg>
                      </a>
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Benedict Caro
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Frontend Developer
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      I love cheese, especially airedale queso. Cheese and
                      biscuits halloumi.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0077B5"
                        >
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.25V1.74C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.53a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.14 12.94h-3.56V14.7c0-1.37-.02-3.14-1.91-3.14-1.92 0-2.22 1.5-2.22 3.04v5.88H9.22V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.23z" />
                        </svg>
                      </a>
                      <a
                        href="/https://www.linkedin.com/in/md-sana-ullah12/"
                        className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5"
                        >
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
