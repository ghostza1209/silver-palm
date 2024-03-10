"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
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

  const imageURLs = [
    "/images/internal/IMG_0234.JPG",
    "/images/internal/IMG_0235.JPG",
    "/images/internal/IMG_0236.JPG",
    "/images/internal/IMG_0237.JPG",
    "/images/internal/IMG_0238.JPG",
    // "/images/internal/IMG_0239.JPG",
    "/images/internal/IMG_0240.JPG",
    "/images/internal/IMG_0241.JPG",
    "/images/internal/IMG_0242.JPG",
    "/images/internal/IMG_0243.JPG",
    "/images/internal/IMG_0244.JPG",
    "/images/internal/IMG_0245.JPG",
    "/images/internal/IMG_0246.JPG",
    "/images/internal/IMG_0247.JPG",
    "/images/internal/IMG_0248.JPG",
  ];

  return (
    <div className="w-full h-[800px] overflow-hidden">
      <Slider {...settings}>
        {imageURLs.map((url, index) => (
          <>
            <div className="absolute flex flex-col items-center w-full justify-center h-full text-white">
              <div className="px-20 py-8">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                  Silver palm
                </h1>
                <p className="mt-6 text-lg leading-8">
                  Luxury villa with affordable price.
                </p>
                <div className="w-[150px] h-[3px] bg-white border my-0 mx-auto"></div>
                <p className="mt-6 text-3xl subpixel-antialiased font-bold text-center animate-bounce">
                  Start from{" "}
                  <span className="text-amber-500 italic drop-shadow-lg">
                    12.9 MB
                  </span>
                </p>
              </div>
            </div>
            <img key={`img_slider_${index}`} src={url} />
          </>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
