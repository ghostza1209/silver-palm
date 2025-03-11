"use client";

import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/lib/captcha";
import { useForm, SubmitHandler } from "react-hook-form";
import { addContactToGs } from "@/actions/formAction";
import { AddContactToGs } from "@/types/form";
import { z } from "zod";
import clsx from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";
import isMobilePhone from "validator/lib/isMobilePhone";

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string().refine((val) => isMobilePhone(val), {
    message: "Please enter an valid phone number",
  }),
  message: z.string(),
  email: z.string().email({ message: "Please enter an valid email address" }),
});

export default function ContactUs(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddContactToGs>({ resolver: zodResolver(schema) });

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const handleCaptchaSubmission = async (token: string | null) => {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false));
  };

  const onSubmit: SubmitHandler<AddContactToGs> = async (
    data: AddContactToGs
  ): Promise<void> => {
    if (!isVerified) {
      setRecaptchaError("Please confirm reCaptcha");
      return;
    }
    setRecaptchaError(null);
    const addContactToGsWithData = addContactToGs.bind(null, data);
    await addContactToGsWithData();
    toast.success(
      "We've received your inquiry and will be in contact with you shortly.",
      {
        duration: 5000,
      }
    );

    reset();
    recaptchaRef.current?.reset();
    setIsVerified(false);
  };

  return (
    <div className="relative bg-white px-6 py-20 overflow-hidden">
      {/* Ultra-luxury villa contact form background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Premium gold gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-radial from-amber-200 to-transparent opacity-30 blur-3xl" />
        <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-gradient-radial from-amber-100 to-transparent opacity-30 blur-xl" />
        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-gradient-radial from-amber-50 to-transparent opacity-30 blur-xl" />

        {/* Luxury marble pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 70% 70%, rgba(251, 191, 36, 0.1) 1px, transparent 1px),
              linear-gradient(135deg, rgba(251, 191, 36, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 40px 40px, 20px 20px",
          }}
        />

        {/* Gold dust particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-300"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
          Register For Special Privilege
        </h2>
        <p className="mt-4 text-gray-600">
          Please complete the form below and we will get back to you soon
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mt-4"></div>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-10 relative">
        {/* Animated luxury border with flowing light effect */}
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 opacity-75 blur-sm animate-border-flow"></div>

        {/* Flowing light effect - primary */}
        <div className="absolute -inset-[2px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[length:400%_400%] bg-[linear-gradient(45deg,transparent_20%,rgba(251,191,36,0.8)_30%,rgba(251,191,36,0.3)_40%,transparent_50%,transparent_70%,rgba(251,191,36,0.3)_80%,rgba(251,191,36,0.8)_90%,transparent)] animate-border-light"></div>
        </div>

        {/* Flowing light effect - secondary (offset timing) */}
        <div className="absolute -inset-[2px] rounded-lg overflow-hidden opacity-70">
          <div className="absolute inset-0 bg-[length:400%_400%] bg-[linear-gradient(135deg,transparent_20%,rgba(251,191,36,0.6)_30%,rgba(251,191,36,0.2)_40%,transparent_50%,transparent_70%,rgba(251,191,36,0.2)_80%,rgba(251,191,36,0.6)_90%,transparent)] animate-border-light-reverse"></div>
        </div>

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-amber-50 to-transparent opacity-30"></div>

        <form
          className="relative bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg z-10"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            backgroundImage:
              "radial-gradient(circle at 100% 100%, rgba(251, 191, 36, 0.03) 0%, transparent 50%)",
          }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900 relative group-hover:text-amber-700 transition-colors duration-300"
              >
                <span className="relative inline-block">
                  First name
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </label>
              <div className="mt-2.5 group relative">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-[100%] bg-[linear-gradient(45deg,transparent,rgba(251,191,36,0.3),transparent)] animate-shimmer"></div>
                </div>
                <input
                  type="text"
                  {...register("firstName")}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 transition-all duration-300 group-hover:ring-amber-300"
                />
                <p className="mt-3 text-red-600">{errors.firstName?.message}</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900 relative group-hover:text-amber-700 transition-colors duration-300"
              >
                <span className="relative inline-block">
                  Last name
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </label>
              <div className="mt-2.5 group relative">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-[100%] bg-[linear-gradient(45deg,transparent,rgba(251,191,36,0.3),transparent)] animate-shimmer"></div>
                </div>
                <input
                  type="text"
                  {...register("lastName")}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 transition-all duration-300 group-hover:ring-amber-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900 relative group-hover:text-amber-700 transition-colors duration-300"
              >
                <span className="relative inline-block">
                  Email
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </label>
              <div className="mt-2.5 group relative">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-[100%] bg-[linear-gradient(45deg,transparent,rgba(251,191,36,0.3),transparent)] animate-shimmer"></div>
                </div>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  autoComplete="email"
                  className={clsx(
                    "block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all duration-300 group-hover:ring-amber-300",
                    errors.email?.message
                      ? "border-1 border-rose-500"
                      : "border-0 focus:ring-amber-500"
                  )}
                />
                <p className="mt-3 text-rose-500">{errors.email?.message}</p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900 relative group-hover:text-amber-700 transition-colors duration-300"
              >
                <span className="relative inline-block">
                  Phone number
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </label>
              <div className="mt-2.5 group relative">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-[100%] bg-[linear-gradient(45deg,transparent,rgba(251,191,36,0.3),transparent)] animate-shimmer"></div>
                </div>
                <input
                  type="tel"
                  {...register("phoneNumber")}
                  id="phone-number"
                  autoComplete="tel"
                  className={clsx(
                    "block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all duration-300 group-hover:ring-amber-300",
                    errors?.phoneNumber
                      ? "border-1 border-rose-500"
                      : "border-0 focus:ring-amber-500"
                  )}
                />
                <p className="mt-3 text-red-500">
                  {errors.phoneNumber?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 relative group-hover:text-amber-700 transition-colors duration-300"
              >
                <span className="relative inline-block">
                  Message
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </label>
              <div className="mt-2.5 group relative">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-[100%] bg-[linear-gradient(45deg,transparent,rgba(251,191,36,0.3),transparent)] animate-shimmer"></div>
                </div>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 transition-all duration-300 group-hover:ring-amber-300"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
            />
            <p className="mt-3 text-red-600">{recaptchaError}</p>
          </div>
          <div className="mt-10">
            <button
              aria-disabled={isSubmitting}
              type="submit"
              className="relative block w-full rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:from-amber-600 hover:to-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">
                {isSubmitting ? "Submitting..." : "Submit"}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
