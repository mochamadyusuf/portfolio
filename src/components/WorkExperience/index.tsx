import "/src/app/globals.css";
import { works } from "./script";
import { Fragment } from "react";

export default function WorkExperience() {
  return (
    <article className="mb-12">
      <h2 className="subheading-about mb-4">Work Experience</h2>
      <ul>
        {works.map((work, index) => (
          <Fragment key={index}>
            <li className="md:flex md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p className="text-sm md:text-base leading-7">{work.place}</p>
              </div>
              <div className="flex flex-row-reverse justify-end mt-2 md:mt-0 md:flex-col items-end gap-2">
                <div className="badge badge-accent">{work.badge}</div>
                <time className="text-sm md:text-base text-end">
                  {work.date}
                </time>
              </div>
            </li>
            <hr className="my-3 border-t border-black" />
          </Fragment>
        ))}
      </ul>
    </article>
  );
}
