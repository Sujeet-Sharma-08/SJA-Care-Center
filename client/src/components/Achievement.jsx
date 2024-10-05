import React from "react";
import image9 from "../assets/gallary-1.jpg";
import Gallery2 from "../assets/gallary-2.jpg";
import Gallary3 from "../assets/gallary-3.jpg";
import image14 from "../assets/SJA Care Center.jpg";
import image15 from "../assets/No medicines.jpg";
import image16 from "../assets/No injections.jpg";

const Achievement = () => {
  return (
    <div className="w-full relative flex justify-center items-center -mb-10 lg:-mb-32 xl:-mb-36">
      <div className="w-11/12 mx-auto  ">
        <p className="flex text-3xl lg:text-4xl sm:mt-16 mb-10 mt-5 justify-center font-semibold text-black">
          Achievement<span>&mdash;</span>
        </p>

        <div className=" flex-col flex justify-center items-center md:flex-row gap-3 -mt-[2rem] lg:-mt-[7rem] xl:-mt-[9rem] p-10 lg:p-32 xl:p-44">
          <div className="w-full flex flex-col gap-3 2xl:ml-[29rem]">
            <div className="sm:w-[50%] h-[10rem] md:w-[20rem] lg:w-[25rem] lg:h-[12rem] hover:border-red-600 hover:border-2 hover:scale-105 duration-300 transition-all xl:w-[32rem] xl:h-[17rem]  border  border-black rounded-[1.6rem]">
              <img
                src={image9}
                className="w-full h-full bg-cover rounded-[1.6rem]"
                alt=""
              />
            </div>

            <div className="flex gap-3 ">
              <div className="w-full sm:w-[25%] md:w-[10rem] lg:w-[12rem] lg:h-[14rem] h-[12rem] xl:w-[15.8rem] xl:h-[18rem] hover:border-red-600 hover:border-2 hover:scale-105 duration-300 transition-all border  border-black rounded-[1.6rem]">
                <img
                  src={Gallery2}
                  className="w-full h-full bg-cover rounded-[1.6rem]"
                  alt=""
                />
              </div>
              <div className="w-full sm:w-[25%] md:w-[10rem] h-[12rem] lg:w-[12rem] lg:h-[14rem] border xl:w-[15.8rem] xl:h-[18rem] hover:border-red-600 hover:border-2 hover:scale-105 duration-300 transition-all  border-black rounded-[1.6rem]">
                <img
                  src={Gallary3}
                  className="w-full h-full bg-cover rounded-[1.6rem]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col-reverse md:flex-col gap-3 2xl:mr-[30rem]">
            <div className="flex gap-3">
              <div className="w-full sm:w-[25%] md:w-[10rem] h-[12rem] lg:w-[12rem] lg:h-[14rem] xl:w-[15.8rem] xl:h-[18rem] border hover:border-red-600 hover:border-2 hover:scale-105 duration-300 transition-all  border-black rounded-[1.6rem]">
                <img
                  src={image14}
                  className="w-full h-full bg-cover rounded-[1.6rem]"
                  alt=""
                />
              </div>
              <div className="w-full sm:w-[25%] md:w-[10rem] h-[12rem] lg:w-[12rem] lg:h-[14rem] xl:w-[15.8rem] xl:h-[18rem] border hover:border-red-600 hover:border-2 hover:scale-105 duration-300 transition-all  border-black rounded-[1.6rem]">
                <img
                  src={image15}
                  className="w-full h-full bg-cover rounded-[1.6rem]"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-[10rem] sm:w-[25%] md:w-[20rem]  lg:w-[25rem] lg:h-[12rem] xl:w-[32rem] xl:h-[17rem] border hover:border-red-600 hover:border-2 hover:scale-105 duration-300 transition-all  border-black rounded-[1.6rem]">
              <img
                src={image16}
                className="w-full h-full bg-cover rounded-[1.6rem]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
