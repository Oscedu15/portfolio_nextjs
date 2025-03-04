import Badge from "@/components/badge";
import Hero from "@/components/hero";

import ProjectsPage from "@/components/projects";

import WhyUs from "@/components/whyus";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Badge />
      <ProjectsPage />
      <WhyUs />
    </div>
  );
}
