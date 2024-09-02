import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../assets/01.jpg';
import img2 from '../assets/02.jpg';
import img3 from '../assets/03.png';
import img4 from '../assets/04.jpg';
import img5 from '../assets/05.png';
import img6 from '../assets/06.png';

const Banner = () => {
    return (
        <Carousel autoPlay='true'  useKeyboardArrows='true' stopOnHover='true' infiniteLoop='true'  dynamicHeight={500} className='text-center' >
            <div>
                <img src={img4} />
                <p className="legend rounded-none">Welcome to our Food Picky </p>
            </div>
            <div>
                <img src={img2} />
                <p className="legend rounded-none">Welcome to our Food Picky </p>
            </div>
            <div>
                <img src={img1} />
                <p className="legend">Welcome to our Food Picky </p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend">Welcome to our Food Picky </p>
            </div>
            <div>
                <img src={img5} />
                <p className="legend">Welcome to our Food Picky </p>
            </div>
            <div>
                <img src={img6} />
                <p className="legend">Welcome to our Food Picky </p>
            </div>
        </Carousel>
    );
};

export default Banner;