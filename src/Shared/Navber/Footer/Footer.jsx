import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>
      <div className="relative pt-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <ScrollToTop
          height="100"
          style={{ backgroundColor: "#E21B70" }}
          className="text-center flex justify-center items-center mx-auto"
          top={800}
          smooth
        />

        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <span className=" text-xl font-bold tracking-wide uppercase">
                  <h1>Food Picky</h1>
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm">
                  Discover the latest budget smartphones to high-configuration
                  mobile phones. Check below and order yours now!
                </p>
                <p className="mt-4 text-sm">
                  We believe in the joy and enrichment pets bring to our lives.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              {["Category", "Cherry", "Apples", "Business"].map(
                (header, index) => (
                  <div key={index}>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                      {header}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {[
                        "News",
                        "World",
                        "Games",
                        "References",
                        "Web",
                        "eCommerce",
                        "Business",
                        "Entertainment",
                        "Media",
                        "Brochure",
                        "Infopreneur",
                        "Personal",
                      ]
                        .slice(index * 3, index * 3 + 3)
                        .map((item, i) => (
                          <li key={i}>
                            <a
                              href="/"
                              className="transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
            <p className="text-sm">
              © {new Date().getFullYear()} Food Picky. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/md-sana-ullah12/"
                className="transition-colors duration-300 hover:text-teal-accent-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/MdSanaulla75762"
                className="transition-colors duration-300 hover:text-teal-accent-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://web.facebook.com/roton.chodiry"
                className="transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
