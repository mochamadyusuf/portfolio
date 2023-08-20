import Image from "next/image";

const SKILLS = [
  {
    url: "./images/html.svg",
    alt: "html logo",
  },
  {
    url: "./images/css.svg",
    alt: "css logo",
  },
  {
    url: "./images/javascript.svg",
    alt: "javascript logo",
  },
  {
    url: "./images/bootstrap.svg",
    alt: "bootstrap logo",
  },
  {
    url: "./images/tailwind.svg",
    alt: "tailwind logo",
  },
  {
    url: "./images/react.svg",
    alt: "react logo",
  },
  {
    url: "./images/next-js.svg",
    alt: "next js logo",
  },
  {
    url: "./images/laravel.svg",
    alt: "laravel logo",
  },
  {
    url: "./images/git.svg",
    alt: "git logo",
  },
  {
    url: "./images/vscode.svg",
    alt: "vscode logo",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="min-h-screen md:min-h-full md:mt-28 lg:min-h-screen lg:mt-36 lg:px-0"
    >
      <div className="leading-10 text-center">
        <h2 className="text-3xl font-bold underline">My Tech Stack</h2>
        <p className="italic">
          🚀 Technologies I&apos;ve been working with recently
        </p>
      </div>
      <div className="bg-slate-200 bg-opacity-50  rounded-xl">
        <ul className="flex gap-12 justify-center flex-wrap mt-10 py-8 md:mt-16 md:gap-y-20 lg:gap-24 lg:mt-10">
          {SKILLS.map((SKILL, index) => (
            <li key={index}>
              <Image src={SKILL.url} alt={SKILL.alt} width={100} height={100} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
