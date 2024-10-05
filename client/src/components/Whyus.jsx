import React from "react";
import whyusimage from "../assets/sja images/whyus.png";
import "../Styles/Whyus.css";

const Whyus = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div>
        <h1 className="why-us font-semibold text-2xl md:text-4xl mt-10 text-center">
          Why Us <span>&mdash;</span>
        </h1>
      </div>
      <div className="mt-2 flex justify-center items-center">
        {/* Image for Why Us */}
        <div className="container mx-auto text-black">
          <div className="flex flex-col items-center mb-10 pb-5">
            <img
              className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3 rounded-lg mb-5"
              src={whyusimage}
              alt="Why Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
