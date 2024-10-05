import React, { useState } from "react";
import { MdCall, MdMenu } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/Navbar.css";

import "../Styles/Services.css";
import "../Styles/Aboutus.css";
import DoctorTransparent from "../assets/Doctor-transparent.png";
import HotCupping from "../assets/Alternative-Therapy/Hot-Cupping.jpg";
import VaccumeCupping from "../assets/Alternative-Therapy/Vacuum-Cupping.jpg";
import BloodCupping from "../assets/Alternative-Therapy/Blood-Cupping.jpg";
import LeechTherapy from "../assets/Alternative-Therapy/Leech-Therapy.webp";
import Acupressure from "../assets/Alternative-Therapy/Acupressure.jpg";
import Acupuncture from "../assets/Alternative-Therapy/Acupuncture.webp";
import Ayurvedicneurotherapy from "../assets/Alternative-Therapy/Ayurvedic-Neurotherapy.jpg";

const AlternativeTherapy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="container mb-32 mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center font-semibold text-xl mt-10 md:mt-20 pt-24">
          <h1 className="heading tracking-wide">
            Alternative Therapy <span>&mdash;</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4 md:px-0 mt-10">
          {/* Left column */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <img
              src={DoctorTransparent}
              alt="About us"
              className="mx-auto md:ml-0"
            />
          </div>

          {/* Right column */}
          <div className="font-semibold tracking-wide mt-10">
            <div>
              <div>
                <p className="leading-9 text-xl mt-5 font-medium text-center md:text-left">
                  <h3 className="text-2xl sm:text-2xl font-bold mb-5 mt-5 sm:mt-10 md:-mt-10">
                    Explore holistic healing options at Dr. D S Dubey's clinic
                    with our alternative therapy services. Our approach focuses
                    on natural methods to promote overall well-being and support
                    your body's innate healing abilities.
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed mb-5">
                    Benefits of our alternative therapy sessions include:
                  </p>
                  <ul className="list-disc list-inside mb-5">
                    <li className="text-base sm:text-lg leading-relaxed">
                      Natural Healing: Discover gentle techniques that work with
                      your body's own healing processes.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                      Stress Reduction: Find relief from stress and anxiety with
                      holistic relaxation methods.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                      Mind-Body Connection: Nurture balance and harmony between
                      your physical and mental well-being.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                      Personalized Care: Receive individualized treatment plans
                      tailored to your unique needs and preferences.
                    </li>
                  </ul>
                  <p className="text-base sm:text-lg leading-relaxed mb-5">
                    Experience the power of alternative therapy to enhance your
                    health and vitality. Schedule an appointment today to begin
                    your journey towards holistic wellness.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-10 w-full mb-14 ">
          <div className="flex justify-center font-semibold tracking-wide -mt-20">
            <h1 className="heading mt-10 md:mt-14 md:mb-5">
              {" "}
              Services under{" "}
              <span className="text-orange-600">Alternative Therapy</span>
            </h1>
          </div>
          <div className="flex flex-wrap  justify-center mt-5">
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={HotCupping}
                  alt="Hot Cupping"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Hot Cupping
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/hot-cupping">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={VaccumeCupping}
                  alt="Vacuum Cupping"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Vacuum Cupping
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/vacuum-cupping">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={BloodCupping}
                  alt="Blood cupping (Hijama)"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Blood Cupping (Hijama)
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/blood-cupping">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Acupressure}
                  alt="Acupressure"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Acupressure
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/acupressure">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap  justify-center mt-5">
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Acupuncture}
                  alt="Acupuncture"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Acupuncture
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/acupuncture">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={LeechTherapy}
                  alt="Leech therapy"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Leech therapy
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/leech-therapy">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Ayurvedicneurotherapy}
                  alt="Ayurvedic neuro therapy"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Ayurvedic neuro therapy
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/ayurvedic-neuro-therapy">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default AlternativeTherapy;
