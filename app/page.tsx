import Hero from "@/components/hero";
import Main from "@/components/main";
import ProjectsPage from "@/components/projects";
import WhyUs from "@/components/whyus";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Main />
      <ProjectsPage />
      <WhyUs />
    </div>
  );
}
