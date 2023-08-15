import Link from "next/link";

export default function NavbarItem({ className = "", hover = "" }) {
  return (
    <div className="navbar-item">
      <ul className={className}>
        <li>
          <Link href="" className={hover}>
            Home
          </Link>
        </li>
        <li>
          <Link href="" className={hover}>
            About
          </Link>
        </li>
        <li>
          <Link href="#tech-stack" className={hover}>
            Tech Stack
          </Link>
        </li>
        <li>
          <Link href="" className={hover}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="" className={hover}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}