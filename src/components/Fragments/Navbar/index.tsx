import NavbarMobile from "../NavbarMobile";
import NavbarLogo from "./NavbarLogo";
import NavbarItem from "./NavbarItem";
import NavbarMedia from "./NavbarMedia";

export default function Navbar({ className = "" }) {
  return (
    <nav className={className}>
      <NavbarLogo />
      <div className="navbar-menu hidden lg:flex lg:gap-8">
        <NavbarItem
          className="flex gap-8 font-bold group"
          hover="group-hover:bg-gradient-radial from-indigo-400 to-pink-400
        hover:text-transparent bg-clip-text"
        />
        <NavbarMedia className="flex gap-5" />
      </div>
      <NavbarMobile />
    </nav>
  );
}
