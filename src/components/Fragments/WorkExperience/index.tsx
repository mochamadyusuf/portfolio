import "/src/app/globals.css";

export default function WorkExperience() {
  return (
    <article className="mb-12">
      <h2 className="subheading-about mb-4">Work Experience</h2>
      <ul>
        <li className="md:flex md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Web Development Intern</h3>
            <p className="text-sm md:text-base leading-7">
              PT. Saladin Artha Sentrum - Jakarta, Indonesia
            </p>
          </div>
          <div className="flex flex-row-reverse justify-end mt-2 md:mt-0 md:flex-col items-end gap-2">
            <div className="badge badge-accent">Internship</div>
            <time className="text-sm md:text-base text-end">
              Jan 2023 - Apr 2023
            </time>
          </div>
        </li>
      </ul>
    </article>
  );
}
