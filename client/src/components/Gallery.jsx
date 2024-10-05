import React, { useRef, useEffect } from "react";
import image9 from '../assets/gallary-1.jpg';
import Gallary3 from '../assets/gallary-3.jpg';
import image13 from "../assets/gallary25.jpg";
import image14 from "../assets/SJA Care Center.jpg";
import image15 from "../assets/No medicines.jpg";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import "../Styles/Gallery.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const Gallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setTimeout(() => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }, 100);
    }
  }, []);

  return (
    <div className="relative -mt-20 md:-mt-[5.5rem]">
      <div className="flex justify-center">
        <h1 className="gallary mb-10 p-4 font-semibold text-2xl lg:text-4xl mt-10">
          Gallery <span>&mdash;</span>
        </h1>
      </div>

      <Swiper
        ref={swiperRef}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={true}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper w-full h-[20rem] md:h-[19.5rem] p-2 rounded-none"
      >
        <SwiperSlide>
          <img src={image9} alt="Gallery Image 1" className="w-full rounded-xl h-full bg-cover border border-black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gallary3} alt="Gallery Image 2" className="w-full rounded-xl h-full bg-cover border border-black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="Gallery Image 3" className="w-full rounded-xl h-full bg-cover border border-black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Gallery Image 4" className="w-full rounded-xl h-full bg-cover border border-black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image13} alt="Gallery Image 5" className="w-full rounded-xl h-full bg-cover border border-black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image14} alt="Gallery Image 6" className="w-full rounded-xl h-full bg-cover border border-black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image15} alt="Gallery Image 7" className="w-full rounded-xl h-full bg-cover border border-black" />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div ref={prevRef} className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 mt-5 cursor-pointer">
        <FaCircleArrowLeft size={40} className="text-white hover:text-orange-600" />
      </div>
      <div ref={nextRef} className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 mt-5 cursor-pointer">
        <FaCircleArrowRight size={40} className="text-white hover:text-orange-600" />
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/gallery">
          <button className="bg-orange-600 hover:shadow-md hover:bg-orange-800 transition h-10 sm:h-6 px-3 sm:px-4 md:h-12 md:px-8 font-semibold tracking-wide text-white text-xs sm:text-xs md:text-base lg:text-lg rounded-3xl">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
