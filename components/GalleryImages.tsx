"use client";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "@/constants/images";

export default function GalleryImages() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <>
      <div className="w-full pl-3 pb-5 sm:hidden">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 border-s-4 border-amber-500 pl-2">
          Gallery
        </h1>
      </div>
      <div className="w-full">
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        {!!currentImage && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </>
  );
}
