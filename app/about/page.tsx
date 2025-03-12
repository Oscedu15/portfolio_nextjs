"use client";

import Integrations from "@/components/integration";
import Introduction from "@/components/introduction";

const AboutPage = () => {
  return (
    <div className="bg-gray-900">
      <div
        className="flex flex-col bg-gradient-to-r p-4 py-16 
        dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300"
      >
        <div className="max-w-7xl mx-auto">
          <Introduction />
          <Integrations />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
