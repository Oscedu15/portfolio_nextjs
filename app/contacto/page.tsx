"use client";

import WhatsApp from "@/components/whatsapp";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.target as HTMLFormElement);
    const resetForm = event.target as HTMLFormElement;
    const response = await fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage(result.errors.map((error: Error) => error.message).join(","));
      return false;
    }

    if (response.ok) {
      setMessage("Su Mensaje se a Enviado Correctamente");
      setTimeout(() => {
        setLoading(false);
      }, 4000);

      resetForm.reset();
    }
  };

  return (
    <div className="px-4 py-24 sm:py-32 lg:px-8 ">
      <div
        className="mx-auto max-w-2xl text-centerbg-gradient-to-r
    from-primary/10 to-tertiary/10 "
      >
        <h2
          className="text-3xl text-center font-bold tracking-tight sm:text-4xl
    bg-gradient-to-r from-primary via-secondary
    to-tertiary bg-clip-text text-transparent"
        >
          Contact Sales{" "}
        </h2>
        <p className="mt-2 text-center text-lg leading-8 text-muted-foreground">
          Por Favor, no dudes en preguntar cualquier cosa.
        </p>
      </div>

      <form
        action="https://formspree.io/f/xgvogldq"
        method="POST"
        onSubmit={handleSubmit}
        className="mx-auto mt-16  max-w-xl sm:mt-20 shadow-xl rounded-xl"
      >
        <div className="flex flex-col  justify-center items-center gap-x-8 gap-y-6">
          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              required
              name="firstname"
              placeholder="First Name"
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>
          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              required
              name="lastname"
              placeholder="Last Name"
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>

          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              required
              name="Company"
              placeholder="Company"
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>

          <div className="mt-2.5 w-9/12">
            <input
              type="name"
              required
              name="Email"
              placeholder="Email Address"
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>

          <div className="mt-2.5 w-9/12">
            <textarea
              placeholder="Type Your Message Here..."
              required
              name="mensaje"
              className="bg-gray-200 w-full border rounded-md border-gray-300  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>

          <div className="mt-10 mb-6 flex justify-center items-center sm:col-span-2">
            {loading ? (
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
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
            )}
          </div>
          {message && <p className="font-bold pb-2">{message}</p>}
        </div>
      </form>
      <WhatsApp />
    </div>
  );
}
