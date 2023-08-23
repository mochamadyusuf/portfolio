import Image from "next/image";
import { ADD_LINK } from "./script";

export default function NavbarMedia() {
  return (
    <div className="navbar-media">
      <ul className="flex mt-3 lg:mt-0 lg:gap-5">
        {ADD_LINK.map((GET_LINK, index) => (
          <li key={index}>
            <a
              href={GET_LINK.path}
              target="_blank"
              className="lg:tooltip lg:tooltip-bottom"
              data-tip={GET_LINK.name}
            >
              <Image
                src={GET_LINK.img}
                alt={GET_LINK.name}
                width={24}
                height={24}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
