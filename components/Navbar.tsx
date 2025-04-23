"use client";

import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon, EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline";

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-primary-100">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            {/* Logo with enhanced styling */}
                            <div className="flex-shrink-0 flex items-center space-x-2 relative group">
                                {/* Subtle glow effect behind logo */}
                                <div
                                    className="absolute inset-0 bg-gradient-radial from-amber-200 to-transparent opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-700 -z-10"></div>

                                {/* Logo container with hover effects */}
                                <div className="relative overflow-hidden rounded-full p-1 transition-all duration-500">
                                    {/* Shimmer effect on hover */}
                                    <div
                                        className="absolute inset-0 -z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div
                                            className="absolute -inset-[100%] bg-[linear-gradient(45deg,transparent,rgba(251,191,36,0.2),transparent)] animate-shimmer"></div>
                                    </div>

                                    {/* Logo image with enhanced size and hover effects */}
                                    <img
                                        className="h-14 w-auto drop-shadow-md transition-all duration-500 group-hover:drop-shadow-lg group-hover:scale-105"
                                        src="/images/logo.png"
                                        alt="Silver Palm"
                                    />
                                </div>

                                {/* Brand name with elegant styling */}
                                <div className="hidden sm:block">
                                    <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 group-hover:from-amber-600 group-hover:to-amber-800 transition-all duration-500">
                                        Silver Palm
                                    </h1>
                                    <p className="text-xs text-gray-500 group-hover:text-amber-600 transition-colors duration-500">Villas</p>
                                </div>
                            </div>

                            {/* Contact information - hidden on mobile, visible on medium screens and up */}
                            <div className="hidden md:flex items-center space-x-6">
                                <a
                                    href="mailto:silverpalmvillas.info@gmail.com"
                                    className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-300 group"
                                >
                  <span className="relative">
                    <EnvelopeIcon
                        className="h-5 w-5 mr-2 text-amber-500 transition-transform duration-300 group-hover:scale-110"/>
                    <span
                        className="absolute inset-0 rounded-full bg-amber-200 opacity-0 group-hover:opacity-30 group-hover:animate-ping-once"></span>
                  </span>
                                    <span>silverpalmvillas.info@gmail.com</span>
                                </a>
                                <a
                                    href="tel:+66625561935"
                                    className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-300 group"
                                >
                  <span className="relative">
                    <PhoneIcon
                        className="h-5 w-5 mr-2 text-amber-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"/>
                    <span
                        className="absolute inset-0 rounded-full bg-amber-200 opacity-0 group-hover:opacity-30 group-hover:animate-ping-once"></span>
                  </span>
                                    <span>+66 62-5561935</span>
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-amber-600 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu panel */}
                    <Disclosure.Panel className="md:hidden">
                        <div className="px-4 pt-2 pb-3 space-y-1 border-t border-amber-100">
                            <a
                                href="mailto:silverpalmvillas.info@gmail.com"
                                className="flex items-center py-2 text-gray-600 hover:text-amber-600 transition-colors duration-300 group"
                            >
                <span className="relative">
                  <EnvelopeIcon
                      className="h-5 w-5 mr-2 text-amber-500 transition-transform duration-300 group-hover:scale-110"/>
                  <span
                      className="absolute inset-0 rounded-full bg-amber-200 opacity-0 group-hover:opacity-30 group-hover:animate-ping-once"></span>
                </span>
                                <span>silverpalmvillas.info@gmail.com</span>
                            </a>
                            <a
                                href="tel:+66625561935"
                                className="flex items-center py-2 text-gray-600 hover:text-amber-600 transition-colors duration-300 group"
                            >
                <span className="relative">
                  <PhoneIcon
                      className="h-5 w-5 mr-2 text-amber-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"/>
                  <span
                      className="absolute inset-0 rounded-full bg-amber-200 opacity-0 group-hover:opacity-30 group-hover:animate-ping-once"></span>
                </span>
                                <span>+66 62-5561935</span>
                            </a>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
