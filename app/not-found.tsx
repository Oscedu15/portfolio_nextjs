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
          className=" text-4xl font-bold bg-gradient-to-r
        from-primary via-secondary to-tertiary 
        bg-clip-text text-transparent"
        >
          404 Not Found
        </h2>
        <p
          className="text-xl font-semibold bg-gradient-to-r
        from-primary via-secondary to-tertiary 
        bg-clip-text text-transparent"
        >
          Could not find the requested invoice.
        </p>

        <Link
          href="/"
          className="flex mt-2 relative max-w-sm items-center px-8 py-3  text-white rounded-full shadow-lg  duration-200  bg-surface border
       border-white/10 hover:border-primary/30 transition-all group"
        >
          <span className="text-content cursor-pointer group-hover:text-primary transition-colors">
            Go Back
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
