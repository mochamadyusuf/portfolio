import Hero from "@/components/Fragments/Hero";
import Project from "@/components/Fragments/Project";
import TechStack from "@/components/Fragments/TechStack";

export default function Home() {
  return (
    <main className="lg:px-24">
      <Hero />
      <TechStack />
      <Project />
    </main>
  );
}
