"use client";

import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GalleryImages from "@/components/GalleryImages";
import ImageSlider from "@/components/ImageSlider";
import LocationInFormation from "@/components/LocationInformation";
import PropertyInformation from "@/components/PropertyInformation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ImageSlider />
      <PropertyInformation />
      <GalleryImages/>
      <LocationInFormation />
      <ContactUs />
      <Footer />
    </main>
  );
}
