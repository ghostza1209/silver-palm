"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { images as originalImages} from "@/constants/images";
import { ReactNode } from "react";

// Helper function to convert ReactNode to string
const reactNodeToString = (node: ReactNode): string => {
  if (node === null || node === undefined) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number" || typeof node === "boolean")
    return String(node);
  return "";
};

// Helper function to fix image paths
const fixImagePath = (path: string): string => {
  if (path.startsWith("//")) {
    return path.substring(2);
  }
  return path;
};

// Define the slide type for the lightbox
interface LightboxSlide {
  src: string;
  thumbnail: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
}

export default function GalleryImages() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Transform images to the format expected by yet-another-react-lightbox
  const images: LightboxSlide[] = originalImages.map((image: CustomImage) => ({
    src: fixImagePath(image.original),
    thumbnail: image.src,
    width: image.width,
    height: image.height,
    alt: reactNodeToString(image.caption),
    title: reactNodeToString(image.caption),
    description: reactNodeToString(image.caption),
  }));

  const openLightbox = (index: number) => {
    setIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="w-full pl-3 pb-5 sm:hidden">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 border-s-4 border-amber-500 pl-2">
          Gallery
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 py-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => openLightbox(idx)}
          >
            <div className="aspect-[16/9]">
              <img
                src={image.thumbnail}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium truncate">
                  {image.title}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Thumbnails, Zoom, Captions, Fullscreen]}
        carousel={{
          finite: false,
          spacing: 16,
        }}
        render={{
          slide: (props) => {
            const { slide } = props;
            return (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={slide.src}
                  alt={typeof slide.alt === "string" ? slide.alt : ""}
                  style={{
                    maxWidth: "95%",
                    maxHeight: "90vh",
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          },
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          gap: 16,
          border: 2,
          borderRadius: 4,
          padding: 4,
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
          descriptionMaxLines: 3,
        }}
        zoom={{
          maxZoomPixelRatio: 5,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
        }}
        animation={{
          swipe: 250,
          zoom: 300,
        }}
        on={{
          view: ({ index }) => setIndex(index),
        }}
        styles={{
          root: {
            "--yarl__color_backdrop": "rgba(0, 0, 0, 0.9)",
            "--yarl__slide_title_color": "#fff",
            "--yarl__slide_description_color": "#f8f8f8",
            "--yarl__container_backgroundColor": "rgba(0, 0, 0, 0.9)",
          },
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            padding: "0",
          },
          slide: {
            width: "100%",
            height: "100%",
          },
          thumbnail: {
            border: "2px solid transparent",
            borderRadius: "4px",
            filter: "brightness(0.8)",
          },
          thumbnailsTrack: { padding: "8px 0" },
          thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
          captionsTitle: { fontSize: "1.2rem", fontWeight: "bold" },
          captionsDescription: { fontSize: "1rem" },
          navigationPrev: {
            color: "white",
            fontSize: "1.5rem",
            filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))",
          },
          navigationNext: {
            color: "white",
            fontSize: "1.5rem",
            filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))",
          },
        }}
      />
    </>
  );
}
