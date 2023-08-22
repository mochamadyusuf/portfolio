import Image from "next/image";

export default function NavbarMedia({ className = "" }) {
  return (
    <div className="navbar-media">
      <ul className={className}>
        <li>
          <a
            href="https://github.com/mochamadyusuf"
            target="_blank"
            className="lg:tooltip lg:tooltip-bottom"
            data-tip="github"
          >
            <Image
              src="/images/github-icon.svg"
              alt="github"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/mchdysf"
            target="_blank"
            className="lg:tooltip lg:tooltip-bottom"
            data-tip="instagram"
          >
            <Image
              src="/images/instagram-icon.svg"
              alt="instagram"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/mochamadyusuf"
            target="_blank"
            className="lg:tooltip lg:tooltip-bottom"
            data-tip="linkedin"
          >
            <Image
              src="/images/linkedin-icon.svg"
              alt="linkedin"
              width={24}
              height={24}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
