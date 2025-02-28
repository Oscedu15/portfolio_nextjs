"use client";

import WhatsApp from "@/components/whatsapp";
import { useState } from "react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      className="px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 "
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl
        bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent"
        >
          Contact Sales{" "}
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Por Favor, no dudes en preguntar cualquier cosa.
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
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>

          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              id="Company"
              placeholder="Company"
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>

          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              id="Email"
              placeholder="Email Address"
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>

          <div className="mt-2.5 w-9/12">
            <textarea
              placeholder="Type Your Message Here..."
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>

          <div className="mt-10 mb-6 flex justify-center items-center sm:col-span-2">
            <button
              type="submit"
              className="flex w-full relative max-w-sm items-center px-8 py-3  text-white rounded-full shadow-lg  hover:ring-2 ring-offset-2 duration-200  bg-surface border
       border-white/10 hover:border-primary/30 transition-all group"
            >
              <span className="text-content group-hover:text-primary transition-colors">
                Enviar
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0
        group-hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
        </div>
      </form>
      <WhatsApp />
    </div>
  );
}
