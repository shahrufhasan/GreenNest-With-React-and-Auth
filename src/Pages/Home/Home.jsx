import React from "react";
import banner from "../../../public/banner.jpg";

const Home = () => {
  return (
    <div className="relative w-full h-[800px] md:h-[800px]">
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />

      <div className="absolute top-1/2 right-0 w-full md:w-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Nurturing a <br />
          <span className="text-primary">Greener</span> Tomorrow
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-base max-w-full md:max-w-md">
          At GreenNest, we believe that a sustainable lifestyle starts at home.
          From eco-friendly products to practical green solutions, we empower
          you to create a healthier, more vibrant environment for yourself and
          the planet. Join us in making every choice count towards a brighter,
          greener future.
        </p>
      </div>
    </div>
  );
};

export default Home;
