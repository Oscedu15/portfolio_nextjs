import Faqs from "@/components/faqs";
import Main from "@/components/main";


const ProjectsPage = () => {
  return (
    <div className="dark:bg-gray-900 overflow-hidden">
      <div
        className="flex flex-col justify-center items-center gap-y-2 p-4 bg-gradient-to-r
        dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300"
      >
        <Main />
        <Faqs />
      </div>
    </div>
  );
};

export default ProjectsPage;
