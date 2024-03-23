"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useCallback, useMemo } from "react";
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
    let imageURLs = [];
    for (let i = 1; i < 11; i++) {
      if (i === 6) {
        continue;
      }
      imageURLs.push(`/images/internal/p${i}.jpg`);
    }
    return imageURLs;
  }, []);

  return (
    <div className="w-full h-auto sm:h-[700px] overflow-hidden max-w-screen-2xl">
      <Slider {...settings}>
        {imageURLs.map((url, index) => (
          <>
            <div className="hidden sm:flex top-[64px] absolute flex-col items-center w-full justify-center h-full text-white">
              <div className="px-20 py-8">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl drop-shadow-md">
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
