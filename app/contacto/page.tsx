"use client";

import WhatsApp from "@/components/whatsapp";
import { useState } from "react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Sales{" "}
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Please feel free to ask anything
        </p>
      </div>

      <form className="mx-auto mt-16 max-w-xl sm:mt-20 shadow-xl rounded-xl">
        <div className="flex flex-col  justify-center items-center gap-x-8 gap-y-6">
          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              id="firstname"
              placeholder="First Name"
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>
          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              id="lastname"
              placeholder="Last Name"
              className="border border-blue-500 rounded-full shadow-lg w-11/12"
            />
          </div>

          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              id="Company"
              placeholder="Company"
              className="border border-blue-500 rounded-full shadow-lg w-11/12"
            />
          </div>

          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              id="Email"
              placeholder="Email Address"
              className="border border-blue-500 rounded-full shadow-lg w-11/12"
            />
          </div>

          <div className=" mx-2">
            <div className="mt-2.5">
              <textarea
                placeholder="Type Your Message Here..."
                className="border border-blue-500 rounded-full shadow-lg w-11/12"
              />
            </div>
          </div>
          <div className="mt-10 mb-6 flex justify-center items-center sm:col-span-2">
            <button
              type="submit"
              className="flex w-full max-w-sm items-center px-8 py-3 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 duration-200 transition-all "
            >
              Let's Talk
            </button>
          </div>
        </div>
      </form>
      <WhatsApp />
    </div>
  );
}
