import AboutMe from "@/components/Fragments/AboutMe";
import Certificate from "@/components/Fragments/Certificate";
import Education from "@/components/Fragments/Education";
import HeroAbout from "@/components/Fragments/HeroAbout";
import Skill from "@/components/Fragments/Skill";
import WorkExperience from "@/components/Fragments/WorkExperience";

export default function About() {
  return (
    <main className="mt-28 mx-8 lg:grid lg:grid-cols-2">
      <section className="col-span-2 text-center leading-6 mb-12">
        <HeroAbout />
      </section>
      <section>
        <AboutMe />
        <WorkExperience />
        <Education />
      </section>
      <section className="lg:ml-auto lg:w-4/5">
        <Skill />
      </section>
      <section className="col-span-2">
        <Certificate />
      </section>
    </main>
  );
}
