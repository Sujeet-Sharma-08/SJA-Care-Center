import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { FaHospital, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeError, setSubscribeError] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://www.api.sjacarecenter.com/subscribe", {
        email,
      });
      setSubscribeSuccess("Email subscribed successfully!");
      setSubscribeError("");
      setEmail("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setSubscribeError(error.response.data.error);
      } else {
        setSubscribeError("Something went wrong. Please try again later.");
      }
      setSubscribeSuccess("");
    }
  };

  useEffect(() => {
    if (subscribeSuccess || subscribeError) {
      const timer = setTimeout(() => {
        setSubscribeSuccess("");
        setSubscribeError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [subscribeSuccess, subscribeError]);

  return (
    <div className="w-full bg-black -mt-20 xl:-mt-28 ">

    <div className="lg:hidden p-4 md:p-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="flex lg:flex-col justify-center items-center gap-1 sm:gap-20">
          <img src={logo} className="w-14 md:w-20 rounded-full md:-ml-[2rem]" alt="Logo" />
          <div className="flex flex-col mt-3 lg:-mt-[2rem] ">
            <h1 className="text-white font-bold text-sm lg:ml-5 -mb-5 lg:mt-5 md:text-xl">
              Newsletter
            </h1>

            <div className="flex lg:flex-col -mr-5 gap-2">
              <MdOutlineMail className="text-white text-xl mt-7" />
              <form
                onSubmit={handleSubscribe}
                className="flex lg:flex-col ml-2 lg:-mt-[2.5rem] gap-3 sm:gap-10 py-2 items-center mt-2"
              >
                <input
                  type="email"
                  placeholder="abc@email.com"
                  value={email}
                  required
                  onChange={handleEmailChange}
                  className="text-white bg-transparent border-b-2 w-28 sm:w-40 focus:outline-none hover:outline-none "
                />
                <button
                  type="submit"
                  className="button-footer bg-orange-600 hover:shadow-md  hover:bg-orange-800 transition mr-4 sm:-ml-[1rem] sm:h-6 px-3 sm:px-4 hover:bg-red md:h-12 md:px-6 font-semibold  text-white text-xs sm:text-xs md:text-base lg:text-lg rounded-3xl"
                >
                  SUBSCRIBE
                </button>
              </form>
              {subscribeError && (
                <p className="text-orange-500 text-center mt-2">
                  {subscribeError}
                </p>
              )}
              {subscribeSuccess && (
                <p className="text-green-500 text-center mt-2">
                  {subscribeSuccess}
                </p>
              )}
            </div>
          </div>
        </div>


        <div className="flex justify-between  sm:p-5 sm:m-10">
          <ul className="mt-4 md:mt-0">
            <li className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-4">
              Quick Links
            </li>
            <Link to="/" smooth={true} duration={500}>
              <li className="text-md md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-orange-600">
                HOME
              </li>
            </Link>
            <Link to="/aboutus" smooth={true} duration={500}>
              <li className="text-md md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-orange-600">
                ABOUT US
              </li>
            </Link>
            <Link to="/gallery" smooth={true} duration={500}>
              <li className="text-md md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-orange-600">
                GALLERY
              </li>
            </Link>
            <Link to="/contactus" smooth={true} duration={500}>
              <li className="text-md md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-orange-600">
                CONTACT US
              </li>
            </Link>
          </ul>

          <div className="  ">
            <div className="text-white flex flex-col text-base md:text-lg">
              <ul className="text-left mt-4 md:mt-0">
                <p className="text-xl md:text-2xl mb-2 ">Address</p>
                <li className="">Clinic No. 01,</li>
                <li className="w-40 sm:w-60 flex justify-start text-sm sm:text-lg">
                  Shree Trade Center , Mira Bhayandar Road Near Reliance Energy
                  Office (Bhayandar Phatak) Bhayander (East) Thane, Maharashtra
                  - 401105
                </li>
              </ul>
            </div>

            <div className="text-white -ml-[5rem] md:-ml-[6.7rem] flex flex-row p-2 md:p-5 justify-center ">
              <a
                href="https://www.youtube.com/@drdsdubey3069"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <FaYoutube className="text-xl md:text-3xl m-1 md:m-2" />
              </a>
              <a
                href="https://www.instagram.com/spine_joints_arthritis_care"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600"
              >
                <FaInstagram className="text-xl md:text-3xl m-1 md:m-2" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebook className="text-xl md:text-3xl m-1 md:m-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between ml-[3rem] m-2 mt-6 sm:p-5">
          <div className="-mt-[4rem] sm:-mt-[8rem] -ml-[2rem]">
            <p className="text-white text-xl md:text-2xl -ml-3 md:ml-[2rem] mb-1">Contact</p>
            <div className="flex flex-col -ml-5 md:ml-0 gap-[2px]">
              <div className="flex -ml-[19px] md:ml-1 text-white">
                <MdCall className="text-sm sm:text-xl ml-5 mt-[2px]" />
                <a className="text-xs sm:text-lg" href="tel: +91-9967521331">
                  +91-9967521331
                </a>
              </div>
              <a className="text-xs sm:text-lg text-white md:ml-6" href="tel:+91-9136631331">
                +91-9136631331
              </a>
            </div>
          </div>

          <div className="flex gap-2 -mt-9 sm:-mt-[6rem] md:mr-[4rem] flex-col ">
            <div className="flex w-40">
              <CgMail className="text-xl text-white" />
              <a
                href="mailto:spinejoint.arthritiscare@gmail.com"
                className="text-xs sm:text-lg text-white md:text-lg lg:text-[17px] xl:text-xl hover:underline"
              >
                spinejoint.arthritiscare@gmail.com
              </a>
            </div>

            <div className="flex text-white -mt-2 md:mb-5">
              <FaHospital className="mr-2 text-xs sm:text-lg mt-[2px]" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bhayandar(E),+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-lg hover:underline"
              >
                Bhayandar(E), Mumbai
              </a>
            </div>
          </div>
        </div>
    </div>

       <div className="hidden lg:block">
      <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex sm:flex-col items-center gap-5">
          <img src={logo} className="w-14 md:w-20 rounded-full" alt="Logo" />
          <div className="flex flex-col mt-3 sm:-mt-[2rem] ">
            <h1 className="text-white font-bold text-sm sm:ml-5 -mb-5 md:mt-5 md:text-2xl">
              Newsletter
            </h1>

            <div className="flex sm:flex-col -mr-5 gap-2 ">
              <MdOutlineMail className="text-white text-xl mt-7" />
              <form
                onSubmit={handleSubscribe}
                className="flex sm:flex-col ml-2 sm:-mt-[2.5rem] gap-3 py-2 items-center mt-2"
              >
                <input
                  type="email"
                  placeholder="abc@email.com"
                  value={email}
                  required
                  onChange={handleEmailChange}
                  className="text-white bg-transparent border-b-2 w-32 focus:outline-none hover:outline-none "
                />
                <button
                  type="submit"
                  className="button-footer bg-orange-600 hover:shadow-md  hover:bg-orange-800 transition sm:-ml-[1rem] sm:h-6 px-3 sm:px-4 hover:bg-red md:h-12 md:px-6 font-semibold tracking-wide text-white text-xs sm:text-xs md:text-base lg:text-lg rounded-3xl"
                >
                  SUBSCRIBE
                </button>
              </form>
              {subscribeError && (
                <p className="text-orange-500 text-center mt-2">
                  {subscribeError}
                </p>
              )}
              {subscribeSuccess && (
                <p className="text-green-500 text-center mt-2">
                  {subscribeSuccess}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
          <ul className=" mt-4 md:mt-0">
            <li className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-4">
              Quick Links
            </li>
            <Link to="/" smooth={true} duration={500}>
              <li className="text-base md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-orange-600">
                HOME
              </li>
            </Link>
            <Link to="/aboutus" smooth={true} duration={500}>
              <li className="text-base md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-orange-600">
                ABOUT US
              </li>
            </Link>
            <Link to="/gallery" smooth={true} duration={500}>
              <li className="text-base md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-orange-600">
                GALLERY
              </li>
            </Link>
            <Link to="/contactus" smooth={true} duration={500}>
              <li className="text-base md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-orange-600">
                CONTACT US
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
          <div className="text-white flex flex-col items-center md:items-start md:mr-4 text-base md:text-lg">
            <ul className="text-center md:text-left mt-4 md:mt-0">
              <p className="text-xl md:text-2xl mb-2 ">Address</p>
              <li>Clinic No. 01,</li>
              <li>
                Shree Trade Center , Mira Bhayandar Road Near Reliance Energy
                Office (Bhayandar Phatak) Bhayander (East) Thane, Maharashtra -
                401105
              </li>
              {/* <li>contact- 9967521331</li> */}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
          <div className="text-white flex flex-col items-center md:items-start md:w-1/2 mt-4 md:mt-0">
            <div className=" flex md:justify-start flex-col text-center md:text-left md:-ml-10 lg:-ml-24">
              <div className="flex items-center mb-2 md:mb-5">
                <CgMail className="mr-2 md:mr-3 text-xl md:text-3xl" />
                <a
                  href="mailto:spinejoint.arthritiscare@gmail.com"
                  className="text-base md:text-lg lg:text-[17px] xl:text-xl hover:underline"
                >
                  spinejoint.arthritiscare@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-2 md:mb-5">
                <MdCall className="mr-2 md:mr-3 text-xl md:text-3xl" />
                <a
                  href="tel:+919967521331"
                  className="text-base md:text-lg hover:underline"
                >
                  +91-9967521331
                </a>
              </div>
              <div className="flex items-center mb-2 md:mb-5">
                <FaHospital className="mr-2 md:mr-3 text-xl md:text-3xl" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bhayandar(E),+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg hover:underline"
                >
                  Bhayandar(E), Mumbai
                </a>
              </div>
            </div>

            <div className="text-white -ml-[7rem]  flex flex-row p-2 md:p-5 justify-center ">
              <a
                href="https://www.youtube.com/@drdsdubey3069"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <FaYoutube className="text-xl md:text-3xl m-1 md:m-2" />
              </a>
              <a
                href="https://www.instagram.com/spine_joints_arthritis_care"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600"
              >
                <FaInstagram className="text-xl md:text-3xl m-1 md:m-2" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebook className="text-xl md:text-3xl m-1 md:m-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* hr */}
      <div>
        <hr />
        <div className="text-sm sm:text-md flex flex-col md:flex-row bg-black items-center justify-center gap-1 sm:gap-3 ">
          <p className="text-white sm:mb-5 mt-2 ">
            <a href="http://www.sjacarecenter.com/">@SJA Care Center</a>. All
            Rights Reserved |
          </p>
          <p className="text-white mb-2 sm:mb-5 sm:mt-2">
            Designed by{" "}
            <a href="https://www.unarrow.com" target="_blank">
              <span className="text-orange-600">Unarrow Digital Solutions</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
