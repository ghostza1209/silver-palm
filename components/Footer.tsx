"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-100 w-full py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:silverpalmvillas.info@gmail.com"
                className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-300 group"
              >
                <span className="relative">
                  <EnvelopeIcon className="h-5 w-5 mr-2 text-amber-500 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 rounded-full bg-amber-200 opacity-0 group-hover:opacity-30 group-hover:animate-ping-once"></span>
                </span>
                <span>silverpalmvillas.info@gmail.com</span>
              </a>
              <a
                href="tel:+66625561935"
                className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-300 group"
              >
                <span className="relative">
                  <PhoneIcon className="h-5 w-5 mr-2 text-amber-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="absolute inset-0 rounded-full bg-amber-200 opacity-0 group-hover:opacity-30 group-hover:animate-ping-once"></span>
                </span>
                <span>+66 62-5561935</span>
              </a>
            </div>
            <p className="text-sm text-gray-500 text-center">
              &copy; {new Date().getFullYear()} Silver Palm
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
