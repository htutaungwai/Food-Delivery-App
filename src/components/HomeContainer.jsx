import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gradient-to-tr from-red-50 to-red-100"
      id="home"
    >
      <div className="py-2 md:pl-16 flex-1 flex flex-col items-start justify-center ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full px-4 py-3">
          <p className="text-base text-orange-500 font-semibold ">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <p className="text-[2rem] md:text-[3rem] font-bold tracking-wide text-headingColor">
            The Fastest Delivery in
            <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
              Your City
            </span>
          </p>
          <p className="text-base text-textColor text-center md:text-left md:w-[80%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at,
            veniam consequatur deleniti voluptate nulla, laboriosam debitis
            pariatur quia aspernatur repudiandae repellat vero neque, ipsam
            suscipit saepe repellendus. Fugit, dolor.
          </p>

          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-150 mt-6 w-full md:w-auto"
          >
            Order Now
          </button>
        </div>
      </div>

      <div className="py-2 md:mr-16 flex-1 flex  justify-center items-center relative h-[720px]  md:min-h-[800px] sm:h-600 lg:min-h-[400px] ">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto max-w-full h-420 w-auto md:w-auto m-auto lg:h-650"
        />

        <div
          className="w-full h-full absolute flex items-center top-0 left-0 justify-center gap-2 lg:h-650 flex-wrap mt-16 md:mt-2 xs:my-10 
          lg:gap-2 sm:justify-around sm:gap-1 
        "
        >
          {heroData &&
            heroData.map(({ id, price, decp, name, imageSrc }) => {
              return (
                <div
                  key={id}
                  className="min-w-[200px] h-auto p-3 bg-cardOverlay backdrop-blur-md rounded-md flex justify-center items-center flex-col sm:min-h-[150px] sm:-mt-20  lg:min-h-[200px]"
                >
                  <img
                    src={imageSrc}
                    alt="ice-cream"
                    className="lg:w-120 w-80 xs:w-24 -mt-16 sm:-mt-20"
                  />

                  <p className="text-base font-semibold text-textColor">
                    {name}
                  </p>

                  <p className="text-sm text-lightTextGray my-2">{decp}</p>
                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-orange-600">$</span>
                    {price}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
