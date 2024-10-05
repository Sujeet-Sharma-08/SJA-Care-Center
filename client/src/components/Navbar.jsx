import React, { useState } from "react";
import { MdCall, MdMenu } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import logo from "../assets/logo.png";
import '../Styles/Navbar.css'
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-3 h-20 fixed z-20 bg-white w-full top-0 md:mb-6">
        <div className="flex-row gap-1 items-center text-md mt-1 md:mb-0">
          <div className="flex flex-col md:flex-col lg:flex-row">
            <div className="flex container flex-wrap justify-center gap-[5px] md:gap-4 lg:gap-[1px]">
              <h3 className="sm:hidden appointment sm:text-[13px] lg:-mt-[2px] font-bold text-[9px] lg:text-[13px] xl:text-lg lg:block text-orange-600 cursor-pointer">
                For Appointment:
              </h3>

              <a
                href="tel:+919967521331"
                className="flex contact1 items-center lg:-mt-1 font-semibold "
              >
                <MdCall className="text-[8px] sm:text-[13px] lg:text-2xl" />
                <div className="text-black text-[8px]  sm:text-[13px] lg:text-[13px] xl:text-lg lg:mr-5 ">
                  +91-9967521331
                </div>
              </a>

            <div className="hidden lg:block ">
              <a
                href="tel:+919136631331"
                className="flex contact1 items-center lg:-mt-1 font-semibold "
              >
                <MdCall className="text-[7.5px] sm:text-[13px] lg:text-2xl" />
                <div className="text-black  text-[7.5px]  sm:text-[13px] lg:text-[13px] xl:text-lg  lg:mr-5 ">
                +91-9136631331
                </div>
              </a>
              </div>

              <a
                href="mailto:spinejoint.arthritiscare@gmail.com"
                className="flex email items-center gap-[2px] lg:-mt-1 lg:gap-1"
              >
                <IoMdMail className="md:text-2xl lg:text-2xl text-[7.5px] sm:text-[13px]" />
                <div className="md:mr-5 lg:-mt-1 text-[8.4px]  font-semibold sm:text-[13px] lg:text-[13px] xl:text-lg ">
                  spinejoint.arthritiscare@gmail.com
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* socail icons */}
        <div className="hidden sm:flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-2  md:mb-0">
            <a
              href="https://www.google.com/maps?q=Bhayandar(E),+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 flex gap-1 md:text-[13px] lg:text-[13px] xl:text-lg sm:text-[10px]  cursor-pointer"
            >
              <IoLocation className="mt-1 lg:text-2xl" />
              <div className=""> Bhayandar(E), Mumbai(MH)</div>
            </a>
          </div>

          <div className="flex items-center">
            <a
              href="https://www.youtube.com/@drdsdubey3069"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-red-700 hover:text-red-700"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/spine_joints_arthritis_care"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-purple-600 hover:text-purple-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-blue-600 hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* navbar */}

      <div className=" md:mt-8 lg:mt-8 rounded-full flex flex-col md:flex-row justify-between z-20 bg-[#eee9e9] shadow-xl items-center fixed w-full top-10">
        <div className="flex items-center -ml-[12rem] sm:-ml-[1rem] mt-2 md:mt-4 mb-2">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo"
              className="logo md:-mt-2 ml-12 h-8 md:h-16 lg:h-16 sm:h-12 rounded-3xl cursor-pointer"
            />
          </Link>

          <Link to={"/"}>
            <h1 className="md:text-base md:-mt-3 lg:text-lg sm:text-sm text-sm font-bold ml-2 tracking-wide cursor-pointer">
              SJA CARE CENTER
            </h1>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center md:hidden ml-[16rem] ">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <RxCross2 className="text-2xl -mt-9  flex justify-end" />
              ) : (
                <MdMenu className="text-2xl -mt-9  flex justify-end" />
              )}
            </button>
          </div>

          {/* hamburger icon */}
          <div className="hidden md:block">
            <ul className="flex flex-col md:-mt-1 md:flex-row gap-1 lg:gap-8 items-center cursor-pointer">
              <li className="font-semibold hover:text-orange-700 text-sm md:[15px] lg:text-lg p-0 md:p-2">
                <Link to="/" smooth={true} duration={500}>
                  HOME
                </Link>
              </li>
              <li className="font-semibold text-sm hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
                <Link to="/services" smooth={true} duration={500}>
                  SERVICES
                </Link>
              </li>
              <li className="font-semibold text-sm hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
                <Link to={"/aboutus"} smooth={true} duration={500}>
                  ABOUT US
                </Link>
              </li>
              <li className="font-semibold  text-sm hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
                <Link to="/gallery" smooth={true} duration={500}>
                  GALLERY
                </Link>
              </li>

              <li className="font-semibold md:p-2">
                <Link to="/contactus" smooth={true} duration={500}>
                  <button className="contact-button h-8 bg-orange-600 hover:shadow-md hover:bg-orange-800 transition sm:h-6 px-3 sm:px-4 hover:bg-red md:h-12 md:px-6 font-semibold tracking-wide text-white text-xs sm:text-xs md:text-base lg:text-lg rounded-3xl">
                    CONTACT US
                    <i className="fas fa-location-arrow ml-2"></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div onClick={toggleMenu} className={`fixed inset-0 w-full md:hidden bg-black h-[100vh] trnasform transition-all duration-300 ease-in-out z-20 ${ isOpen ? " " :"translate-x-0"}`}>
        <div className="flex justify-between items-center mt-8 mb-2">
          <p className="text-white text-sm px-5">Menu</p>
          {isOpen ? (
                <RxCross2  onClick={toggleMenu}  className="text-white text-3xl flex mr-[1rem]" />) : (<></>)}
        </div>
        <div className="h-[2px] w-full bg-white"></div>
          <ul className="flex inset-0 flex-col gap-5 cursor-pointer">
            <li className="font-semibold px-5 mt-3 text-white hover:text-orange-700 text-xl md:[15px] lg:text-lg p-0 md:p-2">
              <Link to="/" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
           <div className="h-[2px] w-full bg-white"></div>
            <li className="font-semibold px-5 text-white text-xl hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
              <Link to="/services" smooth={true} duration={500}>
                SERVICES
              </Link>
            </li>
            <div className="h-[2px] w-full bg-white"></div>
            <li className="font-semibold px-5 text-white text-xl hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
              <Link to={"/aboutus"} smooth={true} duration={500}>
                ABOUT US
              </Link>
            </li>
            <div className="h-[2px] w-full bg-white"></div>
            <li className="font-semibold px-5 text-white text-xl hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
              <Link to="/gallery" smooth={true} duration={500}>
                GALLERY
              </Link>
            </li>

            <div className="h-[2px] w-full bg-white"></div>
            <li className="font-semibold ">
              <Link to="/book-appointment" className="text-2xl px-5 text-white" smooth={true} duration={500}>
                Book An Appointment
              </Link>
            </li>
            <div className="h-[2px] w-full bg-white"></div>

            {/* social icons */}
            <div className="flex items-center justify-center">
            <a
              href="https://www.youtube.com/@drdsdubey3069"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-white hover:text-red-700"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/spine_joints_arthritis_care"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-white  hover:text-purple-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-white hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
