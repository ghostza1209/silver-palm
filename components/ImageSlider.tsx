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
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
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
    <div className="w-full overflow-hidden max-w-screen-2xl">
      <Slider {...settings}>
        {imageURLs.map((url, index) => (
          <div key={`img_slider_${index}`} className="h-[200px] md:h-[800px]">
            <div className="hidden sm:flex top-0 absolute flex-col items-center w-full justify-center h-full text-white">
              <div className="px-20 py-8 z-10">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl drop-shadow-md">
                  Silver palm
                </h1>
                <p className="mt-6 text-lg leading-8">
                  Your Dream Villa, Designed for Every Lifestyle
                </p>
                <div className="w-[150px] h-[3px] bg-white border my-0 mx-auto"></div>
                <p className="mt-6 text-3xl subpixel-antialiased font-bold text-center animate-bounce">
                  Start from{" "}
                  <span className="text-amber-500 italic drop-shadow-lg">
                    13.9 MB
                  </span>
                </p>
              </div>
            </div>
            <Image
              fill
              src={url}
              sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="slider"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
