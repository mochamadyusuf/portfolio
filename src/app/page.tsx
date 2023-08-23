import Hero from "@/components/Hero";
import Project from "@/components/Project";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="lg:px-24">
      <Hero />
      <TechStack />
      <Project />
    </main>
  );
}
