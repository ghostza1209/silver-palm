import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GalleryImages from "@/components/GalleryImages";
import ImageSlider from "@/components/ImageSlider";
import LocationInFormation from "@/components/LocationInformation";
import PropertyInformation from "@/components/PropertyInformation";
import FloorPlan from "@/components/FloorPlan";
import AbstractBackground from "@/components/AbstractBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Silver Palm | Modern lifestyles villa for Sale in Si-Sunthon, Phuket, Thailand",
  description:
    "Silver Palm is a modern lifestyles villa for Sale in Si-Sunthon, Phuket, Thailand. It is a 400 SqM with 3 bedrooms and 4 bathrooms with private pool.",
  keywords: [
    "Si Sunthon villa for sale​",
    "Phuket real estate investment",
    "Modern villas near Bang Tao Beach",
    "Villas close to Laguna Golf Course Phuket",
    "Villas close to HeadStart International School",
    "Property near Laguna Golf Course Phuket​",
    "Phuket modern lifestyles villa",
  ],
  openGraph: {
    title:
      "Silver Palm | Modern lifestyles villa for Sale in Si-Sunthon, Phuket, Thailand",
    description:
      "Silver Palm is a modern lifestyles villa for Sale in Si-Sunthon, Phuket, Thailand. It is a 400 SqM with 3 bedrooms and 4 bathrooms with private pool.",
    images: "/images/logo.png",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <AbstractBackground />
      <ImageSlider />
      <PropertyInformation />
      <GalleryImages />
      <FloorPlan />
      <LocationInFormation />
      <ContactUs />
      <Footer />
    </main>
  );
}
