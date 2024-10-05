import React from "react";
import DoctorTransparent from "../assets/Doctor-transparent.png";
import "../Styles/Aboutus.css";
import { Link } from "react-router-dom";

const Aboutus2 = () => {
  return (
    <div>

      <head>

      </head>
      <div className="grid mb-10 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4 md:px-0 mt-[9rem] md:mt-[6rem] lg:mt-[7rem]">
        {/* Left column */}
        <div className="flex flex-col justify-center items-center md:items-start -mt-6  lg:mt-10 lg:mb-5">
          <img src={DoctorTransparent} alt="About us" className="mx-auto md:ml-0" />
          <h1 className="font-color text-3xl font-bold text-center md:text-left mt-5 md:mt-4 md:ml-14 lg:ml-5">
            Dr. D.S Dubey (Chiropractor)
          </h1>
        </div>

        {/* Right column */}
        <div className="font-semibold tracking-wide mt-10">
          <h1 className="heading mt-10 text-center md:text-left">
            About Us <span>&mdash;</span>
          </h1>

          <div>
            <div>
              <p className="leading-9 text-xl mt-5 font-medium text-center md:text-left">
                Dr. D S Dubey is a well-known chiropractor in Mumbai, highly
                praised for treating chronic pain like back pain, sciatica, and
                frozen shoulder. With many years of experience, he helps patients
                avoid surgery and find relief through chiropractic adjustments,
                exercises, and lifestyle advice. Patients often feel better after
                just a few sessions, making his treatments both effective and
                affordable.
              </p>
            </div>
            <div className="flex justify-center md:justify-start mb-[18rem]">
              <Link to="/book-appointment" smooth={true} duration={500}>
                <button className="bg-orange-600 hover:bg-orange-800 font-semibold text-lg mt-5 hover:shadow-md transition h-14 sm:h-8 px-3 sm:px-4 hover:bg-red md:h-14 md:px-6 tracking-wide text-white sm:text-xs md:text-base lg:text-xl rounded-3xl">
                  Book an Appointment<i className="fas fa-location-arrow p-2 "></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus2;

