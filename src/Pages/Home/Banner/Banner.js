import React from 'react';
import img1 from "../../../assets/slider-images/shoe.jpg"
import img2 from "../../../assets/slider-images/watchs.webp"
import img3 from "../../../assets/slider-images/phone.jpg"
import img4 from "../../../assets/banner4.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full h-[350px] md:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img2} className="w-full" alt='' />
    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img  src={img1} className="w-full" alt='' />
    <div className="absolute flex transform -translate-y-1/2 justify-between left-5 right-5 top-1/2  ">
      <a href="#slide1" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img  alt='' src={img3} className="w-full " />
    <div className="absolute justify-between  left-5 right-5 top-1/2 flex transform -translate-y-1/2  ">
      <a href="#slide2" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
    );
};

export default Banner;