import Faqs from "@/components/faqs";
import Main from "@/components/main";


const ProjectsPage = () => {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <div
        className="flex flex-col justify-center items-center gap-y-2  bg-gradient-to-r p-4
        from-primary/10 to-tertiary/10"
      >
        <Main />
        <Faqs />
      </div>
    </div>
  );
};

export default ProjectsPage;
