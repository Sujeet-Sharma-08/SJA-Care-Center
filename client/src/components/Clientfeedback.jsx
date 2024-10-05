import React from "react";
import Saumya from "../assets/testimonial1.png";
import Laxman from "../assets/testimonial2.png";
import Sumit from "../assets/testimonial3.png";
import "../Styles/Clientfeedback.css";
import Google from "../assets/Google.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientFeedback = () => {
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
    <div className="m-5 mb-12 sm:mb-0 md:mt-10">
      <div className="flex justify-center items-center">
        <h1 className="client font-semibold text-[23px] md:text-4xl">
          What our client says <span>&mdash;&mdash;</span>
        </h1>
      </div>

      <Slider className="mt-10" {...settings}>
        {/* First card */}
        <div className="flex relative justify-center">
          <a href="https://rb.gy/3mdetl">
            <div className="card-client bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6">
              <div className="flex justify-between mb-4">
                <div className=" -mt-5">
                <img
                  src={Saumya}
                  alt="Saumya"
                  className="rounded-full h-16 w-16 object-cover ml-3 border border-black"
                />
                </div>
                <div className="flex justify-around">
                  <img src={Google} alt="Google Image" className="h-6" />
                  <a
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    href="https://g.co/kgs/Yn61ZEz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google
                  </a>
                </div>
              </div>
              <p className="leading-tight font-normal text-md ">
                After three years of back and joint pain, my mother finally found
                relief with Dr. DS Dubey's treatment. Now she's fully recovered.
                Highly recommend his clinic!
              </p>

              <hr className="mt-5 border-black" />

              <div className="flex justify-between mt-2">
                <h3 className="text-lg font-semibold tracking-wide">Saumya</h3>
                <div className="flex items-center">
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Second card */}
        <div className="flex justify-center">
          <a href="https://rb.gy/3mdetl">
            <div className="card-client bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6">
              <div className="flex justify-evenly mb-4">
               <div className="-mt-5 -ml-5">
               <img
                  src={Laxman}
                  alt="Laxman Mate"
                  className="rounded-full h-16 w-16 object-cover border border-black"
                />
               </div>
                <div className="flex justify-around ">
                  <img src={Google} alt="Google Image" className="h-6 " />
                  <a
                    className="text-blue-600 text-sm hover:text-blue-800 font-medium"
                    href="https://g.co/kgs/WFMvSHD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google
                  </a>
                </div>
              </div>
              <p className="leading-tight font-normal -mt-3 lg:mt-0">
                Best treatment for back pain by chiropractic Dr. DS Dubey I had a
                speedy recovery at Spine Joints and Arthritis Care Centre. The
                customer service was great and the staff provided ...
              </p>

              <hr className="mt-2 border-black" />

              <div className="flex justify-between mt-2">
                <h3 className="text-lg font-semibold tracking-wide">
                  Laxman Mate
                </h3>
                <div className="flex items-center">
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Third card */}
        <div className="flex justify-center">
          <a href="https://rb.gy/3mdetl">
            <div className="card-client bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6">
              <div className="flex justify-between mb-4">
                <div className="-mt-5 -ml-2 ">
                  <img
                    src={Sumit} 
                    alt="Sumit Dubey"
                    className="h-16 w-16 object-cover"
                  />
                </div>
                <div className="flex justify-around">
                  <img src={Google} alt="Google Image" className="h-6" />
                  <a
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    href="https://maps.app.goo.gl/xUJykTg44rbFYkwT8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google
                  </a>
                </div>
              </div>
              <p className="leading-tight font-normal">
                Excellent treatment by Dr. D.S. Dubey and his team. Very effective
                for back pain in Bhayandar.
              </p>

              <hr className="mt-5 border-black" />

              <div className="flex justify-between mt-2">
                <h3 className="text-lg font-semibold tracking-wide">
                  Sumit Dubey
                </h3>
                <div className="flex items-center">
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                  <span className="fa fa-star text-yellow-400"></span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ClientFeedback;
