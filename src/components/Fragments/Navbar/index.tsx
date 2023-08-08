import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "../NavbarMobile";

export default function Navbar() {
  return (
    <nav className="navbar flex-row-reverse lg:mt-5 lg:flex-row lg:justify-between">
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
      <NavbarMobile />
    </nav>
  );
}
