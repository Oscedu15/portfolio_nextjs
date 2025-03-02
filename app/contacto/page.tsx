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
    const response = await fetch((event.target as HTMLFormElement).action, {
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
    <div className="bg-gray-900">
      <div
        className="bg-gradient-to-r
    from-primary/10 to-tertiary/10 p-4 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl text-center font-bold tracking-tight sm:text-4xl
    bg-gradient-to-r from-primary via-secondary
    to-tertiary bg-clip-text text-transparent"
          >
            Contactanos.{" "}
          </h2>
          <p className="mt-2 text-center text-white text-lg leading-8 text-muted-foreground">
            Por Favor, no dudes en realizar tu consulta.
          </p>
        </div>

        <form
          action="https://formspree.io/f/xgvogldq"
          method="POST"
          onSubmit={handleSubmit}
          className="mx-auto mt-14 pt-6 max-w-xl sm:mt-16 shadow-xl shadow-primary rounded-xl bg-gradient-to-r
        from-primary/10 to-tertiary/10"
        >
          <div className="flex flex-col  justify-center items-center gap-x-8 gap-y-6">
            <div className="mt-2.5 w-9/12">
              <input
                type="name"
                required
                name="firstname"
                placeholder="Nombre"
                className="bg-primary/10 text-gray-300 placeholder:text-primary placeholder:italic w-full border rounded-md border-gray-600  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              />
            </div>
            <div className="mt-2.5 w-9/12">
              <input
                type="name"
                required
                name="lastname"
                placeholder="Apellido"
                className="bg-primary/10 text-gray-300 placeholder:text-primary placeholder:italic w-full border rounded-md border-gray-600  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              />
            </div>

            <div className="mt-2.5 w-9/12">
              <input
                type="tel"
                required
                name="phone"
                placeholder="Telefono"
                className="bg-primary/10 text-gray-300 placeholder:text-primary placeholder:italic w-full border rounded-md border-gray-600  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              />
            </div>

            <div className="mt-2.5 w-9/12">
              <input
                type="email"
                required
                name="Email"
                placeholder="Correo Electronico"
                className="bg-primary/10 text-gray-300 placeholder:text-primary placeholder:italic w-full border rounded-md border-gray-600  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              />
            </div>

            <div className="mt-2.5 w-9/12">
              <textarea
                placeholder="Ingresa tu mensaje aqui..."
                required
                name="mensaje"
                className="bg-primary/10 text-gray-300 placeholder:text-primary placeholder:italic w-full text-clip  border rounded-md border-gray-600  focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 resize-none"
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
                  className="flex w-full relative max-w-sm items-center px-8 py-3  text-white rounded-full shadow-lg duration-200  bg-surface border
   border-white/10 hover:border-primary/30 transition-all group"
                >
                  <span className="text-content group-hover:text-primary transition-colors">
                    Enviar
                  </span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r
    from-primary/10 to-tertiary/10 opacity-0 rounded-full
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
    </div>
  );
}
