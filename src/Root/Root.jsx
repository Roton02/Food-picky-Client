
import {Outlet} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from '../Shared/Navber/Navbar';
import Footer from '../Shared/Navber/Footer/Footer';
import Header from '../Shared/Header/Header';
AOS.init();

const Root = () => {
    return (
            <div>
               <Header></Header>      
        <div className="my-2 overflow-x-hidden max-w-screen-xl px-3 mx-auto">
            <Navbar></Navbar>
            <div className='min-h-[420px] my-7'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
            </div>
    );
};

export default Root;