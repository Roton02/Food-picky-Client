import { Link } from "react-router-dom";

import lottie from '../../assets/lottie'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className="my-4">
        <div className=" h-96 w-96 mx-auto">
        <Lottie animationData={lottie} />
        </div>
       <div className="container flex flex-col items-center justify-center px-5 mx-auto">
           <div className="max-w-md text-center">
               <p className="text-sm my-5 font-anton ">Sorry, we could not find this page.</p>
               <Link to='/' >
                <button className="btn bg-[#1e847f] hover:text-black text-white font-anton ">Back to home</button>
               </Link>
           </div>
       </div>
      </div>

    );
};

export default ErrorPage;