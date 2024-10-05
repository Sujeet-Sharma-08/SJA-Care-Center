import React from "react";
import "../Styles/Services.css";
import Chiropractor from "../assets/Chiropractor.jpg";
import MassageTherapy from "../assets/Alternative-Therapy/Massage Threapy .jpg";
import Cupping from "../assets/Cupping.avif";
import Arthrities from "../assets/Alternative-Therapy/Arthritis.png";
import Chiropractic from "../assets/Chiropractic.jpeg";
import Acupuncture from "../assets/Alternative-Therapy/Acupuncture.webp";
import Thai from "../assets/Thai.jpeg";
import PanchakarmaMassage from "../assets/Massage-Therapy/Panchakarma-Massage.jpg";
import { Link } from "react-router-dom";
import LeachTherepy from "../assets/Alternative-Therapy/leech threapy.png";
import bloodcupping from "../assets/Alternative-Therapy/Blood Cupping.jpg";
import AltetnateTherapy from "../assets/Alternative-Therapy/Hot-Cupping.jpg";
import sciatic from "../assets/Chiropractic-Treatment/sciatic.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Service.css'
const services = [
  {
    id: 1,
    heading: "Chiropractic Treatment",
    text: " Adjusts the spine to relieve pain and improve function",
    img: Chiropractor,
    path: "/services/chiropractic-treatment",
  },

  // {
  //   id: 2,
  //   heading: "Massage Therapy",
  //   text: "  Perfect for those seeking spine and nervous system health",
  //   img: MassageTherapy,
  //   path: "/services/massage-therapy",
  // },

  {
    id: 3,
    heading: " Alternative Therapy",
    text: "  Offers natural approach to health and emotional well-being",
    img: AltetnateTherapy,
    path: "/services/alternative-therapy",
  },
];

const chiropractics = [
  {
    id: 1,
    heading: "Arthritis",
    img: Arthrities,
    path: "/services/chiropractic-treatment/arthritis",
  },

  {
    id: 2,
    heading: "Sciatica Pain",
    img: sciatic,
    path: "/services/chiropractic-treatment/sciatica",
  },

  {
    id: 3,
    heading: "Back Pain",
    img: Chiropractic,
    path: "/services/chiropractic-treatment/back-pain",
  },
];

// const massages = [
//   {
//     id: 1,
//     heading: "Panchakarma Massage",
//     img: PanchakarmaMassage,
//     path: "/services/massage-therapy/panchakarma-massage",
//   },

//   {
//     id: 2,
//     heading: "Thai Massage",
//     img: Thai,
//     path: "/services/massage-therapy/thai-massage",
//   },

//   {
//     id: 3,
//     heading: "Leach Therepy",
//     img: LeachTherepy,
//     path: "/services/massage-therapy/leech-therapy",
//   },
// ];


