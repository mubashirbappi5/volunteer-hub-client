import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://i.ibb.co.com/f8PywD6/Yellow-and-Cream-Volunteer-Now-Facebook-Cover.png" className='h-96 w-full rounded-lg' alt="" /></SwiperSlide>
        <SwiperSlide> <img
      src="https://i.ibb.co.com/Qd5rysY/Peach-Red-Minimalist-Volunteers-Needed-Facebook-Post.png"
      className="w-full h-96 rounded-lg" /></SwiperSlide>
        <SwiperSlide><img
      src="https://i.ibb.co.com/4KM4G5c/Yellow-and-Brown-People-Illustrative-Volunteers-Needed-Magnet.png"
      className="w-full h-96 rounded-lg" /></SwiperSlide>
        
        <SwiperSlide>
        <img
      src="https://i.ibb.co.com/FxD49sp/volunteers-with-gloves-medical-masks-preparing-box-donation.jpg"
      className="w-full h-96 rounded-lg" />
        </SwiperSlide>
       
      </Swiper>
          
         
        </div>
    );
};

export default Banner;