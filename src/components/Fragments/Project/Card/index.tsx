import Image from "next/image";
import { BiLink, BiLogoGithub } from "react-icons/bi";
import "/src/app/globals.css";

const projects = [
  {
    id: 1,
    img: "/images/jebol.png",
    alt: "jebol (jersey bola online)",
    title: "JEBOL (jersey bola online)",
    description: `This is an example of a front-end website using the CSS bootstrap
          framework and not using authentication.`,
    website: "https://mochamadyusuf.github.io/",
    github: "https://github.com/mochamadyusuf/mochamadyusuf.github.io.git",
  },
  {
    id: 2,
    img: "/images/movie-app.png",
    alt: "movie app",
    title: "Movie App",
    description: `This is an example of a movie list website using the React JS library by fetching data from an open source API.`,
    website: "https://movie-app-mochamad-yusuf.web.app",
    github: "https://github.com/mochamadyusuf/mochamadyusuf.github.io.git",
  },
];

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
                className="link-project hover:text-indigo-500"
                target="_blank"
              >
                <BiLink /> Live Preview
              </a>
              <a
                href={project.github}
                className="link-project hover:text-indigo-500"
                target="_blank"
              >
                <BiLogoGithub /> View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
