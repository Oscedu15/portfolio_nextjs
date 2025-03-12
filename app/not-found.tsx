import { ParticleCanvas } from "@/hooks/particle";
import Link from "next/link";
import { FaRegFaceFrownOpen } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-black">
      <ParticleCanvas />
      <div className="absolute flex justify-center items-center flex-col">
        <FaRegFaceFrownOpen className="w-20 text-gray-200 text-6xl" />
        <h2
          className="from-[#06b4cccc]/70 via-[#06b4cccc]/80 to-[#06b4cccc]/90 dark:from-primary dark:via-secondary dark:to-tertiary"
        >
          404 Not Found
        </h2>
        <h3
          className="from-[#06b4cccc]/70 via-[#06b4cccc]/80 to-[#06b4cccc]/90 dark:from-primary dark:via-secondary dark:to-tertiary"
        >
           Pagina no encontrada.
        </h3>

        <Link
          href="/"
          className="flex mt-2 relative max-w-sm items-center px-8 py-3  text-white rounded-full shadow-lg  duration-200  bg-surface border
       border-white/10 hover:border-primary/30 transition-all group"
        >
          <span className="text-content cursor-pointer group-hover:text-primary transition-colors">
            Regresar
          </span>
          <div
            className="absolute rounded-full inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0
        group-hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
