import "/src/app/globals.css";

export default function Education() {
  return (
    <article className="mb-12">
      <h2 className="subheading-about mb-4">Education</h2>
      <ul>
        <li className="md:flex md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Course in Bootcamp Web Development
            </h3>
            <p className="text-sm md:text-base leading-7">
              Haltev IT Learning Center - Bekasi, Indonesia
            </p>
          </div>
          <div className="flex flex-row-reverse justify-end mt-2 md:mt-0 md:flex-col items-end gap-2">
            <div className="badge badge-accent">Full Time</div>
            <time className="text-sm md:text-base text-end">
              Sep 2022 - Dec 2022
            </time>
          </div>
        </li>
        <hr className="my-3 border-t border-black" />
        <li className="md:flex md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Bachelor Degree in Information Systems
            </h3>
            <p className="text-sm md:text-base leading-7">
              Universitas Persada Indonesia YAI - Jakarta, Indonesia
            </p>
          </div>
          <div className="flex flex-row-reverse justify-end mt-2 md:mt-0 md:flex-col items-end gap-2">
            <div className="badge badge-accent">Full Time</div>
            <time className="text-sm md:text-base text-end">
              Sep 2015 - Sep 2021
            </time>
          </div>
        </li>
      </ul>
    </article>
  );
}
