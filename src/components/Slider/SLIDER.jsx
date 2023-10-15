// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Importing Images for the slider
import Slider_1 from "../../assets/Rover.jpg";
import Slider_2 from "../../assets/Rolls.jpg";
import Slider_3 from "../../assets/Mercedes.jpg";

const SLIDER = () => {
    return (
        <div>
            <Swiper spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,}}
                navigation={true} modules={[Navigation, Pagination, Autoplay]} pagination={true}  >


                <SwiperSlide> <img className='w-full h-[850px]' src={Slider_1} alt="Car" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-[850px]' src={Slider_2} alt="Car" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-[850px]' src={Slider_3} alt="Car" /> </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SLIDER