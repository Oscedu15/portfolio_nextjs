"use client";

import WhatsApp from "@/components/whatsapp";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "@/utils/animation";
import Faqs from "@/components/faqs";

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
      setMessage(
        "Gracias por comunicarte! Pronto me comunicare con usted, gracias."
      );
      setTimeout(() => {
        setLoading(false);
      }, 4000);

      resetForm.reset();
    }
  };

  return (
    <div className="">
      <div
        className="bg-gradient-to-r
    dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300 p-4 pt-24 pb-0 sm:pt-32 sm:pb-4"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.h3
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-center
    "
          >
            ¿Tienes un proyecto en mente?
          </motion.h3>
          <motion.h5
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="mt-6 lg:my-6 text-center italic text-[#03363D]/70  dark:text-content/80 text-muted-foreground"
          >
            Por Favor, no dudes en realizar tu consulta.
          </motion.h5>
        </div>
        <div className="flex flex-col max-w-[1400px] lg:gap-x-2 lg:flex-row-reverse justify-evenly">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 * 0.1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 },
            }}
            action="https://formspree.io/f/xgvogldq"
            method="POST"
            onSubmit={handleSubmit}
            className="mx-auto mt-8 pt-6 w-full max-w-xl md:w-4/6 sm:mt-12 shadow-lg dark:shadow-md shadow-[#366b48cc] dark:shadow-primary rounded-xl bg-gradient-to-r dark:from-primary/10 dark:to-tertiary/10 from-gray-300/50 to-gray-400/50 lg:h-[600px]"
          >
            <div className="flex flex-col  justify-center items-center gap-x-8 gap-y-6">
              <div className="mt-2.5 w-9/12">
                <input
                  type="name"
                  required
                  name="firstname"
                  placeholder="Nombre"
                  className="input w-full border rounded-md ring-0 outline-0 transition-all duration-300 px-3 py-2"
                />
              </div>
              <div className="mt-2.5 w-9/12">
                <input
                  type="name"
                  required
                  name="lastname"
                  placeholder="Apellido"
                  className="input w-full border rounded-md ring-0 outline-0 transition-all duration-300 px-3 py-2"
                />
              </div>

              <div className="mt-2.5 w-9/12">
                <input
                  type="tel"
                  required
                  name="phone"
                  placeholder="Telefono"
                  className="input w-full border rounded-md ring-0 outline-0 transition-all duration-300 px-3 py-2"
                />
              </div>

              <div className="mt-2.5 w-9/12">
                <input
                  type="email"
                  required
                  name="Email"
                  placeholder="Correo Electronico"
                  className="input w-full border rounded-md ring-0 outline-0 transition-all duration-300 px-3 py-2"
                />
              </div>

              <div className="mt-2.5 w-9/12">
                <textarea
                  placeholder="Ingresa tu mensaje aqui..."
                  required
                  name="mensaje"
                  className="input w-full text-clip  border rounded-md ring-0 outline-0 transition-all duration-300 px-3 py-2 resize-none"
                />
              </div>

              <div className="mt-10 mb-4 flex justify-center items-center sm:col-span-2">
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
                    className={`flex w-full btn flex-col relative max-w-sm items-center  text-white rounded-full shadow-lg duration-200 border transition-all group ${
                      message ? "hidden" : ""
                    }`}
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
              {message && (
                <div className="flex flex-col max-w-80 justify-center items-center pb-6">
                  <p className="text-center text-gray-600  dark:text-content/80 transition-colors duration-300 mx-auto font-medium capitalize">
                    {message}
                  </p>
                </div>
              )}
            </div>
          </motion.form>
          <Faqs />
        </div>

        <WhatsApp />
      </div>
    </div>
  );
}
