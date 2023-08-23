import "/src/app/globals.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";

export default function Skill() {
  return (
    <article className="mb-12">
      <h2 className="subheading-about mb-4">Skills</h2>
      <ul>
        <li>
          <p>
            <FaHtml5 className="inline mr-1 text-orange-600" />
            HTML
          </p>
          <progress
            className="progress progress-error"
            value={90}
            max="100"
          ></progress>
        </li>
        <li>
          <p>
            <FaCss3Alt className="inline mr-1 text-blue-600" />
            CSS
          </p>
          <progress
            className="progress progress-primary"
            value={85}
            max="100"
          ></progress>
        </li>
        <li>
          <p>
            <RiJavascriptFill className="inline mr-1 text-yellow-300" />
            JavaScript
          </p>
          <progress
            className="progress progress-warning"
            value={60}
            max="100"
          ></progress>
        </li>
        <li>
          <p>
            <BiLogoTailwindCss className="inline mr-1 text-teal-400" />
            Tailwind
          </p>
          <progress
            className="progress progress-accent"
            value={80}
            max="100"
          ></progress>
        </li>
        <li>
          <p>
            <FaReact className="inline mr-1 text-blue-400" />
            React
          </p>
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
