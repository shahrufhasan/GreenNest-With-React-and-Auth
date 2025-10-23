import React from "react";
import idea1 from "../../../public/idea1.jpg";
import idea2 from "../../../public/idea2.jpg";
import idea3 from "../../../public/idea3.jpg";
const DecorIdeas = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 w-11/12 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-semibold mb-5">
          Transform Your Space <br /> with Plants
        </h2>
        <p className="text-primary">
          Discover creative ways to incorporate greenery into your home decor.
          From minimalist arrangements to lush indoor jungles, <br /> plants can
          elevate any room's ambiance while purifying your air.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div>
          <img
            src={idea1}
            alt=""
            className="rounded-md hover:scale-105 transition-all duration-300 shadow-2xl"
          />
        </div>
        <div>
          <img
            src={idea2}
            alt=""
            className="rounded-md hover:scale-105 transition-all duration-300 shadow-2xl"
          />
        </div>
        <div>
          <img
            src={idea3}
            alt=""
            className="rounded-md hover:scale-105 transition-all duration-300 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DecorIdeas;
