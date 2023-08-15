import Image from "next/image";

export default function NavbarMedia({ className = "" }) {
  return (
    <div className="navbar-media">
      <ul className={className}>
        <li>
          <a href="" className="lg:tooltip lg:tooltip-bottom" data-tip="github">
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
            href=""
            className="lg:tooltip lg:tooltip-bottom"
            data-tip="twitter"
          >
            <Image
              src="/images/twitter-icon.svg"
              alt="twitter"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a
            href=""
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