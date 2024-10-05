 import { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Cards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [isVisible]);

  return (
 
    <div
      className="text-gray-500 body-font mb-10 bg-white relative overflow-hidden ]"
      style={{ fontFamily: "Adamina, serif" }}
    >
      <div className="container px-5 py-12 mx-auto mt-3 pt-3">
        <div className="flex justify-center flex-wrap -m-2">
          <div className="p-2 lg:w-1/5 md:w-1/3 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-white bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-black">
                  <h1 className="title-font text-4xl font-medium text-black mb-3 card-text">
                    <CountUp
                      start={0}
                      end={3500}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                    <div className="pt-3 text-2xl">Patients Cure</div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>

          <div className="p-2 lg:w-1/5 md:w-1/3 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-white bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-black">
                  <h1 className="title-font text-4xl font-medium text-black mb-3 card-text">
                    <CountUp
                      start={0}
                      end={6}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                    <div className="pt-3 text-2xl">Years of Experience</div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/3 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-white bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-black">
                  <h1 className="title-font text-4xl font-medium text-black mb-3 card-text">
                    <CountUp
                      start={0}
                      end={98}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    % <br />
                    <div className="pt-3 text-2xl">Satisfaction Rate</div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/3 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-white  bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-black">
                  <h1 className="title-font font-medium text-4xl  text-black mb-3 card-text">
                    <CountUp
                    
                      start={0}
                      end={15}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                    <div className="pt-3 text-2xl">Total Treatments</div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;