import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="my-4">
        <div className="max-w-screen-lg mx-auto">
        <video className="w-full h-[450px]" src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/404-error-3575862-2992469.mp4" autoPlay="muted" loop="loop" playsInline type="video/mp4"></video>
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