import mobile from '../assets/mobile.png'
import QR from "../assets/QR.png"
import Social from "../assets/social.png"

const MobileApp = () => {
  return (
    <div className="bg-[#E21B70] mt-">
      <div className="flex justify-between max-w-screen-xl h-80 mx-auto ">
        <div className='w-1/2 py-10 text-white'>
            <h3 className='text-3xl'>Download the food and groceries you love</h3>
           <div className='flex justify-center items-center mt-8'>
            <img className='w-24 mr-5 ' src={QR} alt="" />
           <p>It{`'`}s all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
           </div>
           <div>
           <a href="https://www.linkedin.com/in/md-sana-ullah12/" target='_blank'> <img className='mt-4' src={Social} alt="" /></a>
           </div>
        </div>
        <div className='relative w-1/2 '>
            <img className='absolute -bottom-12 w-[600px]' src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
