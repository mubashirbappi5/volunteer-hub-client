import React from 'react';
import 'flowbite';
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
          
          <div className="carousel   ">
  <div id="slide1" className="carousel-item relative w-full h-96">
    <img
      src="https://i.ibb.co.com/FxD49sp/volunteers-with-gloves-medical-masks-preparing-box-donation.jpg"
      className="w-full h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full h-96">
    <img
      src="https://i.ibb.co.com/Qd5rysY/Peach-Red-Minimalist-Volunteers-Needed-Facebook-Post.png"
      className="w-full h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full h-96">
    <img
      src="https://i.ibb.co.com/4KM4G5c/Yellow-and-Brown-People-Illustrative-Volunteers-Needed-Magnet.png"
      className="w-full h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full h-96">
    <img
      src="https://i.ibb.co.com/R6wxHxg/26112752-7163342.jpg"
      className="w-full h-96"  />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;