const alternates = [
  {
    id: 1,
    heading: "Cupping Therapy",
    img: Cupping,
    path: "/services/alternative-therapy/cupping-therapy",
  },

  {
    id: 2,
    heading: "Acupuncture Therapy",
    img: Acupuncture,
    path: "/services/alternative-therapy/acupuncture-therapy",
  },

  {
    id: 3,
    heading: "bloodcupping Therepy",
    img: bloodcupping,
    path: "/services/alternative-therapy/blood-cupping-therapy",
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[-8rem] md:mt-[5rem] lg:mt-[13rem] xl:mt-[25rem]">
      <div className="text-center font-semibold text-[23px] md:text-4xl mt-2 pt-12">
        <h1 className="service text-center font-sans">
          Treatments <span>&mdash;&mdash;</span>
        </h1>
      </div>

      <div className="text-center font-semibold tracking-wide mt-6 ">
        <h1 className="heading">
          Unmatched Quality and Treatments <br />
          <span className="flex justify-center tracking-wide">Awaits You</span>
        </h1>
      </div>
    {/* 
      <div className="flex justify-center ">
        <Slider
          className="w-10/12 flex justify-center items-center"
          {...settings}
        >
          {services.map((s) => {
            return (
              <div
                key={s.id}
                className="h-[23rem] xl:h-[24rem] w-40 border border-black rounded-3xl"
              >
                <div className="flex justify-center items-center w-full h-[195px] p-2">
                  <img
                    src={s.img}
                    className="w-full h-full rounded-t-3xl object-cover"
                    alt={s.heading}
                  />
                </div>
                <h1 className="font-semibold flex justify-center text-xl tracking-wide mt-1">
                  {s.heading}
                </h1>
                <div className="text-base sm:text-md xl:text-lg font-normal flex justify-center m-2 md:mt-3 sm:m-0 p-2 text-center leading-none tracking-wide">
                  {s.text}
                </div>

                <div className="flex justify-center   items-center m-2">
                  <Link
                    to={s.path}
                    className="bg-orange-600  text-white hover:bg-orange-800 w-72 font-semibold tracking-wide flex justify-center items-center text-lg py-3 rounded-full"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div> */}

      {/* Chiropractic Treatment */}
      <div className="-mt-10" id="chiropractic-treatment">
        <div className="flex justify-center font-semibold tracking-wide mt-20">
          <h1 className="heading mb-10"> Chiropractic Treatment</h1>
        </div>
        <div className="flex justify-center ">
          <Slider
            className="w-10/12 flex justify-center items-center"
            {...settings}
          >
            {chiropractics.map((chiro) => {
              return (
                <div
                  key={chiro.id}
                  className="h-80 w-48 md:w-56 lg:w-72 border border-black rounded-3xl"
                >
                  <div className="flex justify-center">
                    <img
                      src={chiro.img}
                      className="w-80 sm:w-96 h-56 p-2 rounded-3xl bg-cover"
                      alt={chiro.heading}
                    />
                  </div>
                  <h1 className="font-semibold mb-3 flex justify-center text-xl tracking-wide mt-1">
                    {chiro.heading}
                  </h1>

                  <div className="flex justify-center items-center -mt-2 m-2">
                    <Link
                      to={chiro.path}
                      className="bg-orange-600 text-white  hover:bg-orange-800 w-72 font-semibold tracking-wide flex justify-center items-center text-lg py-3 rounded-full"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="viewall-hr mt-[5rem] mb-10">
        <div className="viewall-hr-position">
          <Link to="/services/chiropractic-treatment">
            <button className="viewall-button text-2xl bg-orange-600 hover:bg-orange-800 tracking-wide font-semibold transition text-white">
              View All
            </button>
          </Link>
        </div>
        <hr className="hr" />
      </div>

      {/* Massage Therapy */}
      {/* <div className="flex justify-center mt-[-2rem] mb-10 font-semibold tracking-wide">
        <h1 className="heading mt-14 ">Massage Therapy</h1>
      </div> */}
      {/* <div className="flex justify-center ">
        <Slider
          className="w-10/12 flex justify-center items-center"
          {...settings}
        >
          {massages.map((massage) => {
            return (
              <div
                key={massage.id}
                className="h-96 w-40 sm:w-48 md:w-56 lg:w-72 border border-black rounded-3xl"
              >
                <div className="flex justify-center">
                  <img
                    src={massage.img}
                    className="w-80 sm:w-96 h-72 p-2 rounded-3xl"
                    alt={massage.heading}
                  />
                </div>
                <h1 className="font-semibold mb-3 flex justify-center text-xl  tracking-wide mt-1">
                  {massage.heading}
                </h1>

                <div className="flex justify-center items-center -mt-2 m-2">
                  <Link
                    to={massage.path}
                    className="bg-orange-600 hover:bg-orange-800 w-72 font-semibold tracking-wide flex justify-center items-center text-lg py-3 rounded-full"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div> */}

      {/* <div className="viewall-hr mt-[5rem] mb-10">
        <div className="viewall-hr-position">
          <Link to="/services/massage-therapy">
            <button className="viewall-button text-2xl bg-orange-600 hover:bg-orange-800 tracking-wide font-semibold transition text-white">
              View All
            </button>
          </Link>
        </div>
        <hr className="hr" />
      </div> */}

      {/* Alternative Therapy */}
      <div className="flex justify-center mt-[-2rem] font-semibold tracking-wide">
        <h1 className="heading mt-14 mb-10">Alternative Therapy</h1>
      </div>
      <div className="flex justify-center ">
        <Slider
          className="w-10/12 flex justify-center items-center"
          {...settings}
        >
          {alternates.map((alter) => {
            return (
              <div
                key={alter.id}
                className="h-80 w-48 sm:w-48 md:w-56 lg:w-72 border border-black rounded-2xl"
              >
                <div className="flex justify-center">
                  <img
                    src={alter.img}
                    className="w-80 sm:w-96 h-56 p-2  rounded-t-2xl"
                    alt={alter.heading}
                  />
                </div>
                <h1 className="font-semibold mb-3 flex justify-center text-xl tracking-wide mt-1">
                  {alter.heading}
                </h1>

                <div className="flex justify-center items-center -mt-2 m-2">
                  <Link
                    to={alter.path}
                    className="bg-orange-600 hover:bg-orange-800 w-72 font-semibold tracking-wide flex justify-center items-center text-lg py-3 rounded-full"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="viewall-hr mt-[5rem] mb-10">
        <div className="viewall-hr-position">
          <Link to="/services/alternative-therapy">
            <button className="viewall-button text-2xl bg-orange-600 hover:bg-orange-800 tracking-wide font-semibold transition text-white">
              View All
            </button>
          </Link>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default Services;
