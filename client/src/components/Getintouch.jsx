import React, { useState, useEffect } from "react";
import Circle from "../assets/Circle.png";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { FaHospital, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import axios from "axios";
import "../Styles/Getintouch.css";

const Getintouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission

    // Convert phone to number
    const dataToSend = {
      ...formData,
      phone: parseInt(formData.phone, 10),
    };

    try {
      const response = await axios.post(
        "https://api.sjacarecenter.com/save-email",
        dataToSend
      );
      if (response.status === 200) {
        setSuccess("Form submitted successfully!");
        setError("");
        setFormData({ name: "", phone: "", services: "" });
      } else {
        setError("Error submitting form. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
        console.log("Validation error:", error.response.data.error);
      } else {
        setError("Error submitting form. Please try again.");
        console.log("Catch error:", error);
      }
      setSuccess("");
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <div className="flex ml-2 mr-2 justify-center items-center overflow-hidden md:mt-12 lg:mt-14">
      <div className="card-getintouch w-full border-2 border-black rounded-xl ">
        {/* Contact Form */}
        <div className=" ">
          <h2 className="text-center m-5 font-bold text-2xl sm:text-3xl">
            Get In Touch <span>&mdash;&mdash;</span>
          </h2>
          <p className="flex items-center justify-center ml-2 text-sm md:text-xl -mt-3">
            Connect Without Worry - Your Information is Safe Here
          </p>

          <div className="flex flex-col-reverse md:justify-between md:flex-row mt-5">
            <form
              className="space-y-4 mt-5 sm:ml-[7rem]"
              onSubmit={handleSubmit}
            >
              {error && <p className="text-red-500 text-center mt-2">{error}</p>}
              {success && (
                <p className="text-green-500 text-center mt-4">{success}</p>
              )}

              <div className="flex justify-center items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-[16rem] md:w-[14rem] lg:w-[23rem] ml-2 p-4 rounded-3xl hover:border-red-600 border-2 border-black card-color focus:outline-none"
                  required
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-[16rem] md:w-[14rem] lg:w-[23rem] ml-2 p-4 rounded-3xl hover:border-red-600 border-2 border-black card-color focus:outline-none"
                  required
                />
              </div>
              <div className="flex justify-center">
                <input
                  name="services"
                  placeholder="Treatment"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-[16rem] md:w-[14rem] lg:w-[23rem] ml-2 h-30 p-4 rounded-3xl hover:border-red-600 border-2 border-black card-color focus:outline-none"
                  required
                ></input>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="button-submit hover:bg-orange-600 bg-black text-white font-medium text-lg md:text-xl rounded-3xl p-2 mb-3"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-5 mr-0 ">
              <div className="card-details text-white flex items-center justify-end ml-20 md:ml-[8rem]">
                <div className="bg-black lg:h-[19rem] relative z-10 rounded-lg mr-[4.5rem] md:mr-[10rem] lg:mr-[7rem] ">
                  <div className="hidden md:block h-14 w-14 -mt-7 -ml-5 bg-orange-600"></div>
                  <h2 className="text-xl sm:text-3xl mt-2 ml-5 font-bold">
                    Info
                  </h2>
                  <div className="text-center m-2 ">
                    <div className="flex items-center mb-2 p-2">
                      <IoCall className="mr-1 text-xl md:text-3xl" />
                      <a
                        href="tel:+919967521331"
                        className="text-md md:text-xl hover:underline"
                      >
                        +91-9967521331
                      </a>
                    </div>
                    <div className="flex items-center mb-2 p-2">
                      <MdEmail className="mr-1 text-xl md:text-3xl" />
                      <a
                        href="mailto:spinejoint.arthritiscare@gmail.com"
                        className="text-md hover:underline"
                      >
                        spinejoint.arthritiscare@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center mb-2 p-2">
                      <MdAccessTime className="mr-1 text-xl md:text-3xl" />
                      <p className="text-md">10 A.M to 8 P.M</p>
                    </div>
                    <div className="flex items-center p-2">
                      <FaHospital className="mr-1 text-xl md:text-3xl" />
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Bhayandar(E),+Mumbai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md hover:underline"
                      >
                        Bhayandar(E), Mumbai
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[9rem] h-[21rem] md:h-[24rem] rounded-r-xl rounded-t-xl rounded-tr-xl bg-orange-600 ml-[12.4rem] md:ml-[17rem] lg:ml-[20rem] -mt-[17.5rem] md:-mt-[21rem]"></div>

              {/* social media icons */}
              <div className="bgcolor w-40 rounded-r-lg rounded-l-lg text-white flex items-end ml-[13rem] md:ml-[18rem] lg:ml-[21rem] -mt-10 relative">
                <a
                  href="https://www.youtube.com/@drdsdubey3069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 mb-6 text-white text-xl md:text-2xl lg:text-3xl hover:text-red-700"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/spine_joints_arthritis_care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 mb-6 text-white text-xl md:text-2xl lg:text-3xl hover:text-purple-500"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 mb-6 text-white text-xl md:text-2xl lg:text-3xl hover:text-blue-600"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;

