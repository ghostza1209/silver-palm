import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GalleryImages from "@/components/GalleryImages";
import ImageSlider from "@/components/ImageSlider";
import LocationInFormation from "@/components/LocationInformation";
import PropertyInformation from "@/components/PropertyInformation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silver Palm",
  description:
    "Villa in a 300 SqM with 3 bedrooms and 3 bathrooms with private pool that is available for sale",
  keywords: "3 bedrooms, Villa, For Sale",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ImageSlider />
      <PropertyInformation />
      <GalleryImages />
      <LocationInFormation />
      <ContactUs />
      <Footer />
    </main>
  );
}
