import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/Banner1.jpg'
import banner2 from '../../../assets/Banner2.jpg'
import banner3 from '../../../assets/Banner3.jpg'
import banner4 from '../../../assets/Banner4.jpg'
import banner5 from '../../../assets/Banner5.jpg'

const Banner = () => {
    return (
        <div>
             <Carousel interval>
                <div>
                    <img src={banner1} className="h-3/6"/>
                </div>
                <div>
                    <img src={banner2} className=" h-3/6"/>
                </div>
                <div>
                    <img src={banner3} className=" h-3/6"/>
                </div>
                <div>
                    <img src={banner4} className=" h-3/6"/>
                </div>
                <div>
                    <img src={banner5} className=" h-3/6"/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;