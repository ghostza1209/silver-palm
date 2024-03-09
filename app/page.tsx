"use client";

import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import LocationInFormation from "@/components/LocationInformation";
import PropertyInformation from "@/components/PropertyInformation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ImageSlider />
      <PropertyInformation />
      <LocationInFormation />
      <ContactUs />
      <Footer />
    </main>
  );
}
