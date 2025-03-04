"use client"
// import Image from "next/image";
// import { motion } from 'framer-motion';

// const projects = [
//   {
//     id: "1",
//     name: "Drowing room for family time",
//     description:
//       "Bedroom with a clean and comfortable design for your family. charming whit a modern design.",
//     image: "/perfil.jpeg",
//     link: "",
//   },
//   {
//     id: "2",
//     name: "Kitchen look modern and clean",
//     description:
//       "Kitchen look modern and clean. charming whit a modern design.",
//     image: "/perfil.jpeg",
//     link: "",
//   },
//   {
//     id: "3",
//     name: "Perfect living room for family time",
//     description:
//       "Drowing room with a clean and comfortable design for your family. charming whit a modern design.",
//     image: "/perfil.jpeg",
//     link: "",
//   },
// ];

const ProjectsPage = () => {
  return (
    <div>
      <div className="bg-[url('/programacion.jpg')] text-center bg-center bg-cover">
        <h1 className="mx-auto max-w-7xl py-64 text-6xl font-semibold tracking-widest text-white ">
          Our Projects
        </h1>
      </div>
      {/* <div className="mx-auto grid lg:grid-cols-2 gap-8 py-8">
        {projects?.map((project, index) => (
          <motion.div  whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
            key={index}
            className="relative mx-auto overflow-hidden rounded-xl group "
          >
            <div className="mx-auto w-5/6 md:w-[600px] h-[350px] md:h-[600px]">
              <Image
                src={project.image}
                width={480}
                height={380}
                alt={project.id}
                className="w-full"
                
              />
            </div>
            <div
              className="absolute mx-auto w-5/6 bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end md:w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full
                    from-transparent to-black group-hover:translate-y-0"
            >
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default ProjectsPage;
