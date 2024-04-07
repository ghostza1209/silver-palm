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
    <div className="bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Register For Special Privilege
        </h2>
        <p className="mt-4 text-gray-500">
          Please complete the form below and we will get back to you soon
        </p>
      </div>
      <form
        className="mx-auto mt-16 max-w-xl sm:mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("firstName")}
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="mt-3 text-red-600">{errors.firstName?.message}</p>
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("lastName")}
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                {...register("email")}
                id="email"
                autoComplete="email"
                className={clsx(
                  "block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                  errors.email?.message
                    ? "border-1 border-rose-500"
                    : "border-0 focus:ring-indigo-600"
                )}
              />
              <p className="mt-3 text-rose-500">{errors.email?.message}</p>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                {...register("phoneNumber")}
                id="phone-number"
                autoComplete="tel"
                className={clsx(
                  "block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                  errors?.phoneNumber
                    ? "border-1 border-rose-500"
                    : "border-0 focus:ring-indigo-600"
                )}
              />
              <p className="mt-3 text-red-500">{errors.phoneNumber?.message}</p>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
