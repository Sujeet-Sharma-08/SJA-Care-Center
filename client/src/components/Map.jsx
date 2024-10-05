import React from "react";

const Map = () => {
  const latitude = 19.298660991467276;
  const longitude = 72.85487670427474;

  return (
    <div className="min-h-screen flex justify-center items-center -mt-20 xl:-mt-28 ml-2 mr-2 ">
      <div className="w-full max-w-screen-lg h-96 border-2 border-black bg-slate-200 text-gray-600 body-font px-5 py-5 sm:py-24 rounded-lg overflow-hidden flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
          // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
//lg:w-4/5 md:w-3/5 sm:w-2/5