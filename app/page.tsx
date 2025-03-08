import Badge from "@/components/badge";
import Hero from "@/components/hero";
import ProjectsPage from "@/components/projects";
import WhyUs from "@/components/whyus";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r dark:bg-gray-900 dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300 overflow-hidden">
      <Hero />
      <Badge />
      <ProjectsPage />
      <WhyUs />
    </div>
  );
}
