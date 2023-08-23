import Image from "next/image";
import { BiLink, BiLogoGithub } from "react-icons/bi";
import "/src/app/globals.css";
import { projects } from "./script";

export default function Card() {
  return (
    <>
      {projects.map((project) => (
        <div className="card w-[300px] bg-white" key={project.id}>
          <figure className="h-full overflow-hidden">
            <Image
              src={project.img}
              alt={project.alt}
              width={300}
              height={0}
              className="hidden lg:inline-block"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">{project.title}</h2>
            <p className="text-sm leading-relaxed">{project.description}</p>
            <div className="card-actions text-sm">
              <a
                href={project.website}
                className="underline hover:text-indigo-500"
                target="_blank"
              >
                <BiLink className="inline-flex items-center" /> Live Preview
              </a>
              <a
                href={project.github}
                className="underline hover:text-indigo-500"
                target="_blank"
              >
                <BiLogoGithub className="inline-flex items-center" /> View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
