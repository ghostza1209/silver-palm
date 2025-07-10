"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";

function ImageSlider() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };

  const imageURLs = useMemo(() => {
    return [
      "/images/front-view.jpg",
      "/images/back.jpg",
      "/images/living-room_2.jpg",
      "/images/master-bedroom-bathroom_5.jpg",
      "/images/kitchen-room_2.jpg",
      "/images/master-bedroom_3.jpg",
      "/images/master-bedroom-bathroom_4.jpg",
    ];
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      {/* Luxury overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10 pointer-events-none"></div>

      <Slider {...settings} className="w-screen">
        {imageURLs.map((url, index) => (
          <div
            key={`img_slider_${index}`}
            className="h-[200px] md:h-[800px] relative w-full"
          >
            <div className="hidden sm:flex top-0 absolute flex-col items-center w-full justify-center h-full text-white z-20">
              <div className="px-20 py-8 backdrop-blur-sm bg-black/10 rounded-xl">
                {/* Luxury decorative element */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 rotate-45 border-2 border-amber-300"></div>
                    <div className="absolute inset-2 rotate-45 border border-amber-400"></div>
                  </div>
                </div>

                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl drop-shadow-md uppercase">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-100">
                    Silver Palm
                  </span>
                </h1>
                <p className="mt-6 text-xl leading-8 font-light tracking-wide text-amber-50">
                  Your Dream Villa, Designed for Exclusive Luxury Living
                </p>
                <div className="w-[200px] h-[2px] bg-gradient-to-r from-amber-300 to-amber-500 my-6 mx-auto"></div>
                <p className="mt-6 text-3xl font-bold text-center">
                  Start from{" "}
                  <span className="text-amber-300 font-serif italic drop-shadow-lg">
                    15.9 MB
                  </span>
                </p>

                {/* Luxury badge */}
                {/* <div className="absolute -bottom-5 right-10 transform rotate-12 bg-amber-500/90 text-white text-xs uppercase tracking-widest py-1 px-3 rounded-sm shadow-lg">
                  Exclusive
                </div> */}
              </div>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
              <div className="px-6 py-4 backdrop-blur-sm bg-black/20 rounded-lg">
                <h1 className="text-3xl font-bold tracking-tight uppercase">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-100">
                    Silver Palm
                  </span>
                </h1>
                <div className="w-[100px] h-[2px] bg-gradient-to-r from-amber-300 to-amber-500 my-3 mx-auto"></div>
                <p className="text-xl font-bold text-center">
                  <span className="text-amber-300 font-serif italic">
                    15.9 MB
                  </span>
                </p>
              </div>
            </div>

            <Image
              fill
              src={url}
              sizes="100vw"
              alt="Luxury villa"
              className="object-cover w-screen"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
