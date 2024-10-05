import React from "react";
import "../Styles/GalleryCSS.css";
import image9 from "../assets/gallary-21.jpg";
import image11 from "../assets/image23.jpg";
import image12 from "../assets/gallary24.jpg";
import image13 from "../assets/gallary25.jpg";
import image14 from "../assets/SJA Care Center.jpg";
import image15 from "../assets/No medicines.jpg";
import image16 from "../assets/No injections.jpg";
import image17 from "../assets/Author.jpg";
import img1 from '../assets/img1.jpg'

const Gallery2 = () => {
  return (
      <div className="mt-10 md:mt-20 mb-[7rem] lg:mb-[7rem] xl:mb-[9rem]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center font-semibold text-xl mt-10 pt-24">
            <h1 className="heading tracking-wide">
              Gallery <span>&mdash;&mdash;</span>
            </h1>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 flex-wrap sm:flex justify-center  mt-10 mb-24 w-full ">
          <img
            src={image9}
            className="w-full md:w-[18rem] md:h-[18rem]  rounded-lg border border-black lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 9"
          />
          <img
            src={img1}
            className="w-full md:w-[18rem] rounded-lg border border-black md:h-[18rem] lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 10"
          />
          <img
            src={image11}
            className="w-full md:w-[18rem] rounded-lg border border-black md:h-[18rem] lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 11"
          />
          <img
            src={image12}
            className="w-full md:w-[18rem] rounded-lg border border-black md:h-[18rem] lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 12"
          />
          <img
            src={image13}
            className="w-full md:w-[18rem] rounded-lg border border-black md:h-[18rem] lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 13"
          />
          <img
            src={image14}
            className="w-full md:w-[18rem] rounded-lg border border-black md:h-[18rem] lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 14"
          />
          <img
            src={image15}
            className="w-full md:w-[18rem] rounded-lg border border-black md:h-[18rem] lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 15"
          />
          <img
            src={image16}
            className="w-full md:w-[18rem] rounded-lg border border-black md:h-[18rem] lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 16"
          />
          <img
            src={image17}
            className="w-full md:w-[18rem] rounded-lg border border-black md:h-[18rem] lg:w-[18rem] lg:h-[20rem] xl:w-[22rem] 2xl:w-[24rem] m-1"
            alt="image 17"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
