// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import './slide.css'


const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className='slide slide1'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide2'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide3'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide4'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide5'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide6'></div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;