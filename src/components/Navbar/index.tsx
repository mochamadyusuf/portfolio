import NavbarMobile from "../NavbarMobile";
import NavbarLogo from "./NavbarLogo";
import NavbarItem from "./NavbarItem";
import NavbarMedia from "./NavbarMedia";

export default function Navbar() {
  return (
    <nav className="navbar z-10 fixed top-0 flex-row-reverse justify-center shadow-md bg-white md:py-6 lg:shadow-none lg:flex-row lg:gap-64 lg:pt-8 lg:w-full">
      <NavbarLogo />
      <div className="navbar-menu hidden lg:flex lg:gap-8">
        <NavbarItem />
        <NavbarMedia />
      </div>
      <NavbarMobile />
    </nav>
  );
}
