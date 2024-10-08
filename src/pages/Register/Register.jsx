import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { imageUpload } from "../../util";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const location = useLocation();
  console.log(location);
  const [error, setError] = useState(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { signUp, googleSignIn, UpdateUser, Logout } = useContext(AuthContext);
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    // e.target.reset();
    let image = e.target.elements.photo.files[0];
    try {
      const imgData = await imageUpload(image);
      // setImageURL(imgData);
      console.log(imgData);
      image = imgData;
    } catch (err) {
      console.log(err);
    }
    const name = e.target.name.value;
    const photoLink = image;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(typeof name, photoLink, email, password);
    setError(" ");
    if (
      name.length <= 0 ||
      photoLink.length <= 0 ||
      email.length <= 0 ||
      password.length <= 0
    ) {
      setError("Empty input not allowed");
      toast.warning("Empty input not allowed");
      return;
    }
    if (password.length < 6) {
      setError("Password should be 6 charecter");
      toast.warning("Password should be 6 character");
      return;
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(password)) {
      setError("Password must have at least one Uppercase Character.");
      toast.warning("Password must have at least one Uppercase Character");
      return;
    }
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(password)) {
      setError("Password must have at least one Lowercase Character.");
      toast.warning("Password must have at least one Lowercase Character");
      return;
    }
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('🥳Register Your Account', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        UpdateUser(name, photoLink)
          .then((result) => {
            console.log(result);
            const userInfo = {
              name: name,
              email: email,
              image: photoLink,
            };
            axios.post("http://localhost:5000/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database");
                e.target.reset();
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                Logout();
                navigate("/login");
              }
            });
          })
            
          })
          .catch((error) => {
            console.log(error.message);
          });
      
     
  };
  const handleSigninWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success('🥳Register Your Account', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
        toast.warning(error.message);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Register</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="flex items-center   w-full max-w-sm mx-auto overflow-hidden   lg:max-w-4xl">
        <div className="flex flex-col max-w-md mx-auto  mt-5 px-10 md:px-20 ">
          <div className=" text-center">
            <h1 className=" text-3xl  text-black font-bold">
              Register to new account
            </h1>
          </div>
          <div className="">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1"
              onClick={() => handleSigninWithGoogle()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="text-black font-bold">Register with Google</p>
            </button>
          </div>

          <form onSubmit={handleSubmitRegister} className="">
            <div className="">
              <div>
                <label htmlFor="name" className="block mb-2 text-black text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="w-full px-4 text-white bg-black py-2 border rounded-md dark:border-gray-300 "
                />
              </div>
              <div>
                <label className="text-black">Image</label>
                <input
                  required
                  id="username"
                  type="file"
                  name="photo"
                  className="block w-full border px-4 rounded-md py-1 bg-black text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-black mb-2 text-sm"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md bg-black text-white"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="text-black text-sm">
                  Password
                </label>
                <input
                  type={toggle ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md bg-black text-white "
                />
                <span
                  className="absolute top-10 right-4"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? (
                    <IoIosEye className="text-white" />
                  ) : (
                    <IoIosEyeOff className="text-white" />
                  )}
                </span>
              </div>
              {error && <p className="text-red-600">{error}</p>}
            </div>
            <div className="">
              <div>
                <button
                  type="submit"
                  className="w-full mt-2 px-8 py-2 font-semibold rounded-md bg-cyan-900  text-white"
                >
                  Register
                </button>
              </div>
              <p className="text-md text-black text-center my-1 mb-2">
                Already have account?
                <Link
                  to={"/login"}
                  rel="noopener noreferrer"
                  className="focus:underline hover:underline font-semibold"
                >
                  {" "}
                  Sign In here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;