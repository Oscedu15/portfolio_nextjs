import Badge from "@/components/badge";
import Faqs from "@/components/faqs";
import Main from "@/components/main";
import React from "react";

const ProjectsPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-y-2  bg-gradient-to-r 
        from-primary/10 to-tertiary/10"
    >
      <Main />
      <Badge />
      <Faqs />
    </div>
  );
};

export default ProjectsPage;
