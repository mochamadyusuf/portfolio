import Link from "next/link";
import { ADD_LINK } from "./script";

export default function NavbarItem() {
  return (
    <div className="navbar-item">
      <ul className="lg:flex lg:gap-8 font-semibold md:font-bold group">
        {ADD_LINK.map((GET_LINK, index) => (
          <li key={index}>
            <Link
              href={GET_LINK.path}
              className="group-hover:bg-gradient-radial from-indigo-400 to-pink-400
        hover:text-transparent bg-clip-text"
            >
              {GET_LINK.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
