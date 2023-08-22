import "/src/app/globals.css";

export default function Skill() {
  return (
    <article className="mb-12">
      <h2 className="subheading-about mb-4">Skills</h2>
      <ul>
        <li>
          <p>HTML</p>
          <progress
            className="progress progress-error"
            value={90}
            max="100"
          ></progress>
        </li>
        <li>
          <p>CSS</p>
          <progress
            className="progress progress-primary"
            value={85}
            max="100"
          ></progress>
        </li>
        <li>
          <p>JavaScript</p>
          <progress
            className="progress progress-warning"
            value={60}
            max="100"
          ></progress>
        </li>
        <li>
          <p>Tailwind</p>
          <progress
            className="progress progress-info"
            value={80}
            max="100"
          ></progress>
        </li>
        <li>
          <p>React</p>
          <progress
            className="progress progress-info"
            value={75}
            max="100"
          ></progress>
        </li>
      </ul>
    </article>
  );
}
