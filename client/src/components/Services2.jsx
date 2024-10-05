import React from "react";
import "../Styles/Services.css";
import Chiropractor from "../assets/Chiropractor.jpg";
import MassageTherapy from "../assets/Alternative-Therapy/Massage Threapy .jpg";
import Cupping from "../assets/Cupping.avif";
import Arthrities from "../assets/Alternative-Therapy/Arthritis.png";
import Chiropractic from "../assets/Chiropractic.jpeg";
import Thai from "../assets/Thai.jpeg";
import Meridian from "../assets/Meridian.webp";
import { Link } from "react-router-dom";
import LeachTherepy from "../assets/Alternative-Therapy/leech threapy.png";
import bloodcupping from "../assets/Alternative-Therapy/Blood Cupping.jpg";
import AltetnateTherapy from '../assets/Alternative-Therapy/Hot-Cupping.jpg'
import sciatic from '../assets/Chiropractic-Treatment/sciatic.jpg'

const Services2 = () => {
  return (
    <div>

      <head>

      </head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[5rem] md:mt-[8rem] ">
        <div className="text-center font-semibold text-[23px] md:text-4xl mt-2 pt-12">
          <h1 className="service text-center font-sans">
            Services <span>&mdash;&mdash;</span>
          </h1>
        </div>

        {/* The Best Quality Services You will Get */}
        <div className="text-center font-semibold tracking-wide mt-6">
          <h1 className="heading">
            Unmatched Quality and Services <br />
            <span className="flex justify-center tracking-wide">Awaits You</span>
          </h1>
        </div>

        {/* <div className="flex flex-wrap justify-center items-center mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="h-96 w-80 card border-black m-8 ">
              <div className="flex justify-center">
                <img
                  src={Chiropractor}
                  alt="Chiropractor"
                  className="image-service p-2"
                />
              </div>
              <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Chiropractic Treatment
              </h1>

              <p className="text-lg font-normal flex justify-center m-3 p-2  text-center leading-none tracking-wide">
                Adjusts the spine to relieve pain and improve function
              </p>

              <div className="flex justify-center mt-8">
                <Link
                  to="/services/chiropractic-treatment"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  <button className="button-home bg-orange-600 hover:bg-orange-800 w-72 font-semibold tracking-wide text-lg ">
                    Know More
                  </button>{" "}
                </Link>
              </div>
            </div>

            <div className="h-96 w-80 card flex flex-col justify-end items-center border-black m-8 ">
              <div className="flex justify-center">
                <img
                  src={MassageTherapy}
                  alt="Massage Therapy"
                  className="image-service p-2 "
                />
              </div>
              <div className="">
                <h1 className="font-semibold flex md:-mt-2 justify-center text-2xl tracking-wide">
                  Massage Therapy
                </h1>
                <p className="text-lg font-normal  flex justify-center m-3 p-2  text-center leading-none tracking-wide">
                  Perfect for those seeking physical and mental peace
                </p>
              </div>

              <div className="flex justify-center md:mt-8 ">
                <Link
                  to="/services/massage-therapy"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  <button className="button-home hover:bg-orange-800 w-72 font-semibold tracking-wide text-lg mb-2 ">
                    Know More
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="h-96 w-80 md:w-[21rem] card border-black m-8 ">
            <div className="flex justify-center">
              <img
                src={AltetnateTherapy}
                alt="Ayurvedic Medicine"
                className="image-service p-2"
              />
            </div>

            <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
              Alternative Therapy
            </h1>

            <p className="text-lg font-normal flex justify-center items-center m-3 p-2  text-center leading-none tracking-wide">
              Offers natural approach to health and emotional well-being
            </p>

            <div className="flex justify-center mt-8">
              <Link to="/services/alternative-therapy" smooth={true} duration={500}>
                {" "}
                <button className="hover:bg-orange-800 button-home w-72 font-semibold tracking-wide text-lg ">
                  Know More
                </button>{" "}
              </Link>
            </div>
          </div>
        </div> */}

        {/* Chiropractic Treatment */}
        <div
          className="flex flex-wrap justify-center -mt-[5rem]"
          id="chiropractic-treatment"
        >
          <div className="flex justify-center font-semibold tracking-wide mt-20">
            <h1 className="heading mt-10"> Chiropractic Treatment</h1>
          </div>
          <div className="flex flex-wrap  justify-center mt-5">
            <div className="grid md:grid-cols-2">
              <div className="h-96 w-80 card border-black m-8">
                <div className="flex justify-center">
                  <img
                    src={Arthrities}
                    alt="Arthrities"
                    className="image-square w-80 h-72 p-2"
                  />
                </div>
                <div>
                  <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                    Arthrities
                  </h1>
                </div>

                <div className="flex justify-center">
                  <Link to="/services/chiropractic-treatment/arthritis">
                    <button className="button-home w-72 font-semibold tracking-wide hover:bg-orange-800 text-lg mt-2">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="card h-96 w-80 border-black m-8">
                <div className="flex justify-center">
                  <img
                    src={sciatic}
                    alt="Headache"
                    className="image-square w-80 h-72 p-2"
                  />
                </div>
                <div>
                  <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                    Sciatica Pain
                  </h1>
                </div>
                <div className="flex justify-center ">
                  <Link to="/services/chiropractic-treatment/sciatica">
                    <button className="button-home w-72 font-semibold hover:bg-orange-800 tracking-wide text-lg mt-2">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card h-96 w-80 border-black m-8">
              <div className="flex justify-center">
                <img
                  src={Chiropractic}
                  alt="Chiropractic"
                  className="image-square w-80 h-72 p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                  Back Pain
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/back-pain">
                  <button className="button-home w-72 font-semibold hover:bg-orange-800 tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="viewall-hr">
          <div className="viewall-hr-position">
            <Link to="/services/chiropractic-treatment">
              <button className="viewall-button text-2xl hover:bg-orange-800 tracking-wide font-semibold text-white">
                View All
              </button>
            </Link>
          </div>
          <hr className="hr" />
        </div>

        {/* Massage Therapy */}
        {/* <div
          className="flex justify-center -mt-[2rem] font-semibold tracking-wide"
          id="message-therapy"
        >
          <h1 className="heading mt-10">
            {" "}
            <div className="mt-10">
              <div className="flex flex-wrap justify-center font-semibold tracking-wide mt-0">
                <h1 className="heading mt-10"> Massage Therapy</h1>
              </div>
              <div className="flex flex-wrap justify-center mt-5">
                <div className="grid md:grid-cols-2">
                  <div className="card h-96 w-80 border-black m-8">
                    <div className="flex justify-center">
                      <img
                        src={Cupping}
                        alt="Cupping"
                        className="image-square w-80 h-72 p-2"
                      />
                    </div>
                    <div>
                      <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                        Cupping Massage
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <Link to="/services/massage-therapy/cupping-massage">
                        <button className="button-home w-72 hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="h-96 w-80 card border-black m-8">
                    <div className="flex justify-center">
                      <img
                        src={Thai}
                        alt="Thai"
                        className="image-square w-80 h-72 p-2"
                      />
                    </div>
                    <div>
                      <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                        Thai Massage
                      </h1>
                    </div>

                    <div className="flex justify-center">
                      <Link to="/services/massage-therapy/thai-massage">
                        <button className="button-home w-72 hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="h-96 w-80 card border-black m-8">
                  <div className="flex justify-center">
                    <img
                      src={Meridian}
                      alt="Meridian"
                      className="image-square w-80 h-72 p-2"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                      Panchakarma Massage
                    </h1>
                  </div>

                  <div className="flex justify-center">
                    <Link to="/services/massage-therapy/panchakarma-massage">
                      <button className="button-home w-72 hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="viewall-hr">
          <div className="viewall-hr-position">
            <Link to="/services/massage-therapy">
              <button className="viewall-button text-2xl hover:bg-red-800 tracking-wide font-semibold text-white">
                View All
              </button>
            </Link>
          </div>
          <hr className="hr" />
        </div> */}

        {/* Alternative Therapy */}
        <div className="mt-10">
          <div
            className="flex flex-wrap justify-center font-semibold tracking-wide mt-20 "
            id="alternative-therapy"
          >
            <h1 className="heading"> Alternative Therapy</h1>
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            <div className="grid md:grid-cols-2">
              <div className="card h-96 w-80 border-black m-8">
                <div className="flex justify-center">
                  <img
                    src={LeachTherepy}
                    alt="Kidneystone"
                    className="image-square w-80 h-72 p-2"
                  />
                </div>
                <div>
                  <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                    Leech therapy
                  </h1>
                </div>
                <div className="flex justify-center">
                  <Link to="/services/alternative-therapy/leech-therapy">
                    <button className="button-home bg-orange-600 hover:bg-orange-800 w-72 font-semibold tracking-wide text-lg mt-2">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="card h-96 w-80 border-black m-8">
                <div className="flex justify-center">
                  <img
                    src={bloodcupping}
                    alt="blood cupping"
                    className="image-square  w-80 h-72 p-2"
                  />
                </div>
                <div>
                  <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                    Blood cupping
                  </h1>
                </div>

                <div className="flex justify-center">
                  <Link to="/services/alternative-therapy/blood-cupping">
                    <button className="button-home hover:bg-red-800 w-72 font-semibold tracking-wide text-lg mt-2">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card h-96 w-80 border-black m-8">
              <div className="flex justify-center">
                <img
                  src={Arthrities}
                  alt="Arthrities"
                  className="image-square  w-80 h-72 p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide">
                  Acupuncture
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/acupuncture">
                  <button className="button-home hover:bg-red-800 w-72 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="viewall-hr mb-[10rem]">
          <div className="viewall-hr-position">
            <Link to="/services/alternative-therapy">
              <button className="viewall-button hover:bg-red-800 transition text-2xl tracking-wide font-semibold text-white">
                View All
              </button>
            </Link>
          </div>
          <hr className="hr" />
        </div>
      </div>
    </div>
  );
};

export default Services2;
