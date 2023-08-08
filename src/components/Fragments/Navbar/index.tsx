import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container mx-auto px-5 navbar flex-row-reverse lg:my-5 lg:flex-row lg:justify-between lg:px-10">
      <div className="navbar-brand">
        <Link href="/">
          <Image src="/next.svg" width={100} height={100} alt="next logo" />
        </Link>
      </div>
      <div className="navbar-item hidden lg:flex lg:w-1/2">
        <ul className="flex justify-between w-full">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Tech Stack</Link>
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
        <div className="navbar-link w-1/6 ml-10">
          <ul className="w-full flex gap-5">
            <li>
              <a href="">
                <Image
                  src="/images/github-icon.svg"
                  alt="github"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src="/images/twitter-icon.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="">
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
      </div>

      <div className="dropdown w-full lg:hidden">
        <label tabIndex={0}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <div
          className="menu menu-sm dropdown-content z-[1] shadow-lg rounded bg-white mt-4 p-3"
          tabIndex={0}
        >
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Tech Stack</Link>
            </li>
            <li>
              <Link href="">Projects</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
          <ul className="flex mt-3">
            <li>
              <a href="">
                <Image
                  src="/images/github-icon.svg"
                  alt="github"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src="/images/twitter-icon.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="">
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
      </div>
    </nav>
  );
}
